"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as JotaiProvider } from "jotai";
import { useState } from "react";
import { theme } from "../lib/mui/theme";

type AppProvidersProps = {
    children: React.ReactNode;
};

/**
 * アプリ全体で使う Provider をまとめるコンポーネント
 * - MUI / Jotai / TanStack Query などの設定責務をここに集約
 */
export function AppProviders({ children }: AppProvidersProps) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <JotaiProvider>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </QueryClientProvider>
        </JotaiProvider>
    );
}