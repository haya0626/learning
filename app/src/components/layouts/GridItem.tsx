import { ReactNode } from "react";

type ColumnsPerRow = 1 | 2 | 3;

type GridItemProps = {
    children: ReactNode;
    /**
     * 1行に並べる要素数
     */
    columnsPerRow?: ColumnsPerRow;
    /**
     * 縦方向の使用行数
     */
    rowSpan?: number;
};

const GRID_COLUMNS = 24;

const getGridColumnSpan = (columnsPerRow: ColumnsPerRow) => {
    return GRID_COLUMNS / columnsPerRow;
};

/**
 * Grid内の配置要素
 *
 * @param columnsPerRow 1行に並べる要素数
 * @param rowSpan       縦方向の使用行数
 */
export function GridItem({
    children,
    columnsPerRow = 1,
    rowSpan = 1,
}: GridItemProps) {
    const gridColumnSpan = getGridColumnSpan(columnsPerRow);

    return (
        <div
            style={{
                gridColumn: `span ${gridColumnSpan}`,
                gridRow: `span ${rowSpan}`,
            }}
        >
            {children}
        </div>
    );
};