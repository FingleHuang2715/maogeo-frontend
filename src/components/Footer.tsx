"use client";

import React from "react";
import Link from "next/link";
import "@/styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-text">猫哥</span>
              <span className="footer-logo-sub">MAOGEO.TOP</span>
            </div>
            <p className="footer-desc">
              专注外贸独立站全栈开发、谷歌 SEO 霸屏优化与生成式 AI 搜索引擎 (GEO) 提炼推荐。帮您打造真正带来源源不断高价值询盘的出海数字资产。
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">核心业务</h4>
            <ul className="footer-links">
              <li><Link href="/waimaojianzhan">外贸营销建站</Link></li>
              <li><Link href="/web-design-seo">SEO & GEO 优化</Link></li>
              <li><Link href="/server-recommendation">外贸服务器选型</Link></li>
              <li><Link href="/geo-tools">GEO 全效工具箱</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">快捷资源</h4>
            <ul className="footer-links">
              <li><Link href="/blog">技术专区文章</Link></li>
              <li><Link href="/audit-tool">独立站免费诊断</Link></li>
              <li><Link href="/sitemap">网站地图 (Sitemap)</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">联系猫哥</h4>
            <ul className="footer-contact-info">
              <li>💬 微信：maogeotop</li>
              <li>📧 邮箱：2678586420@qq.com</li>
              <li>🌐 官网：https://maogeo.top</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} 猫哥 (maogeo.top) 版权所有. 保留所有权利.</p>
          <div className="footer-bottom-links">
            <Link href="/privacy-policy">隐私政策</Link>
            <span>·</span>
            <Link href="/terms-of-service">服务条款</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
