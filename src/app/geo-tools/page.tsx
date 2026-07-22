"use client";
import { copyWeChatAndShowModal } from "@/components/WeChatModal";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/styles/GeoTools.css";

interface SlideData {
  title: string;
  subTitle: string;
  desc: string;
  btnText: string;
  btnLink: string;
}

const slides: SlideData[] = [
  {
    title: "AI 可见度诊断",
    subTitle: "一键分析品牌在大模型中的声量",
    desc: "精准诊断品牌在 DeepSeek、豆包、通义千问、腾讯元宝、文心一言等国内主流大模型中的检索可见度与收录份额，用数据化报表精准呈现品牌数字踪迹。",
    btnText: "立即开启诊断",
    btnLink: "http://geo.maogeo.top/"
  },
  {
    title: "AI 智能模板中心",
    subTitle: "前沿 AI 灵感引擎，创作触手可及",
    desc: "内置覆盖外贸独立站、出海推广、营销创意文案、行业分析等多场景的生成模板，一键切换多种文风，让表达更精准有力。",
    btnText: "探索模板中心",
    btnLink: "http://geo.maogeo.top/"
  },
  {
    title: "AI 智能写作协作",
    subTitle: "人机协同，效率突破极限",
    desc: "支持一键生成高品质 SEO/GEO 深度长文、产品落地页文案与邮件推介，无缝对接人机创作流，彻底告别灵感枯竭与低效撰写。",
    btnText: "体验智能写作",
    btnLink: "http://geo.maogeo.top/"
  },
  {
    title: "AI 智能修图魔盒",
    subTitle: "一键美化，赋能产品视觉表现",
    desc: "支持智能化图像增强、自动抠图抠背景、智能去除水印瑕疵及高清画质重构，让产品素材达到国际化顶尖视觉排版水准。",
    btnText: "使用智能修图",
    btnLink: "http://geo.maogeo.top/"
  },
  {
    title: "AI 商业提示词库",
    subTitle: "汇聚千万级实战 Prompt 精华",
    desc: "经过严格验证的高转化商业提示词大系，覆盖独立站 CRO、广告投放、用户画像提炼与竞品分析，一键复用顶级营销人智慧。",
    btnText: "获取提示词库",
    btnLink: "http://geo.maogeo.top/"
  }
];

export default function GeoToolsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  const sliderRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subTitleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const goToSlide = (nextIdx: number) => {
    if (nextIdx === currentIndex) return;

    const currentSlideEl = sliderRef.current?.children[currentIndex] as HTMLElement;
    const nextSlideEl = sliderRef.current?.children[nextIdx] as HTMLElement;

    if (!currentSlideEl || !nextSlideEl) return;

    const timeline = gsap.timeline();

    timeline.to(currentSlideEl, {
      opacity: 0,
      scale: 0.95,
      duration: 0.6,
      ease: "power2.inOut"
    });

    timeline.fromTo(
      nextSlideEl,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power2.inOut" },
      "<"
    );

    if (numbersRef.current) {
      gsap.to(numbersRef.current, {
        y: -nextIdx * 60,
        duration: 0.6,
        ease: "power3.out"
      });
    }

    const textTargets = [
      titleRef.current,
      subTitleRef.current,
      descRef.current,
      btnRef.current
    ];

    gsap.to(textTargets, {
      y: -15,
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        setCurrentIndex(nextIdx);
        gsap.fromTo(
          textTargets,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power2.out" }
        );
      }
    });
  };

  const handlePrev = () => {
    const prev = (currentIndex - 1 + totalSlides) % totalSlides;
    goToSlide(prev);
  };

  const handleNext = () => {
    const next = (currentIndex + 1) % totalSlides;
    goToSlide(next);
  };

  return (
    <main className="geo-tools-root">
      <section className="geo-tools-hero-slider">
        <div className="geo-tools-slider-container" ref={sliderRef}>
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`geo-tools-slide-bg ${idx === currentIndex ? "active" : ""}`}
            />
          ))}
        </div>

        <div className="geo-tools-overlay" />

        <div className="geo-tools-content-wrapper">
          <div className="geo-tools-text-col">
            <div className="geo-tools-counter">
              <div className="geo-tools-number-window">
                <div className="geo-tools-numbers" ref={numbersRef}>
                  {slides.map((_, idx) => (
                    <span key={idx}>0{idx + 1}</span>
                  ))}
                </div>
              </div>
              <span className="geo-tools-total-count">/ 0{totalSlides}</span>
            </div>

            <h1 className="geo-tools-title" ref={titleRef}>
              {slides[currentIndex].title}
            </h1>

            <h2 className="geo-tools-subtitle" ref={subTitleRef}>
              {slides[currentIndex].subTitle}
            </h2>

            <p className="geo-tools-desc" ref={descRef}>
              {slides[currentIndex].desc}
            </p>

            <div className="geo-tools-actions">
              <a
                href={slides[currentIndex].btnLink}
                target="_blank"
                rel="noopener noreferrer"
                className="geo-tools-cta-btn"
                ref={btnRef}
              >
                {slides[currentIndex].btnText} ➔
              </a>
            </div>
          </div>

          <div className="geo-tools-nav-col">
            <div className="geo-tools-controls">
              <button
                type="button"
                className="geo-tools-nav-btn prev"
                onClick={handlePrev}
                aria-label="上一个功能"
              >
                ‹
              </button>
              <button
                type="button"
                className="geo-tools-nav-btn next"
                onClick={handleNext}
                aria-label="下一个功能"
              >
                ›
              </button>
            </div>

            <div className="geo-tools-dots">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`geo-tools-dot ${idx === currentIndex ? "active" : ""}`}
                  onClick={() => goToSlide(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="geo-tools-sec2">
        <div className="geo-tools-sec2-container">
          <div className="geo-tools-sec2-header">
            <span className="geo-tools-sec2-tag">GEO 全效赋能矩阵</span>
            <h2 className="geo-tools-sec2-title">
              打造企业级 <span className="gradient-text">AI 数字化竞争力</span>
            </h2>
            <p className="geo-tools-sec2-subtitle">
              深度融合大模型抓取算法与高转转化架构，让品牌在 AI 检索时代占据制高点
            </p>
          </div>

          <div className="geo-tools-sec2-grid">
            <div className="geo-tools-sec2-card">
              <div className="geo-tools-sec2-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h3>大模型生成式引用 (GEO)</h3>
              <p>专为 ChatGPT、DeepSeek 及 Google Gemini 语义结构化优化，让品牌在 AI 生成答复中被高频引用。</p>
            </div>

            <div className="geo-tools-sec2-card">
              <div className="geo-tools-sec2-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </div>
              <h3>谷歌传统 SEO 流量霸屏</h3>
              <p>覆盖关键词分层规划、E-E-A-T 权威背书与技术底座治理，沉淀源源不断的自然买家询盘流量。</p>
            </div>

            <div className="geo-tools-sec2-card">
              <div className="geo-tools-sec2-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>100% 独立数字资产</h3>
              <p>拒绝 SaaS 平台捆绑，源码完全交付，拥有最高数据控制权与自由扩展部署能力。</p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "4rem" }}>
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
              💬 复制微信 (maogeotop) 体验 GEO 工具与建站方案
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
