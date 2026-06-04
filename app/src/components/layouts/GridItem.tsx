import { ReactNode } from "react";

export const COL_SPAN = {
    M: 8
} as const;

export const COL_START = {
    LEFT: 1,
    RIGHT: 13,
} as const;


type GridItemProps = {
    children: ReactNode;
    /**
     * 要素の開始位置
     */
    colStart: 1 | 13;
    /**
     * 要素の幅
     */
    colSpan: 8;
};

/**
 * Grid内の配置要素
 */
export function GridItem({
    children,
    colStart = COL_START.LEFT,
    colSpan = COL_SPAN.M,
}: GridItemProps) {

    return (
        <div
            style={{
                gridColumn: `${colStart} / span ${colSpan}`
            }}
        >
            {children}
        </div>
    );
};