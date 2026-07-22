import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WeChatModal from "@/components/WeChatModal";
import FloatingContactBar from "@/components/FloatingContactBar";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "猫哥全栈架构与 GEO 独立站建站 | 外贸建站与谷歌 SEO 优化",
  description:
    "猫哥提供高转化外贸独立站建站、谷歌 SEO 优化与生成式引擎优化 (GEO)。针对 DeepSeek、ChatGPT 等 AI 大模型做 RAG 结构化提炼，打造秒开绿标响应式出海数字资产。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&family=Outfit:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          id="LA_COLLECT"
          async
          src="http://sdk.51.la/js-sdk-pro.min.js?id=KqyLKxdjr8HVgyyQ&ck=KqyLKxdjr8HVgyyQ"
          charset="UTF-8"
        />
      </head>
      <body>
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
          <WeChatModal />
          <FloatingContactBar />
        </SmoothScroll>
      </body>
    </html>
  );
}
