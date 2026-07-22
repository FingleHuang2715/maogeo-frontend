"use client";
import { copyWeChatAndShowModal } from "@/components/WeChatModal";
import React from "react";
import "@/styles/GeoSeoOptimization.css";

export default function GeoSeoOptimizationPage() {
  return (
    <main className="geo-seo-opt-root" >
      <section className="srv-sec1-hero" id="seo-section-hero" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.82)), url('https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721010110868.webp')", backgroundSize: "cover", backgroundPosition: "center center" }}>
  <div className="srv-sec1-hero-glow" aria-hidden="true"></div>
  <div className="srv-sec1-container">
    
    <div className="srv-hero-grid">
      <div className="srv-hero-left">
        <span className="srv-hero-eyebrow">AI 搜索时代新流量红利 · 生成式引擎优化 (GEO)</span>
        <h1 className="srv-sec1-hero-title">
          外贸网站 SEO 与 GEO 优化<br />
          <span className="gradient-text">技巧全面指南</span>
        </h1>
        <p className="srv-sec1-hero-desc">
          通过生成式引擎优化（GEO），在传统谷歌 SEO 的基础上，深度融入大模型抓取与提炼机制。使您的网站不仅在传统搜索中名列前茅，更能成为生成式 AI 推荐答案的权威数据源。
        </p>
        
        <ul className="srv-hero-meta-list">
          <li className="srv-hero-meta-item">✓ 85亿+ 每天 Google 搜索流量</li>
          <li className="srv-hero-meta-item">✓ 90.83% 全球搜索引擎市场份额</li>
          <li className="srv-hero-meta-item">✓ 45亿+ 谷歌与大模型收录数据源</li>
        </ul>

        <div className="srv-hero-actions">
          <a href="#" onClick={copyWeChatAndShowModal} className="srv-btn-primary">联系猫哥微信：maogeotop ➔</a>
          <a href="mailto:2678586420@qq.com" className="srv-btn-secondary">邮箱：2678586420@qq.com</a>
        </div>
      </div>

      <aside className="srv-hero-summary-card">
        <h2 className="srv-summary-title">💡 为什么要做 SEO/GEO？</h2>
        <ul className="srv-summary-list" style={{ gap: '0.8rem' }}>
          <li>
            <strong>打造长期获客数字资产</strong>：一次优化持续生效，避开高昂竞价广告陷阱，沉淀源源不断的高质量海外买家询盘。
          </li>
          <li>
            <strong>85亿+ 每日搜索量</strong>：全球最大搜索入口，捕获高意向 B2B 海外买家需求。
          </li>
          <li>
            <strong>90.83% 市场份额</strong>：谷歌在搜索引擎与 AI 答复中拥有绝对话语权与分发量。
          </li>
          <li>
            <strong>45亿+ 索引数据源</strong>：通过 GEO 语义重构，让独立站成为大模型优先引用答案。
          </li>
        </ul>
      </aside>
    </div>

  </div>
</section>

<section className="seo-section2-container">
  <div className="seo-section2-header">
    <span className="seo-section2-tag">核心四维模型</span>
    <h2 className="seo-section2-title gradient-text">谷歌 SEO 与 GEO 优化的四大支柱</h2>
    <p className="seo-section2-subtitle">构建兼具防守与进攻的流量堡垒，让独立站在传统搜索引擎与 AI 生成回答中并驾齐驱</p>
  </div>
  
  <div className="seo-topology-container">
    <div className="seo-topology-box">
      <div className="seo-topology-head">独立站 AI & 谷歌流量堡垒</div>
      <div className="seo-topology-line-vertical"></div>
      <div className="seo-topology-line-horizontal-wrap">
        <div className="seo-topology-line-horizontal"></div>
        <div className="seo-topology-line-vertical-sub-wrap">
          <div className="seo-topology-line-vertical-sub"></div>
          <div className="seo-topology-line-vertical-sub"></div>
          <div className="seo-topology-line-vertical-sub"></div>
          <div className="seo-topology-line-vertical-sub"></div>
        </div>
      </div>
      <div className="seo-topology-nodes">
        <div className="seo-topology-node">【一、底座防守】<br />技术 SEO & 体验</div>
        <div className="seo-topology-node">【二、内容核心】<br />E-E-A-T 与信息增益</div>
        <div className="seo-topology-node">【三、GEO进攻】<br />语义结构化与 RAG</div>
        <div className="seo-topology-node">【四、全网公信】<br />品牌知名度与外链</div>
      </div>
    </div>
  </div>

  <div className="seo-table-scroll-wrapper">
    <table className="seo-custom-table">
      <thead>
        <tr>
          <th>核心策略维度</th>
          <th>重点优化项目</th>
          <th>核心作用与目标</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="seo-table-highlight">一、技术底座 (防守)</td>
          <td>网站速度优化、Core Web Vitals、移动端自适应、Robots/Sitemap 动态控制、抓取预算治理。</td>
          <td>保障谷歌 Spider 与大模型 Bot 顺利无阻抓取，打牢页面索引与绿标体验基础。</td>
        </tr>
        <tr>
          <td className="seo-table-highlight">二、优质内容 (核心)</td>
          <td>E-E-A-T 专家权威认证、买家痛点问答、深度长文（信息增益）、高质量独家多媒体。</td>
          <td>提供高价值真实信息，避免被 AI 生成的垃圾内容打击，提高排名与买家停留。</td>
        </tr>
        <tr>
          <td className="seo-table-highlight">三、GEO 提炼 (进攻)</td>
          <td>Schema 结构化标记、问答对（Q&A Block）、事实统计数据列表、清晰 H2/H3 锚点树。</td>
          <td>专为大模型 RAG（检索增强生成）设计，直接喂养 LLM，让品牌在 AI 推荐中被高频引用。</td>
        </tr>
        <tr>
          <td className="seo-table-highlight">四、品牌权威 (公信)</td>
          <td>权威垂直外链、新闻媒体报道、品牌词检索量积累、第三方真实口碑评价。</td>
          <td>建立全网信任网络，让搜索引擎和大模型确认网站是该领域的不二权威代表。</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

    </main>
  );
}
