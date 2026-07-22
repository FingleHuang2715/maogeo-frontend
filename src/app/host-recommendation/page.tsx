"use client";
import React, { useState } from "react";
import "@/styles/ServerRecommendation.css";

function StarRating({ score, label }: { score: number; label?: string }) {
  const renderStar = (index: number) => {
    const starValue = index + 1;
    if (score >= starValue) {
      return (
        <svg key={index} width="16" height="16" viewBox="0 0 24 24" fill="#10b981" stroke="#10b981" strokeWidth="1">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    } else if (score >= starValue - 0.7) {
      const gradId = `half-star-${index}-${score.toString().replace('.', '-')}`;
      return (
        <svg key={index} width="16" height="16" viewBox="0 0 24 24" stroke="#10b981" strokeWidth="1">
          <defs>
            <linearGradient id={gradId}>
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill={`url(#${gradId})`} />
        </svg>
      );
    } else {
      return (
        <svg key={index} width="16" height="16" viewBox="0 0 24 24" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
      <div style={{ display: 'flex', gap: '2px' }}>
        {[0, 1, 2, 3, 4].map(renderStar)}
      </div>
      {label && <span style={{ color: "#10b981", fontWeight: 700, fontSize: "13px" }}>({score} {label})</span>}
    </div>
  );
}

function VendorSlider() {
  const [activeTab, setActiveTab] = useState(0);
  const slides = [
    { title: "华为云", url: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260717131625114.webp" },
    { title: "京东云", url: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260717131614412.webp" },
    { title: "西部数据", url: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260717131555536.webp" }
  ];

  return (
    <div className="srv-carousel-wrapper">
      <div className="srv-carousel-display">
        <img src={slides[activeTab].url} alt={`${slides[activeTab].title} 界面`} />
      </div>
      <div className="srv-carousel-tabs">
        {slides.map((slide, idx) => (
          <button
            key={idx}
            type="button"
            className={`srv-carousel-tab ${activeTab === idx ? "active" : ""}`}
            onClick={() => setActiveTab(idx)}
          >
            {slide.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ServerRecommendationPage() {
  return (
    <main className="server-recom-root">
      <header className="srv-sec1-hero" id="srv-section-hero" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url('https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721010110868.webp')", backgroundSize: "cover", backgroundPosition: "center center" }}>
        <div className="srv-sec1-hero-glow" aria-hidden="true"></div>
        <div className="srv-sec1-container">
          <div className="srv-hero-grid">
            <div className="srv-hero-left">
              <span className="srv-hero-eyebrow">2026 年 VPS 选购指南 · 猫哥实测整理</span>
              <h1 className="srv-sec1-hero-title">
                出海与国内建站服务器<br />
                <span className="gradient-text">推荐榜单及终极避坑指南</span>
              </h1>
              <p className="srv-sec1-hero-desc">
                工欲善其事，必先利其器。一个稳定、极速的服务器是独立站 Google SEO 排名与大模型 GEO 检索抓取成功的核心基石。猫哥结合 8年+ 一线建站与运维实操经验，为您客观梳理国内外顶级服务器选购方案。
              </p>
              
              <ul className="srv-hero-meta-list">
                <li className="srv-hero-meta-item">✓ 猫哥 8年+ 部署运维实操经验</li>
                <li className="srv-hero-meta-item">✓ 适配 WordPress / 外贸 B2B / B2C 独立站</li>
                <li className="srv-hero-meta-item">✓ 拒绝虚假超售，客观真机评测</li>
              </ul>

              <div className="srv-hero-actions">
                <a href="#recommendation" className="srv-btn-primary">查看猫哥推荐榜 ➔</a>
                <a href="#matrix" className="srv-btn-secondary">横向参数对比</a>
                <a href="#scenarios" className="srv-btn-secondary">按场景选择</a>
              </div>
            </div>

            <aside className="srv-hero-summary-card">
              <h2 className="srv-summary-title">💡 猫哥选购结论</h2>
              <ul className="srv-summary-list">
                <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A4ECB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z"></path>
                  </svg>
                  <div><strong>外贸独立站 / 跨境建站 (主推)</strong>：优先选择 <strong>Hostinger 全托管方案</strong>（低至 $2.39/月，含域名/备份/一键CDN/极简操作）或 <strong>SiteGround</strong>（低至 $3.99/月，续费原价较高）。</div>
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A4ECB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                  </svg>
                  <div><strong>按小时计费与开发者按需部署</strong>：首选 <strong>Vultr 云服务器</strong>（拥有 32+ 全球机房，随开随销毁，单价相比全托管略偏贵）。</div>
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A4ECB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <div><strong>国内正规备案与企业中文官网 (并列首选)</strong>：推荐 <strong>阿里云</strong> 与 <strong>腾讯云</strong>（低至 99元/年），客服方便且支持远程协助。</div>
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A4ECB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                  <div><strong>国内企业级备选</strong>：包含 <strong>华为云、京东云（特价低至30-60元/年）、百度云、西部数据</strong>，支持本地化客服。</div>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </header>

      <section className="srv-quick-section">
        <div className="srv-sec1-container">
          <div className="srv-quick-grid">
            <div className="srv-quick-card">
              <div className="srv-quick-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A4ECB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z"></path>
                </svg>
              </div>
              <h3 className="srv-quick-card-title">外贸独立站</h3>
              <p className="srv-quick-card-desc">服务器物理位置比国内访问速度更重要，首选 HOSTINGER 或 SiteGround，优先覆盖目标买家所在洲机房（欧美亚）。</p>
            </div>

            <div className="srv-quick-card">
              <div className="srv-quick-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A4ECB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="srv-quick-card-title">国内备案网站</h3>
              <p className="srv-quick-card-desc">主要服务国内用户时，备案与国内 BGP CDN 节点体验要优先考虑，推荐并列梯队的阿里云与腾讯云。</p>
            </div>

            <div className="srv-quick-card">
              <div className="srv-quick-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A4ECB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
              </div>
              <h3 className="srv-quick-card-title">服务器配置建议</h3>
              <p className="srv-quick-card-desc">新手建站 1核2G 或 2核2G 已足够起步，无需一开始盲目买高配，全托管主机支持按需一键平滑扩展。</p>
            </div>

            <div className="srv-quick-card">
              <div className="srv-quick-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A4ECB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
              </div>
              <h3 className="srv-quick-card-title">数据备份安全</h3>
              <p className="srv-quick-card-desc">绝不能把低价 VPS 作为唯一无备份的生产环境，全自动每日备份与云快照是正式独立站稳健运行的生命线。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="srv-ranking-section" id="recommendation">
        <div className="srv-sec1-container">
          <div className="srv-section-header">
            <span className="srv-section-badge">TOP RANKED PROVIDERS</span>
            <h2 className="srv-section-title">猫哥 VPS 实测国内外高性价比榜单</h2>
            <p className="srv-section-subtitle">拒绝虚假宣传！以下推荐按真实建站场景、稳定性、速度、价格与后续维护难度综合精选。</p>
          </div>

          <div className="srv-rank-cards">
            <article className="srv-rank-card rank-top1">
              <div className="srv-rank-badge">1</div>
              <div className="srv-rank-body">
                <div className="srv-rank-info">
                  <div className="srv-rank-provider-header">
                    <h3 className="srv-rank-provider-title">Hostinger 全托管 WordPress 方案</h3>
                    <span className="srv-rank-provider-tag">👑 外贸独立站首选 · 性价比之王</span>
                  </div>
                  <p className="srv-rank-desc">
                    猫哥亲身使用与客户项目交付第一推荐的主机！最大的优势是极度省心，低至 $2.39/月，全图形化 hPanel 面板，界面操作极其简单。内置 LiteSpeed 高速引擎、一键部署 WordPress、一键开启免费 CDN 与全自动每日/每周备份，免费赠送第一年域名及无限 SSL，完美适配 WordPress 与 GEO 优化。
                  </p>
                  <div className="srv-rank-tags">
                    <span className="srv-rank-tag-item">✓ 外贸建站首选 (低至 $2.39/月)</span>
                    <span className="srv-rank-tag-item">✓ 一键部署 WordPress + 免费 CDN</span>
                    <span className="srv-rank-tag-item">✓ hPanel 界面极简 + 送域名与每日备份</span>
                    <span className="srv-rank-tag-item">✓ 猫哥专属八折优惠</span>
                  </div>
                  <div className="srv-rank-actions">
                    <a href="https://www.hostinger.com?REFERRALCODE=EQBFINGLEM8Y" target="_blank" rel="noopener noreferrer" className="srv-btn-primary">
                      获取 Hostinger 八折特惠直达 ➔
                    </a>
                    <a href="#matrix" className="srv-btn-secondary">横向参数对比 ➔</a>
                  </div>
                </div>
                <div className="srv-rank-img-box">
                  <img src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260717123404178.webp" alt="Hostinger 官方界面" />
                </div>
              </div>
            </article>

            <article className="srv-rank-card">
              <div className="srv-rank-badge">2</div>
              <div className="srv-rank-body">
                <div className="srv-rank-info">
                  <div className="srv-rank-provider-header">
                    <h3 className="srv-rank-provider-title">SiteGround 顶级托管主机</h3>
                    <span className="srv-rank-provider-tag">🛡️ 欧美口碑 · WordPress 官方推荐</span>
                  </div>
                  <p className="srv-rank-desc">
                    在欧美口碑极佳的 WordPress 官方推荐托管服务商！底层基于 Google Cloud Platform (GCP) 顶级云基础设施搭建，内置 SiteTools 管理面板与 SG Optimizer 插件。相比 Hostinger，SiteGround 唯一的短板是价格没那么优惠（首期 $3.99/月起，续费恢复原价）。
                  </p>
                  <div className="srv-rank-tags">
                    <span className="srv-rank-tag-item">✓ WP 官方认证推荐</span>
                    <span className="srv-rank-tag-item">✓ Google Cloud 物理底座</span>
                    <span className="srv-rank-tag-item">✓ 免费 SSL + 每日自动备份</span>
                    <span className="srv-rank-tag-item">✓ 首期特惠 (低至 $3.99/月)</span>
                  </div>
                  <div className="srv-rank-actions">
                    <a href="https://www.siteground.com/?referrer_id=9764676" target="_blank" rel="noopener noreferrer" className="srv-btn-secondary">
                      获取 SiteGround 特惠 ➔
                    </a>
                    <a href="#matrix" className="srv-btn-secondary">横向参数对比 ➔</a>
                  </div>
                </div>
                <div className="srv-rank-img-box">
                  <img src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260717131635370.webp" alt="SiteGround 界面" />
                </div>
              </div>
            </article>

            <article className="srv-rank-card">
              <div className="srv-rank-badge">3</div>
              <div className="srv-rank-body">
                <div className="srv-rank-info">
                  <div className="srv-rank-provider-header">
                    <h3 className="srv-rank-provider-title">Vultr 高性能云 VPS</h3>
                    <span className="srv-rank-provider-tag">⚡ 灵活高效 · 全球 32+ 节点按小时计费</span>
                  </div>
                  <p className="srv-rank-desc">
                    猫哥长年用于高级测试与按需部署的 VPS 服务商。适合具备一定 Linux 运维能力的开发者。最大的特点是按小时扣费（约 $0.007/小时），随开随销毁，在全球拥有 32+ 节点机房，全系 NVMe SSD 性能强劲。注：价格相比全托管年付略偏贵，且需要自己配置环境。
                  </p>
                  <div className="srv-rank-tags">
                    <span className="srv-rank-tag-item">✓ 全球 32+ 机房节点</span>
                    <span className="srv-rank-tag-item">✓ 按小时灵活扣费 ($2.5/月起)</span>
                    <span className="srv-rank-tag-item">✓ 高频 NVMe SSD</span>
                    <span className="srv-rank-tag-item">✓ 完全 Root 权限</span>
                  </div>
                  <div className="srv-rank-actions">
                    <a href="https://www.vultr.com/?ref=8923456" target="_blank" rel="noopener noreferrer" className="srv-btn-secondary">
                      访问 Vultr 官网 ➔
                    </a>
                    <a href="#matrix" className="srv-btn-secondary">横向参数对比 ➔</a>
                  </div>
                </div>
                <div className="srv-rank-img-box">
                  <img src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260717131644245.webp" alt="Vultr 官方界面" />
                </div>
              </div>
            </article>

            <article className="srv-rank-card">
              <div className="srv-rank-badge">4</div>
              <div className="srv-rank-body">
                <div className="srv-rank-info">
                  <div className="srv-rank-provider-header">
                    <h3 className="srv-rank-provider-title">阿里云 (Alibaba Cloud)</h3>
                    <span className="srv-rank-provider-tag">🇨🇳 国内首选 · 备案便捷与生态完备 (并列第一梯队)</span>
                  </div>
                  <p className="srv-rank-desc">
                    如果您的网站主要服务于中国大陆本土买家，阿里云是绝对的行业领头羊。低至 99元/年，拥有全网最丰富的国内华东、华南、华北数据中心，国内访问延迟极低，配套一站式 ICP 备案系统审核极快，在线客服方便支持远程协助。
                  </p>
                  <div className="srv-rank-tags">
                    <span className="srv-rank-tag-item">✓ 国内访问秒开 (BGP 多线)</span>
                    <span className="srv-rank-tag-item">✓ 备案流程顺畅快捷</span>
                    <span className="srv-rank-tag-item">✓ 在线客服支持远程协助</span>
                    <span className="srv-rank-tag-item">✓ 特价低至 99元/年</span>
                  </div>
                  <div className="srv-rank-actions">
                    <a href="https://www.aliyun.com/" target="_blank" rel="noopener noreferrer" className="srv-btn-secondary">
                      访问阿里云官网 ➔
                    </a>
                    <a href="#matrix" className="srv-btn-secondary">横向参数对比 ➔</a>
                  </div>
                </div>
                <div className="srv-rank-img-box">
                  <img src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260717131653348.webp" alt="阿里云 界面" />
                </div>
              </div>
            </article>

            <article className="srv-rank-card">
              <div className="srv-rank-badge">4</div>
              <div className="srv-rank-body">
                <div className="srv-rank-info">
                  <div className="srv-rank-provider-header">
                    <h3 className="srv-rank-provider-title">腾讯云 (Tencent Cloud)</h3>
                    <span className="srv-rank-provider-tag">🇨🇳 国内首选 · 极高性价比与微信生态 (并列第一梯队)</span>
                  </div>
                  <p className="srv-rank-desc">
                    与阿里云并列第一梯队的国内云计算巨头！腾讯云轻量应用服务器（Lighthouse）性价比极高，低至 99元/年，给的公网带宽慷慨（4M/5M起），对微信生态（小程序、公众号、企业微信）接入体验极致顺畅，客服沟通即时方便。
                  </p>
                  <div className="srv-rank-tags">
                    <span className="srv-rank-tag-item">✓ 轻量服务器性价比极高</span>
                    <span className="srv-rank-tag-item">✓ 公网带宽给足 (4M/5M)</span>
                    <span className="srv-rank-tag-item">✓ 在线客服/微信群便捷沟通</span>
                    <span className="srv-rank-tag-item">✓ 活动特惠低至 99元/年</span>
                  </div>
                  <div className="srv-rank-actions">
                    <a href="https://cloud.tencent.com/" target="_blank" rel="noopener noreferrer" className="srv-btn-secondary">
                      访问腾讯云官网 ➔
                    </a>
                    <a href="#matrix" className="srv-btn-secondary">横向参数对比 ➔</a>
                  </div>
                </div>
                <div className="srv-rank-img-box">
                  <img src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260717131604644.webp" alt="腾讯云 界面" />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
