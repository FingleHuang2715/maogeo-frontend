"use client";

import React, { useState, useEffect } from "react";
import "@/styles/FloatingContactBar.css";

export default function FloatingContactBar() {
  const [showToTop, setShowToTop] = useState(false);
  const [copiedWeChat, setCopiedWeChat] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyWeChat = () => {
    const wechatId = "maogeotop";
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(wechatId);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = wechatId;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
      } catch (err) {
        console.error("Copy failed", err);
      }
      document.body.removeChild(textArea);
    }
    setCopiedWeChat(true);
    setTimeout(() => setCopiedWeChat(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside className="mg-floating-contact-bar" aria-label="侧边联系与回到顶部工具栏">
      <div className="mg-fc-item mg-fc-qr">
        <button type="button" className="mg-fc-btn" aria-label="微信二维码">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
        </button>
        <div className="mg-fc-popover mg-fc-qr-popover">
          <div className="mg-fc-qr-box">
            <img
              src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721003301773.webp"
              alt="猫哥微信二维码"
              className="mg-fc-qr-img"
            />
          </div>
          <div className="mg-fc-qr-text">
            <strong>扫码添加猫哥微信</strong>
            <span>微信号: maogeotop</span>
          </div>
          <div className="mg-fc-arrow" />
        </div>
      </div>

      <div className="mg-fc-item mg-fc-wechat">
        <button
          type="button"
          onClick={handleCopyWeChat}
          className="mg-fc-btn mg-fc-pulse-btn"
          aria-label="复制微信号"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </button>
        <div className="mg-fc-popover">
          <div className="mg-fc-title">微信咨询</div>
          <div className="mg-fc-detail">maogeotop</div>
          <button type="button" className="mg-fc-action-btn" onClick={handleCopyWeChat}>
            {copiedWeChat ? "✓ 已复制微信号" : "点击复制微信号"}
          </button>
          <div className="mg-fc-arrow" />
        </div>
      </div>

      <div className="mg-fc-item mg-fc-email">
        <a href="mailto:2678586420@qq.com" className="mg-fc-btn" aria-label="发送邮件">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
      </div>

      {showToTop && (
        <div className="mg-fc-item mg-fc-totop">
          <button type="button" onClick={scrollToTop} className="mg-fc-btn" aria-label="回到顶部">
            ↑
          </button>
        </div>
      )}
    </aside>
  );
}
