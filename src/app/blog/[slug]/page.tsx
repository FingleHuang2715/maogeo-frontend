import { getPostBySlug } from "@/lib/wordpress";
import { notFound } from "next/navigation";
import Link from "next/link";
import AuthorCard from "@/components/AuthorCard";
import "@/styles/BlogSingle.css";
import type { Metadata } from "next";

export const revalidate = 60;

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  if (!post) return { title: "文章未找到 - 猫哥" };

  return {
    title: `${post.title} - 猫哥`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mg-single-wrapper">
      <div className="mg-single-container">
        <div className="mg-post-center-col">
          <article className="mg-post-main">
            <h1 className="mg-post-title">{post.title}</h1>
            <div className="mg-post-meta">
              <span className="mg-meta-item">作者：猫哥</span>
              <span>·</span>
              <span className="mg-meta-item">发布时间：{post.date}</span>
              {post.categories && post.categories.length > 0 && (
                <>
                  <span>·</span>
                  <span className="mg-meta-tag">{post.categories[0].name}</span>
                </>
              )}
            </div>

            {post.featuredImage && (
              <div className="mg-post-featured-image">
                <img src={post.featuredImage} alt={post.title} />
              </div>
            )}

            <div
              className="mg-post-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>

        <aside className="mg-archive-sidebar">
          <AuthorCard />
        </aside>
      </div>
    </main>
  );
}
