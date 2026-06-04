import { ReactNode } from "react";

type GridProps = {
    children: ReactNode;
    columns?: number;
    gap?: number;
    rowHeight?: number;
};

/**
 * 画面レイアウト用のグリッドコンテナ
 *
 * @param columns   グリッド全体の分割数
 * @param gap       要素間の余白
 * @param rowHeight 1行あたりの高さ
 */
export function Grid({
    children,
    columns = 24,
    gap = 2,
    rowHeight = 56,
}: GridProps) {
    return (
        <div
            className="grid w-full"
            style={{
                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                gridAutoRows: `${rowHeight}px`,
                gap: `${gap * 8}px`,
            }}
        >
            {children}
        </div>
    );
};