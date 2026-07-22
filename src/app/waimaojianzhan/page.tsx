"use client";

import { copyWeChatAndShowModal } from "@/components/WeChatModal";
import React from "react";
import "@/styles/WhyChooseMaoge.css";
import "@/styles/WhyChooseYtCaptain.css";

export default function WhyChooseYtCaptainPage() {
  return (
    <main className="why-yt-captain-root" >
      <section className="srv-sec1-hero" id="why-section-hero" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.82)), url('https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721010110868.webp')", backgroundSize: "cover", backgroundPosition: "center center" }}>
        <div className="srv-sec1-hero-glow" aria-hidden="true"></div>
        <div className="srv-sec1-container">
          
          <div className="srv-hero-grid">
            <div className="srv-hero-left">
              <span className="srv-hero-eyebrow">外贸营销与 GEO 建站服务 · 猫哥 8年+ 实战</span>
              <h1 className="srv-sec1-hero-title">
                专业外贸营销与<br />
                <span className="gradient-text">GEO 建站服务</span>
              </h1>
              <p className="srv-sec1-hero-desc">
                让外贸独立站成为被谷歌 AI 检索并引用的数字化资产。打破千篇一律模板站困境，深谙海外买家询盘转化逻辑，打造 24 小时出海金牌推销员。
              </p>
              
              <ul className="srv-hero-meta-list">
                <li className="srv-hero-meta-item">✓ 8年+ 深耕外贸建站与谷歌 SEO</li>
                <li className="srv-hero-meta-item">✓ 1500+ 交付项目及出海案例</li>
                <li className="srv-hero-meta-item">✓ 99.99% 客户满意度与超高复购</li>
              </ul>

              <div className="srv-hero-actions">
                <a href="#" onClick={copyWeChatAndShowModal} className="srv-btn-primary">微信咨询：maogeotop ➔</a>
                <a href="mailto:2678586420@qq.com" className="srv-btn-secondary">联系邮箱：2678586420@qq.com</a>
              </div>
            </div>

            <aside className="srv-hero-summary-card">
              <h2 className="srv-summary-title">💡 为什么选择猫哥？</h2>
              <ul className="srv-summary-list" style={{ gap: '0.8rem' }}>
                <li>
                  <strong>QS50 顶尖名校硕博团队</strong>：核心技术团队毕业于 QS50 顶尖名校，技术深度与架构能力无可比拟。
                </li>
                <li>
                  <strong>8年+ 深耕经验</strong>：专注谷歌 SEO 优化与定制外贸建站，技术实力由谷歌排名直接证明。
                </li>
                <li>
                  <strong>1500+ 交付案例</strong>：服务涵盖多行业出海品牌，大部分源于老客户转介绍与推荐。
                </li>
                <li>
                  <strong>99.99% 客户满意度</strong>：100% 定制化营销视觉排版，做更好的用户体验与询盘转化率（CRO）优化。
                </li>
              </ul>
            </aside>
          </div>

        </div>
      </section>

      <section className="why-section3">
        <div className="why-section3-container">
          <div className="why-section3-header">
            <span className="why-section3-tag">定制营销 VS 廉价模板</span>
            <h2 className="why-section3-title">
              为什么传统模板站<span className="gradient-text">拿不到高质量询盘？</span>
            </h2>
            <p className="why-section3-subtitle">
              绝大多数模版站只解决了“有网站”，却忽视了“高转化”与“SEO/GEO 搜索引擎抓取”。
            </p>
          </div>

          <div className="why-section3-grid">
            <div className="why-section3-card">
              <div className="why-section3-card-num">01</div>
              <div className="why-section3-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className="why-section3-card-title">千篇一律模板同质化严重</h3>
              <p className="why-section3-card-desc">
                公用模板缺乏品牌公信力与视觉差异化，海外买家 3 秒内找不到核心竞争优势直接流失。
              </p>
            </div>

            <div className="why-section3-card">
              <div className="why-section3-card-num">02</div>
              <div className="why-section3-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <h3 className="why-section3-card-title">代码臃肿致加载缓慢</h3>
              <p className="why-section3-card-desc">
                堆砌未缩减脚本与插件，移动端打开时间超 3 秒，谷歌 PageSpeed 评分低直接打入沙盒。
              </p>
            </div>

            <div className="why-section3-card">
              <div className="why-section3-card-num">03</div>
              <div className="why-section3-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
              <h3 className="why-section3-card-title">缺乏 SEO & GEO 结构化支持</h3>
              <p className="why-section3-card-desc">
                缺少 Schema 标记、语义化标签与 AI 抓取规范，在 ChatGPT 与 谷歌 AIOverviews 中完全隐形。
              </p>
            </div>

            <div className="why-section3-card">
              <div className="why-section3-card-num">04</div>
              <div className="why-section3-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
              </div>
              <h3 className="why-section3-card-title">询盘转化路径受阻</h3>
              <p className="why-section3-card-desc">
                表单设计繁琐、缺乏无缝联系通道（如微信/邮箱快速引导），导致极高的放弃率。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-section4">
        <div className="why-section4-container">
          <div className="why-section4-header">
            <span className="why-section4-tag">高标准交付体系</span>
            <h2 className="why-section4-title">
              猫哥建站 <span className="gradient-text">15 大技术优势与品质保障</span>
            </h2>
            <p className="why-section4-subtitle">
              从代码底层到前端交互，每一个细节均经过严苛测试与优化，保障极速性能与高转率。
            </p>
          </div>

          <div className="why-section4-grid">
            <div className="why-section4-item">
              <div className="why-section4-item-icon">01</div>
              <h3 className="why-section4-item-title">E-E-A-T 专家权威认证布局</h3>
              <p className="why-section4-item-desc">深入贯彻谷歌 Helpful Content 算法规则，打造高度可信的品牌背书与专家团队形象。</p>
            </div>

            <div className="why-section4-item">
              <div className="why-section4-item-icon">02</div>
              <h3 className="why-section4-item-title">100% 响应式自适应多端屏</h3>
              <p className="why-section4-item-desc">适配从 4K 巨幕、MacBook 到各品牌手机，确保全终端买家舒适顺畅的浏览体验。</p>
            </div>

            <div className="why-section4-item">
              <div className="why-section4-item-icon">03</div>
              <h3 className="why-section4-item-title">PageSpeed 秒开性能优化</h3>
              <p className="why-section4-item-desc">全局代码精简、静态化预渲染与图片 WebP 自动压缩，轻松实现 PageSpeed 绿标高分。</p>
            </div>

            <div className="why-section4-item">
              <div className="why-section4-item-icon">04</div>
              <h3 className="why-section4-item-title">GEO 大模型语义增强 (RAG)</h3>
              <p className="why-section4-item-desc">定制 Schema 结构化数据，方便 ChatGPT、DeepSeek 与 Google Gemini 快速提炼并推荐。</p>
            </div>

            <div className="why-section4-item">
              <div className="why-section4-item-icon">05</div>
              <h3 className="why-section4-item-title">全球分布式 CDN 节点加速</h3>
              <p className="why-section4-item-desc">自动根据访客 IP 智能就近路由调度，不论欧美还是东南亚均可秒级响应加载。</p>
            </div>

            <div className="why-section4-item">
              <div className="why-section4-item-icon">06</div>
              <h3 className="why-section4-item-title">多渠道无缝询盘转化引流</h3>
              <p className="why-section4-item-desc">集成了表单邮件通知、一键微信复制弹窗及 WhatsApp/邮件快捷联系按钮。</p>
            </div>

            <div className="why-section4-item">
              <div className="why-section4-item-icon">07</div>
              <h3 className="why-section4-item-title">TDK 逐页精准关键词排布</h3>
              <p className="why-section4-item-desc">拒绝堆砌词汇，科学分层规划核心词、长尾词与商业搜索意图词，加速排名上升。</p>
            </div>

            <div className="why-section4-item">
              <div className="why-section4-item-icon">08</div>
              <h3 className="why-section4-item-title">100% 独立源码完全交付</h3>
              <p className="why-section4-item-desc">不使用 SaaS 平台捆绑按年收费，源码资产完全归您所有，可自由搬迁或定制扩展。</p>
            </div>

            <div className="why-section4-item">
              <div className="why-section4-item-icon">09</div>
              <h3 className="why-section4-item-title">前沿 UI/UX 现代美学设计</h3>
              <p className="why-section4-item-desc">运用前沿极简风、微渐变与玻璃质感氛围，打造高档国际化品牌视觉质感。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-section6">
        <div className="why-section6-container">
          <div className="why-section6-glass-card">
            <div className="why-section6-glow-effect" aria-hidden="true"></div>
            <div className="why-section6-content">
              <span className="why-section6-tag">开启您的独立站出海之旅</span>
              <h2 className="why-section6-title">
                准备好打造高转化、秒加载的<br />
                <span className="gradient-text">外贸金牌营销独立站了吗？</span>
              </h2>
              <p className="why-section6-desc">
                联系猫哥获取一对一建站诊断与定制方案，免费评估现有网站性能与优化空间。
              </p>

              <div className="why-section6-contacts">
                <div className="why-section6-contact-item">
                  <div className="why-section6-contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  </div>
                  <div className="why-section6-contact-info">
                    <span className="why-section6-contact-label">微信咨询 (点击复制)</span>
                    <a href="#" onClick={copyWeChatAndShowModal} className="why-section6-contact-value why-section6-pulse-btn">
                      maogeotop
                    </a>
                  </div>
                </div>

                <div className="why-section6-contact-item">
                  <div className="why-section6-contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div className="why-section6-contact-info">
                    <span className="why-section6-contact-label">官方联系邮箱</span>
                    <a href="mailto:2678586420@qq.com" className="why-section6-contact-value">
                      2678586420@qq.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
