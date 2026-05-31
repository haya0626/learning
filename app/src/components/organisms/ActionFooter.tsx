"use client";

import { Button } from "@mui/material";

/**
 * フッターアクション領域
 *
 * flex           : 横並び
 * justify-end    : 右寄せ
 * gap-2          : ボタン間余白
 * border-t       : 上線
 * bg-white       : 背景色
 * px-6 py-4      : 余白
 * shadow-sm      : 軽い影
 */
const actionFooterClassName =
    "flex justify-end gap-2 border-t border-gray-300 bg-white px-6 py-4 shadow-sm";

export type FooterAction = {
    /**
     * ボタン表示名
     */
    label: string;
    /**
     * 活性制御
     */
    disabled?: boolean;
    /**
     * 押下時処理
     */
    onClick: () => void;
};

type ActionFooterProps = {
    actions?: FooterAction[];
};

/**
 * フッターエリアのボタン関連
 */
export function ActionFooter({
    actions = [],
}: ActionFooterProps) {
    // 照会画面を想定
    if (actions.length === 0) {
        return null;
    }

    return (
        <section
            className={actionFooterClassName}
        >
            {actions.map((action) => (
                <Button
                    key={action.label}
                    disabled={action.disabled}
                    onClick={action.onClick}
                    aria-label={action.label}
                >
                </Button>
            ))}
        </section>
    );
}