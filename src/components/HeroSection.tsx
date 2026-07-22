"use client";

import React from "react";
import Link from "next/link";
import { copyWeChatAndShowModal } from "@/components/WeChatModal";
import "@/styles/HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-root">
      <div className="hero-glow-1" aria-hidden="true" />
      <div className="hero-glow-2" aria-hidden="true" />

      <div className="hero-container">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          猫哥 8年+ 外贸建站与谷歌 SEO 实战经验
        </div>

        <h1 className="hero-title">
          全栈架构与 GEO 独立站建站 <br />
          <span className="gradient-text">打造被 AI 检索引用的高转化数字资产</span>
        </h1>

        <p className="hero-subtitle">
          打破传统模板站无询盘困局。深度融入 E-E-A-T 权威规范与 GEO（生成式引擎）提炼机制，让您的独立站不仅在谷歌搜索排名靠前，更能被 DeepSeek、ChatGPT 等 AI 大模型优先推荐。
        </p>

        <div className="hero-actions">
          <button
            type="button"
            onClick={copyWeChatAndShowModal}
            className="hero-primary-btn"
          >
            💬 复制微信 (maogeotop) 咨询建站 ➔
          </button>
          <Link href="/waimaojianzhan" className="hero-secondary-btn">
            了解建站方案与细节
          </Link>
        </div>

        <div className="hero-stats-grid">
          <div className="hero-stat-card">
            <div className="hero-stat-value">1500+</div>
            <div className="hero-stat-label">出海品牌交付案例</div>
          </div>
          <div className="hero-stat-card">
            <div className="hero-stat-value">90~100</div>
            <div className="hero-stat-label">PageSpeed 绿标秒开</div>
          </div>
          <div className="hero-stat-card">
            <div className="hero-stat-value">99.99%</div>
            <div className="hero-stat-label">客户满意与推荐率</div>
          </div>
        </div>
      </div>
    </section>
  );
}
