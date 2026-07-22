"use client";
import React, { useState } from "react";
import "@/styles/ServerRecommendation.css";

function StarRating({ score, label }: { score: number; label?: string }) {
  const renderStar = (index: number) => {
    const filled = score >= index;
    const half = score >= index - 0.5 && score < index;
    return (
      <span key={index} style={{ color: filled || half ? "#f59e0b" : "#d1d5db", fontSize: "14px", marginRight: "1px" }}>
        ★
      </span>
    );
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      <div>{[1, 2, 3, 4, 5].map(renderStar)}</div>
      {label && <span style={{ fontSize: "12px", color: "#6b7280", marginLeft: "4px" }}>{label}</span>}
    </div>
  );
}

export default function ServerRecommendation() {
  const [hostingerImgIndex, setHostingerImgIndex] = useState(0);

  const hostingerImages = [
    "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260717010411130-scaled.webp",
    "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260717010425330-scaled.webp"
  ];

  return (
    <main className="server-recom-root">
      <section className="srv-sec1-hero">
        <div className="srv-sec1-hero-glow" aria-hidden="true" />
        <div className="srv-sec1-container">
          <div className="srv-hero-grid">
            <div className="srv-hero-left">
              <span className="srv-hero-eyebrow">外贸建站选型实测指南 · 避免性能瓶颈</span>
              <h1 className="srv-sec1-hero-title">
                外贸网站服务器哪家好？<br />
                <span className="gradient-text">Top 5 主流主机深度对比与避坑指南</span>
              </h1>
              <p className="srv-sec1-hero-desc">
                根据海外买家物理分布、谷歌 PageSpeed 秒开指标以及 Core Web Vitals 评分要求，深度实测 Hostinger、SiteGround、Vultr、AWS 与 Cloudways。帮助出海企业选对主机，告别卡顿。
              </p>
              
              <ul className="srv-hero-meta-list">
                <li className="srv-hero-meta-item">✓ 100% 真实机房 Benchmark 压测</li>
                <li className="srv-hero-meta-item">✓ 涵盖共享主机、云服务器与托管 VPS</li>
                <li className="srv-hero-meta-item">✓ 含续费陷阱与隐藏成本全盘剖析</li>
              </ul>
            </div>

            <aside className="srv-hero-summary-card">
              <h2 className="srv-summary-title">💡 选选结论（快速参考）</h2>
              <ul className="srv-summary-list">
                <li><strong>新手/性价比首选</strong>：Hostinger（全球多节点、价格极具亲和力）</li>
                <li><strong>稳定省心首选</strong>：SiteGround（WordPress 官方推荐、客服响应快）</li>
                <li><strong>高并发/极致性能</strong>：Cloudways + Vultr / AWS（云托管 VPS、秒开响应）</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
