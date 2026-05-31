import { createTheme } from "@mui/material/styles";

/**
 * アプリ全体で利用するMUIテーマ定義。
 */
export const theme = createTheme({
  /**
   * アプリ全体のカラーパレット。
   */
  palette: {
    primary: {
      // ヘッダーや主要ボタンで使用するメインカラー
      main: "#1f3a5f",
    },
    secondary: {
      // 補助的なボタンやアクセントで使用するカラー
      main: "#607d8b",
    },
    background: {
      // 画面全体の背景色
      default: "#f4f6f8",
      // Card / Paper など、入力エリアや一覧エリアの背景色
      paper: "#ffffff",
    },
  },

  /**
   * MUIコンポーネントの角丸設定。
   */
  shape: {
    borderRadius: 8,
  },

  /**
   * MUIコンポーネントごとの共通設定。
   */
  components: {
    MuiButton: {
      defaultProps: {
        // Buttonを配置したとき、デフォルトで塗りつぶしボタンにする
        variant: "contained",
      },
      styleOverrides: {
        root: {
          // MUI標準の英字大文字変換を無効化
          textTransform: "none",
          // ボタンの文字の太さ
          fontWeight: 600,
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        // 入力項目のサイズ
        size: "small",
        // 枠線ありの入力欄に統一
        variant: "outlined",
      },
    },
  },
});
