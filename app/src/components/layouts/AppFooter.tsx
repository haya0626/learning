/**
 * フッター全体
 *
 * - border-t        : 上線
 * - border-gray-300 : 線色
 * - bg-gray-100     : 背景色
 * - px-4            : 左右余白
 * - py-2            : 上下余白
 */
const footerClassName = "border-t border-gray-300 bg-gray-100 px-4 py-2";

/**
 * コピーライト文字
 *
 * - text-xs      : 小さい文字
 * - text-gray-500: グレー文字
 */
const copyrightClassName = "text-xs text-gray-500";

/**
 * 共通フッター
 */
export function AppFooter() {
    return (
        <footer className={footerClassName}>
            <p className={copyrightClassName}>© 2026 Sales Management System</p>
        </footer>
    );
}