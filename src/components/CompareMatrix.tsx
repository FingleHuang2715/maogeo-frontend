"use client";

import React from "react";
import "@/styles/CompareMatrix.css";

export default function CompareMatrix() {
  return (
    <section className="compare-cosmic">
      <div className="compare-cosmic__container">
        <div className="compare-cosmic__header">
          <div className="compare-cosmic__badge">
            <span className="compare-cosmic__badge-icon">⚖️</span>
            服务模式全面全对比
          </div>
          <h2 className="compare-cosmic__title">
            为什么猫哥建站 <span className="gradient-text">更受出海品牌青睐？</span>
          </h2>
          <p className="compare-cosmic__subtitle">
            拒绝虚高报价与低质套路，用硬核技术与实操结果说话
          </p>
        </div>

        <div className="compare-cosmic__table-wrapper">
          <div className="compare-cosmic__table-scroll">
            <table className="compare-cosmic__table">
              <thead>
                <tr className="compare-cosmic__thead-row">
                  <th className="compare-cosmic__th compare-cosmic__th--item">对比维维度</th>
                  <th className="compare-cosmic__th compare-cosmic__th--template">廉价模板站</th>
                  <th className="compare-cosmic__th compare-cosmic__th--custom">传统外包定制</th>
                  <th className="compare-cosmic__th compare-cosmic__th--maoge">猫哥 GEO/SEO 建站</th>
                </tr>
              </thead>
              <tbody>
                <tr className="compare-cosmic__tr">
                  <td className="compare-cosmic__td compare-cosmic__td--item">源代码掌控权</td>
                  <td className="compare-cosmic__td compare-cosmic__td--template">无（SaaS 按年续费绑架）</td>
                  <td className="compare-cosmic__td compare-cosmic__td--custom">部分提供</td>
                  <td className="compare-cosmic__td compare-cosmic__td--maoge">100% 独立源码完全交付</td>
                </tr>
                <tr className="compare-cosmic__tr compare-cosmic__tr--alt">
                  <td className="compare-cosmic__td compare-cosmic__td--item">GEO AI 大模型提炼</td>
                  <td className="compare-cosmic__td compare-cosmic__td--template">不支持</td>
                  <td className="compare-cosmic__td compare-cosmic__td--custom">不支持</td>
                  <td className="compare-cosmic__td compare-cosmic__td--maoge">深度嵌入 RAG 结构化数据</td>
                </tr>
                <tr className="compare-cosmic__tr">
                  <td className="compare-cosmic__td compare-cosmic__td--item">PageSpeed 打开速度</td>
                  <td className="compare-cosmic__td compare-cosmic__td--template">30 - 50 分（卡顿）</td>
                  <td className="compare-cosmic__td compare-cosmic__td--custom">60 - 75 分（一般）</td>
                  <td className="compare-cosmic__td compare-cosmic__td--maoge">90 - 100 分（秒开绿标）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
