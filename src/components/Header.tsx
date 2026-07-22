"use client";

import React, { useState } from "react";
import Link from "next/link";
import { copyWeChatAndShowModal } from "@/components/WeChatModal";
import "@/styles/Header.css";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="header-root">
      <div className="header-container">
        <Link href="/" className="header-logo-link">
          <div className="header-logo">
            <span className="header-logo-title">猫哥</span>
            <span className="header-logo-badge">GEO / SEO 架构师</span>
          </div>
        </Link>

        <nav className="header-desktop-nav">
          <Link href="/" className="header-nav-item">首页</Link>
          <Link href="/waimaojianzhan" className="header-nav-item">外贸建站</Link>
          <Link href="/web-design-seo" className="header-nav-item">SEO & GEO</Link>
          <Link href="/server-recommendation" className="header-nav-item">服务器推荐</Link>
          <Link href="/geo-tools" className="header-nav-item">GEO 工具箱</Link>
          <Link href="/audit-tool" className="header-nav-item">建站避坑</Link>
          <Link href="/blog" className="header-nav-item">技术专区</Link>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            onClick={copyWeChatAndShowModal}
            className="header-cta-btn"
          >
            💬 私信微信咨询
          </button>
        </div>
      </div>
    </header>
  );
}
