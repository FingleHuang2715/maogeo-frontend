import fetch from "node-fetch";

export interface WPPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  featuredImage?: string;
  categories?: { id: number; name: string; slug: string }[];
  tags?: { id: number; name: string; slug: string }[];
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface WPTag {
  id: number;
  name: string;
  slug: string;
  count: number;
}

const WP_API_URL = "https://post.maogeo.top/wp-json/wp/v2";

export async function getPosts({
  page = 1,
  perPage = 8,
  categorySlug = "",
  tagSlug = "",
}: {
  page?: number;
  perPage?: number;
  categorySlug?: string;
  tagSlug?: string;
} = {}): Promise<{ posts: WPPost[]; totalPages: number; totalPosts: number }> {
  try {
    let url = `${WP_API_URL}/posts?_embed&page=${page}&per_page=${perPage}`;

    if (categorySlug) {
      const catsRes = await fetch(`${WP_API_URL}/categories?slug=${categorySlug}`);
      const cats = (await catsRes.json()) as WPCategory[];
      if (cats && cats.length > 0) {
        url += `&categories=${cats[0].id}`;
      }
    }

    if (tagSlug) {
      const tagsRes = await fetch(`${WP_API_URL}/tags?slug=${tagSlug}`);
      const tags = (await tagsRes.json()) as WPTag[];
      if (tags && tags.length > 0) {
        url += `&tags=${tags[0].id}`;
      }
    }

    const res = await fetch(url);
    if (!res.ok) {
      return { posts: [], totalPages: 0, totalPosts: 0 };
    }

    const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
    const totalPosts = parseInt(res.headers.get("X-WP-Total") || "0", 10);

    const rawPosts = (await res.json()) as any[];

    const posts: WPPost[] = rawPosts.map((post) => {
      const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
      const categories = post._embedded?.["wp:term"]?.[0]?.map((c: any) => ({
        id: c.id,
        name: c.name,
        slug: c.slug,
      }));
      const tags = post._embedded?.["wp:term"]?.[1]?.map((t: any) => ({
        id: t.id,
        name: t.name,
        slug: t.slug,
      }));

      return {
        id: post.id,
        title: post.title.rendered,
        slug: post.slug,
        excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, "").slice(0, 160) + "...",
        content: post.content.rendered,
        date: new Date(post.date).toLocaleDateString("zh-CN"),
        featuredImage: featuredMedia || "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721010110868.webp",
        categories,
        tags,
      };
    });

    return { posts, totalPages, totalPosts };
  } catch (error) {
    console.error("Error fetching WP posts:", error);
    return { posts: [], totalPages: 0, totalPosts: 0 };
  }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?_embed&slug=${slug}`);
    if (!res.ok) return null;
    const rawPosts = (await res.json()) as any[];
    if (rawPosts.length === 0) return null;

    const post = rawPosts[0];
    const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    const categories = post._embedded?.["wp:term"]?.[0]?.map((c: any) => ({
      id: c.id,
      name: c.name,
      slug: c.slug,
    }));
    const tags = post._embedded?.["wp:term"]?.[1]?.map((t: any) => ({
      id: t.id,
      name: t.name,
      slug: t.slug,
    }));

    return {
      id: post.id,
      title: post.title.rendered,
      slug: post.slug,
      excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, "").slice(0, 160) + "...",
      content: post.content.rendered,
      date: new Date(post.date).toLocaleDateString("zh-CN"),
      featuredImage: featuredMedia || "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721010110868.webp",
      categories,
      tags,
    };
  } catch (error) {
    console.error(`Error fetching post by slug ${slug}:`, error);
    return null;
  }
}

export async function getCategories(): Promise<WPCategory[]> {
  try {
    const res = await fetch(`${WP_API_URL}/categories?per_page=100&hide_empty=true`);
    if (!res.ok) return [];
    return (await res.json()) as WPCategory[];
  } catch {
    return [];
  }
}

export async function getTags(): Promise<WPTag[]> {
  try {
    const res = await fetch(`${WP_API_URL}/tags?per_page=100&hide_empty=true`);
    if (!res.ok) return [];
    return (await res.json()) as WPTag[];
  } catch {
    return [];
  }
}
