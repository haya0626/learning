import { ReactNode } from "react";

const COLUMNS = 24
const GAP = 2
const ROWHEIGHT = 45


type GridProps = {
    children: ReactNode;
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
}: GridProps) {
    return (
        <div
            className="grid w-full"
            style={{
                gridTemplateColumns: `repeat(${COLUMNS}, minmax(0, 1fr))`,
                gridAutoRows: `${ROWHEIGHT}px`,
                gap: `${GAP * 8}px`,
            }}
        >
            {children}
        </div>
    );
};