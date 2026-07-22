"use client";
import React, { useState } from "react";
import "@/styles/CasesShowcase.css";

interface CaseItem {
  id: number;
  title: string;
  category: string;
  imgUrl: string;
  linkUrl: string;
  desc: string;
}

const casesData: CaseItem[] = [
  {
    id: 1,
    title: "高精度工业机械装备品牌站",
    category: "重型机械 / 工业 B2B",
    imgUrl: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260717010411130-scaled.webp",
    linkUrl: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260717010411130-scaled.webp",
    desc: "针对北美与欧洲中高端买家设计，融入 E-E-A-T 权威认证与 3D 产品展示，上线首月询盘翻倍。"
  },
  {
    id: 2,
    title: "智能储能与新能源光伏出口站",
    category: "新能源 / 储能电池",
    imgUrl: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260717010425330-scaled.webp",
    linkUrl: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260717010425330-scaled.webp",
    desc: "极致科技蓝发光设计，融入 GEO 大模型提炼，被 Google AI Overviews 优先高频引用。"
  },
  {
    id: 3,
    title: "高端定制医疗器械与耗材展厅",
    category: "医疗器械 / 实验室设备",
    imgUrl: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260717010437433-scaled.webp",
    linkUrl: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260717010437433-scaled.webp",
    desc: "严格符合国际医疗合规排版，核心产品页实现 PageSpeed 98 分满分秒开。"
  }
];

export default function CasesShowcase() {
  const [activeImg, setActiveImg] = useState<string | null>(null);

  return (
    <section className="geo-cases-section">
      <div className="geo-cases-container">
        <div className="geo-cases-header">
          <div className="geo-cases-badge">
            <span className="geo-cases-badge-dot" />
            实战交付案例展示
          </div>
          <h2 className="geo-cases-title">
            1500+ 出海企业的 <span className="gradient-text">共同选择</span>
          </h2>
          <p className="geo-cases-subtitle">
            拒绝呆板的模板，每一个案例均为像素级定制，兼具高颜值美学与顶尖转化率
          </p>
        </div>

        <div className="geo-cases-grid">
          {casesData.map((item) => (
            <div key={item.id} className="geo-cases-card">
              <div className="geo-cases-browser">
                <div className="geo-cases-browser-bar">
                  <div className="geo-cases-dots">
                    <span className="geo-cases-dot r" />
                    <span className="geo-cases-dot y" />
                    <span className="geo-cases-dot g" />
                  </div>
                  <span className="geo-cases-browser-title">demo.maogeo.top</span>
                </div>
                <div className="geo-cases-viewport" onClick={() => setActiveImg(item.imgUrl)}>
                  <img src={item.imgUrl} alt={item.title} />
                  <div className="geo-cases-hover-tip">🔍 点击查看高清全景长图</div>
                </div>
              </div>
              <div className="geo-cases-info">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeImg && (
        <div className="geo-cases-lightbox-modal show">
          <span className="geo-cases-lightbox-close" onClick={() => setActiveImg(null)}>
            ×
          </span>
          <div className="geo-cases-lightbox-scroll-wrapper">
            <div className="geo-cases-lightbox-img-container">
              <img src={activeImg} alt="案例全景" className="geo-cases-lightbox-img" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
