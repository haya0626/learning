"use client";

import { useRouter } from "next/navigation";
import { AppFooter } from "./AppFooter";
import { AppHeader } from "./AppHeader";
import { ActionFooter, FooterAction } from "../organisms/ActionFooter";

/**
 * 画面全体のレイアウト
 *
 * - min-h-screen : 画面の高さを最低100vhにする
 * - flex         : 子要素をflex配置にする
 * - flex-col     : Header / Main / Footer を縦並びにする
 * - bg-gray-100  : 画面全体の背景色を薄いグレーにする
 */
const shellClassName = "min-h-screen flex flex-col bg-gray-100";

/**
 * メインコンテンツ領域
 *
 * - flex-1       : Header / Footer 以外の残り高さを埋める
 * - w-full       : 横幅いっぱい
 * - max-w-7xl    : コンテンツ幅の最大値を制限
 * - mx-auto      : 中央寄せ
 * - px-4         : 左右余白
 * - py-6         : 上下余白
 */
const mainClassName = "flex-1 w-full max-w-7xl mx-auto px-4 py-6";

type AppShellProps = {
    title: string;
    children: React.ReactNode;
    footerActions?: FooterAction[];
};

/**
 * アプリ共通の画面枠
 *
 * - Heade、Footerの表示
 * - 各画面の内容をmain領域に表示
 */
export function AppShell({
    title,
    children,
    footerActions = [],
}: AppShellProps) {
    const router = useRouter();

    return (
        <div className={shellClassName}>
            <AppHeader
                title={title}
                onMenuClick={() => router.push("/top")}
                onLogout={() => router.push("/login")}
            />

            <main className={mainClassName}>{children}</main>

            <ActionFooter actions={footerActions} />

            <AppFooter />
        </div>
    );
}