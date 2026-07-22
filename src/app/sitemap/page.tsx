import { getPosts } from "@/lib/wordpress";
import Link from "next/link";

export const revalidate = 60;

export default async function SitemapHTMLPage() {
  const { posts } = await getPosts({ perPage: 100 });

  const staticPages = [
    { title: "首页", url: "/" },
    { title: "外贸建站服务", url: "/waimaojianzhan" },
    { title: "SEO 与 GEO 优化技巧", url: "/web-design-seo" },
    { title: "服务器推荐", url: "/server-recommendation" },
    { title: "GEO 全效工具箱", url: "/geo-tools" },
    { title: "建站避坑与诊断工具", url: "/audit-tool" },
    { title: "技术专区与博客", url: "/blog" },
    { title: "隐私政策", url: "/privacy-policy" },
    { title: "服务条款", url: "/terms-of-service" },
  ];

  return (
    <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "100px 24px 60px" }}>
      <h1 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "24px" }}>网站地图 (HTML Sitemap)</h1>
      
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, borderBottom: "2px solid #0A4ECB", paddingBottom: "8px", marginBottom: "16px" }}>
          主要页面
        </h2>
        <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px", listStyle: "none", padding: 0 }}>
          {staticPages.map((p, idx) => (
            <li key={idx}>
              <Link href={p.url} style={{ color: "#0A4ECB", textDecoration: "none", fontWeight: 600 }}>
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: "20px", fontWeight: 700, borderBottom: "2px solid #0A4ECB", paddingBottom: "8px", marginBottom: "16px" }}>
          最新技术文章
        </h2>
        <ul style={{ display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0 }}>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`} style={{ color: "#1d1d1f", textDecoration: "none" }}>
                {post.title} <span style={{ fontSize: "12px", color: "#86868b" }}>({post.date})</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
