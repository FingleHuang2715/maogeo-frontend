import { getPosts, getCategories, getTags } from "@/lib/wordpress";
import Link from "next/link";
import AuthorCard from "@/components/AuthorCard";
import "@/styles/BlogArchive.css";

export const revalidate = 60; // 1分钟增量生成

interface BlogPageProps {
  searchParams: Promise<{
    page?: string;
    cat?: string;
    tag?: string;
  }>;
}

export default async function BlogArchivePage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = await searchParams;
  const page = parseInt(resolvedSearchParams.page || "1", 10);
  const cat = resolvedSearchParams.cat || "";
  const tag = resolvedSearchParams.tag || "";

  const [{ posts, totalPages, totalPosts }, categories, tags] = await Promise.all([
    getPosts({ page, perPage: 8, categorySlug: cat, tagSlug: tag }),
    getCategories(),
    getTags(),
  ]);

  return (
    <main className="mg-archive-wrapper">
      <div className="mg-archive-container">
        <header className="mg-archive-header-card">
          <div>
            <div className="mg-archive-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="mg-archive-badge-svg">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              猫哥技术专栏 · 出海干货
            </div>
            <h1 className="mg-archive-main-title">外贸建站、谷歌 SEO 与 GEO 优化实战文章</h1>
            <p className="mg-archive-sub-desc">
              深耕出海 8 年+ 经验总结。涵盖独立站搭建、Google 算法解读、大模型 RAG 提炼与高转化 CRO 技巧。
            </p>
          </div>
        </header>

        {/* 分类过滤器 */}
        <nav className="mg-archive-cats-bar">
          <Link
            href="/blog"
            className={`mg-cat-item-link ${!cat && !tag ? "active" : ""}`}
          >
            全部文章
          </Link>
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/blog?cat=${c.slug}`}
              className={`mg-cat-item-link ${cat === c.slug ? "active" : ""}`}
            >
              {c.name} ({c.count})
            </Link>
          ))}
        </nav>

        {/* 文章列表 */}
        <section className="mg-archive-main-flow">
          {posts.length === 0 ? (
            <div style={{ padding: "40px", textAlign: "center", background: "#fff", borderRadius: "12px" }}>
              暂未找到相关技术文章
            </div>
          ) : (
            posts.map((post) => (
              <article key={post.id} className="mg-feed-item">
                {post.featuredImage && (
                  <div className="mg-feed-thumb">
                    <img src={post.featuredImage} alt={post.title} />
                  </div>
                )}
                <div className="mg-feed-content">
                  <h2 className="mg-feed-title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mg-feed-excerpt">{post.excerpt}</p>

                  <div className="mg-feed-meta">
                    <div className="mg-feed-meta-row">
                      <span className="mg-feed-meta-author">猫哥</span>
                      <span>·</span>
                      <span>{post.date}</span>
                    </div>

                    {post.categories && post.categories.length > 0 && (
                      <div className="mg-feed-meta-row">
                        <span className="mg-meta-label">分类:</span>
                        <div className="mg-feed-cats-wrap">
                          {post.categories.map((c) => (
                            <Link
                              key={c.id}
                              href={`/blog?cat=${c.slug}`}
                              className="mg-feed-cat-pill"
                            >
                              {c.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))
          )}

          {/* 分页导航 */}
          {totalPages > 1 && (
            <div className="mg-pagination-wrap">
              <Link
                href={`/blog?page=${page - 1}${cat ? `&cat=${cat}` : ""}${tag ? `&tag=${tag}` : ""}`}
                className={`mg-page-btn ${page <= 1 ? "disabled" : ""}`}
              >
                ‹ 上一页
              </Link>
              <span style={{ fontSize: "0.9rem", color: "#86868b", alignSelf: "center" }}>
                第 {page} / {totalPages} 页 (共 {totalPosts} 篇)
              </span>
              <Link
                href={`/blog?page=${page + 1}${cat ? `&cat=${cat}` : ""}${tag ? `&tag=${tag}` : ""}`}
                className={`mg-page-btn ${page >= totalPages ? "disabled" : ""}`}
              >
                下一页 ›
              </Link>
            </div>
          )}
        </section>

        {/* 侧边栏 */}
        <aside className="mg-archive-sidebar">
          <AuthorCard />

          <div className="mg-sidebar-widget">
            <h3 className="mg-widget-title">热门技术标签</h3>
            <div className="mg-sidebar-tags">
              {tags.map((t) => (
                <Link
                  key={t.id}
                  href={`/blog?tag=${t.slug}`}
                  className={`mg-sidebar-tag-link ${tag === t.slug ? "active" : ""}`}
                >
                  #{t.name} ({t.count})
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
