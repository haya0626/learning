import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // JS / TS 共通の基本設定
  js.configs.recommended,

  // TypeScript 推奨
  ...tseslint.configs.recommended,

  // React 推奨
  react.configs.flat.recommended,

  // 独自のルール
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react,
      import: importPlugin,
    },
    rules: {
      // 変数・関数名はキャメルケースにする
      "@typescript-eslint/naming-convention": [
        "warn",
        {
          selector: ["variable", "function"],
          format: ["camelCase"],
        },
      ],

      // import 順序を整理する
      "import/order": [
        "warn",
        {
          groups: [
            "builtin", // Node.js 標準
            "external", // npm ライブラリ
            "internal", // プロジェクト内（エイリアス経由）
            "parent", // 親ディレクトリ
            "sibling", // 同階層
            "index", // index ファイル
            "type", // TypeScript の型 import
          ],
          "newlines-between": "always", // グループ間に必ず行間を入れる
          alphabetize: {
            order: "asc", // アルファベット順
            caseInsensitive: true, // 大文字小文字を無視する
          },
        },
      ],

      // 同じ名前で変数や関数を再定義することを禁止する
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": "warn",

      // 「見えない空白」や「全角スペース」などの特殊な空白文字を含むとき警告を表示する
      "no-irregular-whitespace": "warn",
    },
  },
]);
