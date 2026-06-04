import { ReactNode } from "react";

type FormItemProps = {
    /**
     * ラベル名称
     */
    label: string;
    /**
     * ラベルと紐づく入力項目のID
     */
    id: string;
    /**
     * 使用する入力項目
     */
    children: ReactNode
};

const LABEL_WIDTH = "120px";

/**
 * ラベルと入力項目を横並びで表示する共通レイアウト
 */
export const FormItem = ({
    label,
    id,
    children,
}: FormItemProps) => {
    return (
        <div className="flex items-center gap-4">
            <label
                htmlFor={id}
                className="shrink-0"
                style={{
                    width: LABEL_WIDTH,
                }}
            >
                {label}
            </label>

            <div className="w-[220px]">
                {children}
            </div>
        </div>
    );
};