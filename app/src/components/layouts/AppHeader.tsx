"use client";

import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";

/**
 * ヘッダー全体のレイアウト
 *
 * - flex            : 横並び
 * - items-center    : 縦方向中央揃え
 * - justify-between : 左右端に配置
 * - bg-slate-800    : 濃いネイビー背景
 * - px-4            : 左右余白
 * - py-3            : 上下余白
 * - text-white      : 文字色を白
 * - shadow          : 下方向に影を付与
 */
const headerClassName =
    "flex items-center justify-between bg-slate-800 px-4 py-3 text-white shadow";

/**
* ヘッダー左側エリア
*
* - flex         : 横並び
* - items-center : 縦方向中央揃え
* - gap-2        : 要素間に余白
*/
const headerLeftClassName = "flex items-center gap-2";

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

                <h1 className={titleClassName}>{title}</h1>
            </div>

            <div>
                {onLogout && (
                    <IconButton color="inherit" onClick={onLogout} aria-label="logout">
                        <LogoutIcon />
                    </IconButton>
                )}
            </div>
        </header>
    );
}