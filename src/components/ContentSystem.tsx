"use client";

import React from "react";
import "@/styles/ContentSystem.css";

export default function ContentSystem() {
  return (
    <section className="coms-cosmic">
      <div className="coms-inner">
        <div className="coms-left">
          <div className="coms-badge">
            <span className="coms-badge-dot" />
            E-E-A-T 内容生成系统
          </div>
          <h2 className="coms-title">
            不用担心不会整理 <br />
            <span className="gradient-text">高质量网站内容</span>
          </h2>
          <p className="coms-desc">
            猫哥内置独家 <strong>AI 内容提炼模型</strong>，自动将您的产品参数、工厂视频与行业优势转换为符合谷歌权威算法的优质英文内容。
          </p>
        </div>
      </div>
    </section>
  );
}
