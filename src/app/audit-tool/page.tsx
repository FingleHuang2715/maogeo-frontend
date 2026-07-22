"use client";

import React, { useState } from "react";
import Link from "next/link";
import AuthorCard from "@/components/AuthorCard";
import "@/styles/AuditTool.css";

interface QuestionOption {
  text: string;
  score: number; // 分数 (比如：良好=0, 风险=10, 高危=20)
  riskLevel?: "low" | "mid" | "high";
  reportSummary?: string;
}

interface Question {
  id: number;
  title: string;
  options: QuestionOption[];
}

const auditQuestions: Question[] = [
  {
    id: 1,
    title: "1. 域名 (Domain) 的购买账号与控制权限在谁手里？",
    options: [
      { text: "在自己/公司注册的阿里云/腾讯云/Cloudflare等账号下，控制权100%在自己手", score: 0, riskLevel: "low" },
      { text: "在建站公司账号下代买，但提供域名管理面板账号密码，可以自由转出", score: 5, riskLevel: "mid", reportSummary: "域名在服务商代买，需确认是否随时支持无条件转出索要 Auth Code。" },
      { text: "完全在建站公司手上，没有独立管理面板，续费也由建站公司说了算", score: 20, riskLevel: "high", reportSummary: "高危雷区：域名控制权不在自己手中！一旦合作破裂，核心资产与品牌流量将全部被扣押。" }
    ]
  },
  {
    id: 2,
    title: "2. 服务器 (Hosting / VPS) 的权限与归属情况是？",
    options: [
      { text: "自己购买的海外 VPS (如 Hostinger / Vultr / 阿里云)，服务商仅配置环境", score: 0, riskLevel: "low" },
      { text: "服务商提供独享 VPS / 独享服务器，提供服务器 IP 与 SSH/宝塔后台根权限", score: 0, riskLevel: "low" },
      { text: "建站公司几百个客户共用的超售共享主机，没有后台权限，每年高价续费", score: 15, riskLevel: "high", reportSummary: "服务器共享超售且价格畸高：导致网页加载极慢，且续费被绑定捆绑。" }
    ]
  },
  {
    id: 3,
    title: "3. 网站源代码 (Source Code) 与数据库的交付方式？",
    options: [
      { text: "100% 部署并交付完整源码与数据库文件，支持自由打包打包迁移到任意服务器", score: 0, riskLevel: "low" },
      { text: "使用开源系统 (如 WordPress)，支持后台导出 XML / 安装备份插件打包", score: 0, riskLevel: "low" },
      { text: "封闭式 SaaS 模板系统，无法导出源码，一旦不续费网站内容与代码全部作废", score: 15, riskLevel: "high", reportSummary: "SaaS 闭源捆绑陷阱：无法打包备份源码，后期改版迁移成本极高。" }
    ]
  },
  {
    id: 4,
    title: "4. 网站页面测速与 Google Core Web Vitals 性能指标表现？",
    options: [
      { text: "Google PageSpeed Insights 移动/桌面端测速达 80-100 分绿标区间", score: 0, riskLevel: "low" },
      { text: "打开速度尚可，但测速分数在 50-70 分之间，未经过专门技术 SEO 调优", score: 5, riskLevel: "mid", reportSummary: "网页性能待优化：首屏加载与脚本阻塞影响谷歌 SEO 收录与转化。" },
      { text: "加载超过 5 秒甚至经常打不开，满屏插件卡顿，谷歌测速低于 40 分红标", score: 20, riskLevel: "high", reportSummary: "致命速度雷区：谷歌测速红标！导致谷歌广告投流高跳出率，广告费白白浪费。" }
    ]
  },
  {
    id: 5,
    title: "5. 搜索引擎 SEO / 大模型 GEO 的关键词布局与底层架构？",
    options: [
      { text: "建站前进行行业蓝海词调研，配置 Schema 结构化数据与语义 TDK 规范", score: 0, riskLevel: "low" },
      { text: "仅安装了基础 SEO 插件，按我们给的标题填上，没有做深度词库规划", score: 5, riskLevel: "mid", reportSummary: "缺乏深层 SEO/GEO 布局：缺乏语义结构化标记，难被 AI 大模型高频引用。" },
      { text: "承诺“保证 300 个词一个月上谷歌首页”，但全是无搜索量的生僻死词", score: 15, riskLevel: "high", reportSummary: "黑帽/套路词陷阱：所谓“保词上首页”多为无搜索量的垃圾词，无真实询盘价值。" }
    ]
  },
  {
    id: 6,
    title: "6. 建站服务商的沟通模式与对接保障？",
    options: [
      { text: "资深技术/主理人 1-to-1 直接沟通需求，没有流水线销售提成与转手中转", score: 0, riskLevel: "low" },
      { text: "有专门的项目经理与技术群组，但响应速度一般，按工单排队修改", score: 5, riskLevel: "mid", reportSummary: "常规客服工单流程：修改周期较长，沟通存在一定层级损耗。" },
      { text: "签约前销售无比热情，付款后销售离职，技术群无人回复或互相推诿", score: 15, riskLevel: "high", reportSummary: "售后断层服务风险：销售流失率高，付款后陷入无人维护的窘境。" }
    ]
  }
];

export default function AuditToolPage() {
  const [activeTab, setActiveTab] = useState<"quiz" | "exposure">("quiz");
  const [currentStep, setCurrentStep] = useState<number>(0); // 0 为欢迎页，1-6 为题目，7 为结果页
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  
  // 表单状态
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    wechatOrPhone: "",
    websiteUrl: "",
    providerName: "",
    exposureDetail: "",
    agreeTerm: false,
  });
  const [formStatus, setFormStatus] = useState<{ type: "idle" | "success" | "error"; msg: string }>({
    type: "idle",
    msg: "",
  });

  const handleSelectOption = (qId: number, optionIdx: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const handleNextStep = () => {
    if (currentStep < auditQuestions.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setCurrentStep(0);
  };

  // 计算总结分数与结果
  const calculateResult = () => {
    let totalScore = 100;
    const reports: string[] = [];

    auditQuestions.forEach((q) => {
      const selectedIdx = selectedAnswers[q.id];
      if (selectedIdx !== undefined) {
        const option = q.options[selectedIdx];
        totalScore -= option.score;
        if (option.reportSummary) {
          reports.push(option.reportSummary);
        }
      }
    });

    totalScore = Math.max(0, totalScore);

    let badgeText = "安全绿标 (优等型)";
    let badgeColor = "#10b981";
    let summaryText = "恭喜！您的建站方案与服务商合作模式非常健康，权限完整且避开了大部分闭源与超售陷阱。";

    if (totalScore < 60) {
      badgeText = "高危红标 (严重雷区)";
      badgeColor = "#ef4444";
      summaryText = "警告：您的建站方案存在多处高危陷阱！包括域名/服务器权限缺失或闭源捆绑，建议立即联系猫哥进行全面资产审计。";
    } else if (totalScore < 85) {
      badgeText = "中危黄标 (存在风险)";
      badgeColor = "#f59e0b";
      summaryText = "提示：您的建站方案基本可用，但在权限归属、SEO布局或访问速度上存在潜在风险，建议针对性优化。";
    }

    return { totalScore, badgeText, badgeColor, summaryText, reports };
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.wechatOrPhone || !formData.providerName) {
      setFormStatus({ type: "error", msg: "请填写必填项（公司名称、联系方式及服务商名称）！" });
      return;
    }
    if (!formData.agreeTerm) {
      setFormStatus({ type: "error", msg: "请勾选同意曝光条款及真实性承诺。" });
      return;
    }
    setFormStatus({ type: "success", msg: "曝光资料已成功提交！猫哥团队将在 24 小时内进行核实与审查。" });
  };

  const result = calculateResult();

  return (
    <main className="mg-audit-wrapper">
      <div className="mg-audit-container">
        
        {/* 1. 顶部大 Header */}
        <header className="mg-audit-header-card">
          <div className="mg-audit-breadcrumbs">
            <Link href="/">首页</Link> &gt; <span>外贸建站防踩雷与服务商避坑自测工具</span>
          </div>
          <h1 className="mg-audit-main-title">
            外贸建站防踩雷与服务商资质自测工具
          </h1>
          <p className="mg-audit-sub-desc">
            拒绝虚假营销与捆绑陷阱！通过 6 项核心指标自测，3分钟评估您的网站控制权归属、谷歌SEO基因及服务商踩雷指数。
          </p>
        </header>

        {/* 2. 左侧侧边栏 (广告与避坑指南) */}
        <aside className="mg-post-left-ad-col">
          <div className="mg-ad-block">
            <div className="mg-ad-glow" />
            <div className="mg-ad-content">
              <div className="mg-ad-header">
                <span className="mg-ad-tag">猫哥独家避坑方案</span>
                <h3 className="mg-ad-title">想做 100% 独立控制权的高转化独立站？</h3>
              </div>
              <p className="mg-ad-desc">
                拒绝闭源 SaaS 捆绑与天价续费，猫哥提供 100% 源码交付、域名/服务器归属自己、谷歌 90+ 绿标测速的顶级建站服务。
              </p>
              <ul className="mg-ad-features">
                <li>
                  <svg className="mg-ad-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  <span>100% 域名/服务器控制权归您</span>
                </li>
                <li>
                  <svg className="mg-ad-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  <span>Google PageSpeed 90+ 绿标测速</span>
                </li>
                <li>
                  <svg className="mg-ad-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  <span>GEO 提炼规则与大模型算法支持</span>
                </li>
              </ul>
              <div className="mg-ad-action">
                <Link href="/waimaojianzhan" className="mg-ad-btn">查看猫哥外贸建站方案 ➔</Link>
                <div className="mg-ad-footer-info">
                  <span>咨询微信：<strong className="mg-ad-tip">maogeotop</strong></span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* 3. 中间主流程流 */}
        <section className="mg-audit-main-flow">
          
          {/* 切换 Tab */}
          <nav className="mg-quiz-switcher-bar">
            <button
              type="button"
              className={`mg-switcher-btn ${activeTab === "quiz" ? "active" : ""}`}
              onClick={() => setActiveTab("quiz")}
            >
              📋 建站踩雷 3 分钟自测
            </button>
            <button
              type="button"
              className={`mg-switcher-btn ${activeTab === "exposure" ? "active" : ""}`}
              onClick={() => setActiveTab("exposure")}
            >
              🚨 无良服务商曝光通道
            </button>
          </nav>

          {/* Tab 1: 自测问卷卡片 */}
          {activeTab === "quiz" && (
            <div className="mg-audit-quiz-card">
              
              {/* State 0: 欢迎页 */}
              {currentStep === 0 && (
                <div className="mg-panel-state active mg-state-welcome">
                  <div className="mg-welcome-icon">🛡️</div>
                  <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#1d1d1f", margin: 0 }}>
                    开始您的外贸建站避坑资质评估
                  </h3>
                  <p style={{ fontSize: "14px", color: "#515154", maxWidth: "520px", lineHeight: "1.6" }}>
                    本评估涵盖域名所有权、服务器独享度、源码交付、Google 测速及 SEO 关键词布局等 6 大核心维度。
                  </p>
                  <button type="button" className="mg-welcome-btn" onClick={() => setCurrentStep(1)}>
                    立即开始测评 (预计耗时 2 分钟) ➔
                  </button>
                </div>
              )}

              {/* State 1-6: 题目流 */}
              {currentStep >= 1 && currentStep <= auditQuestions.length && (
                <div className="mg-panel-state active">
                  <div className="mg-audit-progress-container">
                    <div className="mg-progress-info">
                      <span>题目进度：{currentStep} / {auditQuestions.length}</span>
                      <span>已完成 {Math.round(((currentStep - 1) / auditQuestions.length) * 100)}%</span>
                    </div>
                    <div className="mg-progress-bar-bg">
                      <div
                        className="mg-progress-bar-fill"
                        style={{ width: `${((currentStep - 1) / auditQuestions.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  {(() => {
                    const q = auditQuestions[currentStep - 1];
                    const currentSelected = selectedAnswers[q.id];
                    return (
                      <div className="mg-question-box">
                        <h4 className="mg-question-title">{q.title}</h4>
                        <div className="mg-options-list">
                          {q.options.map((opt, idx) => (
                            <button
                              key={idx}
                              type="button"
                              className={`mg-option-btn ${currentSelected === idx ? "selected" : ""}`}
                              onClick={() => handleSelectOption(q.id, idx)}
                            >
                              <span className="mg-option-dot" />
                              <span>{opt.text}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })()}

                  <div className="mg-quiz-footer-actions">
                    <button
                      type="button"
                      className="mg-prev-btn"
                      onClick={handlePrevStep}
                      disabled={currentStep === 1}
                      style={{ opacity: currentStep === 1 ? 0.4 : 1 }}
                    >
                      &larr; 上一题
                    </button>
                    
                    <button
                      type="button"
                      className="mg-welcome-btn"
                      style={{ padding: "10px 24px", fontSize: "13px" }}
                      disabled={selectedAnswers[auditQuestions[currentStep - 1].id] === undefined}
                      onClick={handleNextStep}
                    >
                      {currentStep === auditQuestions.length ? "查看测试评估报告 ➔" : "下一题 ➔"}
                    </button>
                  </div>
                </div>
              )}

              {/* State 7: 评估报告结果页 */}
              {currentStep > auditQuestions.length && (
                <div className="mg-panel-state active mg-state-result">
                  <div className="mg-gauge-box">
                    <svg className="mg-gauge-svg" viewBox="0 0 36 36">
                      <path
                        className="mg-gauge-track"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="mg-gauge-fill"
                        stroke={result.badgeColor}
                        strokeDasharray={`${result.totalScore}, 100`}
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="mg-gauge-value">
                      <div className="mg-score-num" style={{ color: result.badgeColor }}>{result.totalScore}</div>
                      <div className="mg-score-unit">综合健康得分</div>
                    </div>
                  </div>

                  <span className="mg-result-badge" style={{ backgroundColor: result.badgeColor }}>
                    {result.badgeText}
                  </span>

                  <p className="mg-result-summary">{result.summaryText}</p>

                  {/* 详细踩雷报告清单 */}
                  {result.reports.length > 0 && (
                    <div className="mg-audit-report-details">
                      <h4 className="mg-details-title">🔍 检出的风险项与建议说明 ({result.reports.length} 项)</h4>
                      <div className="mg-report-list">
                        {result.reports.map((rep, idx) => (
                          <div key={idx} className="mg-report-item">
                            <h5>预警提示 {idx + 1}</h5>
                            <p>{rep}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mg-result-cta">
                    <Link href="/waimaojianzhan" className="mg-result-cta-btn">
                      获取猫哥 100% 避坑独立站建设方案 ➔
                    </Link>
                    <button type="button" className="mg-result-reset" onClick={handleResetQuiz}>
                      重新测试
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* Tab 2: 劣质服务商曝光通道 */}
          {activeTab === "exposure" && (
            <div className="mg-audit-quiz-card mg-state-exposure">
              <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#ef4444", margin: "0 0 8px 0" }}>
                🚨 无良建站服务商曝光与投诉通道
              </h3>
              <p style={{ fontSize: "13.5px", color: "#555666", lineHeight: "1.6", margin: 0 }}>
                如果您曾遭遇扣押域名、拒绝交付源码、虚假保词承诺或付款后失联等严重违规行为，欢迎提交曝光信息。猫哥团队核实后将列入行业警示名单。
              </p>

              <form className="mg-exposure-form" onSubmit={handleFormSubmit}>
                <div className="mg-form-row">
                  <label className="mg-form-label">您的公司/品牌名称 *</label>
                  <input
                    type="text"
                    className="mg-form-input"
                    placeholder="例如：深圳市XXX科技有限公司"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  />
                </div>

                <div className="mg-form-row">
                  <label className="mg-form-label">您的联系微信 / 手机号 *</label>
                  <input
                    type="text"
                    className="mg-form-input"
                    placeholder="方便猫哥团队核实详情（信息将严格保密）"
                    value={formData.wechatOrPhone}
                    onChange={(e) => setFormData({ ...formData, wechatOrPhone: e.target.value })}
                  />
                </div>

                <div className="mg-form-row">
                  <label className="mg-form-label">被投诉/曝光的服务商名称 *</label>
                  <input
                    type="text"
                    className="mg-form-input"
                    placeholder="例如：XX网络科技有限公司"
                    value={formData.providerName}
                    onChange={(e) => setFormData({ ...formData, providerName: e.target.value })}
                  />
                </div>

                <div className="mg-form-row">
                  <label className="mg-form-label">遭遇的避坑雷区/套路详情描述</label>
                  <textarea
                    className="mg-form-input"
                    rows={4}
                    placeholder="请详细说明：如扣留域名控制权、拒绝提供服务器密码、续费天价、做上去全是生僻词等..."
                    value={formData.exposureDetail}
                    onChange={(e) => setFormData({ ...formData, exposureDetail: e.target.value })}
                  />
                </div>

                <div className="mg-form-warning-note">
                  <strong>📌 声明：</strong>猫哥团队保留对提交材料进行真实性核实与筛查的权利。请如实填写，切勿恶意诽谤。
                </div>

                <label className="mg-form-checkbox-row">
                  <input
                    type="checkbox"
                    checked={formData.agreeTerm}
                    onChange={(e) => setFormData({ ...formData, agreeTerm: e.target.checked })}
                  />
                  <span>我承诺上述填写的被投诉服务商违规事实真实有效。</span>
                </label>

                {formStatus.type !== "idle" && (
                  <div className={`mg-notice-bubble ${formStatus.type}`}>
                    {formStatus.msg}
                  </div>
                )}

                <button type="submit" className="mg-form-submit-btn">
                  提交曝光审核信息 ➔
                </button>
              </form>
            </div>
          )}

        </section>

        {/* 4. 右侧侧边栏 */}
        <aside className="mg-archive-sidebar">
          <AuthorCard />

          <div className="mg-sidebar-widget">
            <h4 className="mg-widget-title">建站避坑干货文章</h4>
            <div className="mg-sidebar-posts">
              <Link href="/blog" className="mg-sidebar-post-item">
                <div className="mg-sidebar-post-title">如何判断外贸建站公司是否坑人？看这 5 点就够了</div>
                <div className="mg-sidebar-post-reads">阅读 2,450 次</div>
              </Link>
              <Link href="/blog" className="mg-sidebar-post-item">
                <div className="mg-sidebar-post-title">域名放在建站公司手里有多危险？</div>
                <div className="mg-sidebar-post-reads">阅读 1,890 次</div>
              </Link>
              <Link href="/blog" className="mg-sidebar-post-item">
                <div className="mg-sidebar-post-title">解析 SaaS 闭源模板站的续费与迁移陷阱</div>
                <div className="mg-sidebar-post-reads">阅读 1,620 次</div>
              </Link>
            </div>
          </div>
        </aside>

      </div>
    </main>
  );
}
