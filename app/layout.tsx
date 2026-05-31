import type { Metadata } from "next";
import { AppProviders } from "./src/providers/AppProviders";
import "./src/styles/globals.css";

/**
 * HTML の<title>と<meta>を、Next.js が自動定義（Metadata API）
 */
export const metadata: Metadata = {
  // ブラウザタブのタイトル
  title: "販売管理システム",
  // ページ説明文
  description: "業務系SPA学習用アプリ",
};

/**
 * Next.js App Router で必ず使われる全体レイアウト
 * 
 * 役割
 * - HTML の基本構造を定義
 * - アプリ全体で使う Provider を適用
 * - 各画面の page.tsx を children として表示する
 */
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}