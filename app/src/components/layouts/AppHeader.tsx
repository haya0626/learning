"use client";

import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";

/**
 * ヘッダー全体のレイアウト
 *
 * - grid           : グリッドレイアウトを使用
 * - grid-cols-3    : 左・中央・右の3列で均等配置
 * - items-center   : 縦方向中央揃え
 * - bg-slate-800   : 濃いネイビー背景
 * - px-4           : 左右余白
 * - py-3           : 上下余白
 * - text-white     : 文字色を白
 * - shadow         : 下方向に影を付与
 */
const headerClassName =
    "grid grid-cols-3 items-center bg-slate-800 px-4 py-3 text-white shadow";

/**
 * ヘッダー左側エリア
 *
 * - flex           : 横並び
 * - items-center   : 縦方向中央揃え
 * - justify-start  : 左寄せ
 */
const headerLeftClassName = "flex items-center justify-start";

/**
 * ヘッダー中央エリア
 *
 * - flex           : 横並び
 * - items-center   : 縦方向中央揃え
 * - justify-center : 水平方向中央揃え
 */
const headerCenterClassName = "flex items-center justify-center";

/**
 * ヘッダー右側エリア
 *
 * - flex           : 横並び
 * - items-center   : 縦方向中央揃え
 * - justify-end    : 右寄せ
 */
const headerRightClassName = "flex items-center justify-end";

/**
 * 画面タイトル
 *
 * - text-lg       : 文字サイズ大
 * - font-semibold : 少し太字
 */
const titleClassName = "text-lg font-semibold";

type AppHeaderProps = {
    title: string;
    onMenuClick?: () => void;
    onLogout?: () => void;
};

/**
 * 共通ヘッダー
 */
export function AppHeader({ title, onMenuClick, onLogout }: AppHeaderProps) {
    return (
        <header className={headerClassName}>
            <div className={headerLeftClassName}>
                <IconButton color="inherit" onClick={onMenuClick} aria-label="menu">
                    <MenuIcon />
                </IconButton>
            </div>

            <div className={headerCenterClassName}>
                <h1 className={titleClassName}>{title}</h1>
            </div>

            <div className={headerRightClassName}>
                {onLogout && (
                    <IconButton color="inherit" onClick={onLogout} aria-label="logout">
                        <LogoutIcon />
                    </IconButton>
                )}
            </div>
        </header>
    );
}