"use client";

import React, { useState } from "react";
import "@/styles/AuditTool.css";
import AuthorCard from "@/components/AuthorCard";

export default function AuditToolPage() {
  const [activeTab, setActiveTab] = useState<"quick" | "deep">("quick");

  return (
    <main className="mg-audit-wrapper">
      <div className="mg-audit-container">
        <header className="mg-audit-header-card">
          <div className="mg-audit-breadcrumbs">
            <a href="/">首页</a> / <span>建站避坑与独立站诊断工具</span>
          </div>
          <h1 className="mg-audit-main-title">外贸建站避坑与独立站 CRO / GEO 免费诊断</h1>
          <p className="mg-audit-sub-desc">
            3 分钟自助检测独立站性能瓶颈、E-E-A-T 权威合规度以及大模型 GEO 检索可见度。
          </p>
        </header>

        <section className="mg-audit-main-flow" style={{ gridColumn: "1 / -1" }}>
          <div className="mg-quiz-switcher-bar">
            <button
              type="button"
              className={`mg-switcher-btn ${activeTab === "quick" ? "active" : ""}`}
              onClick={() => setActiveTab("quick")}
            >
              ⚡ 快速自测 (3分钟)
            </button>
            <button
              type="button"
              className={`mg-switcher-btn ${activeTab === "deep" ? "active" : ""}`}
              onClick={() => setActiveTab("deep")}
            >
              🔍 深度全盘诊断
            </button>
          </div>

          <div className="mg-audit-quiz-card">
            <div className="mg-state-welcome mg-panel-state active">
              <div className="mg-welcome-icon">🚀</div>
              <h2 style={{ fontSize: "20px", margin: "0" }}>开启独立站综合竞争力评估</h2>
              <p style={{ color: "#555666", fontSize: "14px" }}>
                通过 10 个维度的自动化问题，评估独立站是否具备持续带来海外买家询盘的能力。
              </p>
              <button
                type="button"
                className="mg-welcome-btn"
                onClick={() => alert("诊断工具加载中，请稍候...")}
              >
                立即开始检测 ➔
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
