"use client";

import { Button, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
    Control,
    Controller,
    FieldValues,
    Path,
} from "react-hook-form";

type SearchInputProps<T extends FieldValues> = {
    id: string;
    name: Path<T>;
    control: Control<T>;
    label?: string;
    onSearch: () => void;
};

/**
 * 検索用の入力欄と検索ボタンを横並びで表示する共通部品
 */
export const SearchInput = <T extends FieldValues>({
    id,
    name,
    control,
    onSearch,
}: SearchInputProps<T>) => {
    return (
        <div className="flex items-center gap-2">
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        id={id}
                        size="small"
                    />
                )}
            />

            <IconButton
                color="primary"
                onClick={onSearch}
                sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 1, // 角の丸み
                }}
            >
                <SearchIcon />
            </IconButton>
        </div>
    );
};