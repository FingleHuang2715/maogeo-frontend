"use client";

import { copyWeChatAndShowModal } from "@/components/WeChatModal";
import React from "react";
import "@/styles/WhyChooseMaoge.css";

export default function WhyChooseYtCaptainPage() {
  return (
    <main className="why-cosmic">
      {/* 亮色发光背景 */}
      <div className="why-bg-orb why-orb-1" aria-hidden="true" />
      <div className="why-bg-orb why-orb-2" aria-hidden="true" />
      <div className="why-bg-orb why-orb-3" aria-hidden="true" />

      <div className="why-container">
        {/* ==================== 1. 顶部 Header ==================== */}
        <div className="why-header">
          <div className="why-version-badge">
            <span className="why-version-dot" aria-hidden="true" />
            <span>猫哥全流程外贸建站 · 精致营销解决方案</span>
          </div>

          <h1 className="why-title">
            全流程外贸建站服务 <br />
            <span className="gradient-text">打造拥有持续询盘与高转化的出海独立站</span>
          </h1>

          <p className="why-story">
            不卖噱头，不做无意义的堆砌。猫哥结合 8 年以上外贸 B2B
            建站经验与最新 GEO（大模型搜索引擎）抓取规则，为出海企业量身打造既受买家喜爱、又能获得搜索引擎高权重的现代化数字资产。
          </p>

          <div className="why-stats">
            <div className="why-stat-item">
              <span className="why-stat-number">1,500+</span>
              <span className="why-stat-label">服务出海企业</span>
            </div>
            <div className="why-stat-divider" />
            <div className="why-stat-item">
              <span className="why-stat-number">90~100</span>
              <span className="why-stat-label">PageSpeed 卓越绿标</span>
            </div>
            <div className="why-stat-divider" />
            <div className="why-stat-item">
              <span className="why-stat-number">99.9%</span>
              <span className="why-stat-label">好评与推荐率</span>
            </div>
          </div>
        </div>

        {/* ==================== 2. 8大服务网格卡片 ==================== */}
        <div className="why-cards-grid">
          {/* Card 1 */}
          <div className="why-card">
            <div className="why-card-inner">
              <div className="why-card-glow" />
              <div className="why-card-num">01 / FEATURE</div>
              <div className="why-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3 className="why-card-title">谷歌 E-E-A-T 权威规范对齐</h3>
              <p className="why-card-desc">
                严格遵循谷歌商业落地页指南，嵌入真实团队背书、专业资质与透明服务流程，大幅提升用户信任与算法权威度。
              </p>
              <div className="why-card-line" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="why-card">
            <div className="why-card-inner">
              <div className="why-card-glow" />
              <div className="why-card-num">02 / FEATURE</div>
              <div className="why-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3 className="why-card-title">PageSpeed 秒开绿标性能</h3>
              <p className="why-card-desc">
                基于 Next.js 极速渲染与全球 CDN 节点加速，使 Mobile/Desktop 端均达到 90-100 分卓越评级，把跳出率降到最低。
              </p>
              <div className="why-card-line" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="why-card">
            <div className="why-card-inner">
              <div className="why-card-glow" />
              <div className="why-card-num">03 / FEATURE</div>
              <div className="why-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <h3 className="why-card-title">GEO + SEO 双引擎流量植入</h3>
              <p className="why-card-desc">
                不单做传统搜索引擎排名，更前瞻性针对 ChatGPT、DeepSeek 等大模型做生成式引用优化，抢占 AI 检索第一波红利。
              </p>
              <div className="why-card-line" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="why-card">
            <div className="why-card-inner">
              <div className="why-card-glow" />
              <div className="why-card-num">04 / FEATURE</div>
              <div className="why-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="why-card-title">知乎与高权威主理人名片</h3>
              <p className="why-card-desc">
                文章与关键落地页内置高公信力作者卡片，展示团队背景与联系通道，建立无与伦比的海外买家第一印象。
              </p>
              <div className="why-card-line" />
            </div>
          </div>

          {/* Card 5 */}
          <div className="why-card">
            <div className="why-card-inner">
              <div className="why-card-glow" />
              <div className="why-card-num">05 / FEATURE</div>
              <div className="why-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="why-card-title">100% 响应式自适应美学</h3>
              <p className="why-card-desc">
                针对 4K 大屏、笔记本、iPad 及手机端做全尺寸像素级适配，提供媲美苹果官方般流畅舒适的交互与审美体验。
              </p>
              <div className="why-card-line" />
            </div>
          </div>

          {/* Card 6 */}
          <div className="why-card">
            <div className="why-card-inner">
              <div className="why-card-glow" />
              <div className="why-card-num">06 / FEATURE</div>
              <div className="why-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="why-card-title">无缝一键询盘与微信交互</h3>
              <p className="why-card-desc">
                支持表单自动推送到邮箱、一键复制客服微信弹窗及快捷 WhatsApp 连线，绝不错过任何潜在意向买家。
              </p>
              <div className="why-card-line" />
            </div>
          </div>

          {/* Card 7 */}
          <div className="why-card">
            <div className="why-card-inner">
              <div className="why-card-glow" />
              <div className="why-card-num">07 / FEATURE</div>
              <div className="why-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="why-card-title">源码与资产 100% 掌控</h3>
              <p className="why-card-desc">
                拒绝 SaaS 平台的按年捆绑与数据绑架。完整源码打包交付，拥有 100% 独立自主控制权，支持自由部署。
              </p>
              <div className="why-card-line" />
            </div>
          </div>

          {/* Card 8 */}
          <div className="why-card">
            <div className="why-card-inner">
              <div className="why-card-glow" />
              <div className="why-card-num">08 / FEATURE</div>
              <div className="why-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="why-card-title">一对一长效陪跑与技术维护</h3>
              <p className="why-card-desc">
                建站完成后提供技术更新指导、架构扩容建议与定期安全巡检，为您的品牌出海护航，免除后顾之忧。
              </p>
              <div className="why-card-line" />
            </div>
          </div>
        </div>

        {/* ==================== 3. 底部咨询 CTA ==================== */}
        <div style={{ textAlign: "center", marginTop: "5rem" }}>
          <button
            type="button"
            onClick={copyWeChatAndShowModal}
            className="srv-btn-primary"
            style={{
              padding: "16px 40px",
              fontSize: "1.05rem",
              borderRadius: "50px",
              boxShadow: "0 8px 24px rgba(10, 78, 203, 0.3)",
              cursor: "pointer",
            }}
          >
            💬 复制微信 (maogeotop) 咨询猫哥建站方案
          </button>
        </div>
      </div>
    </main>
  );
}
