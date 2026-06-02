import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./", // next.config.ts がある場所を指定
});

const config: Config = {
  testEnvironment: "jsdom", // ブラウザ環境(DOM)を模擬してテスト実行

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // テスト実行前の共通設定ファイル

  collectCoverage: false, // --coverageの時だけ集計する

  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts"], // Coverageの対象指定

  coverageThreshold: {
    global: {
      branches: 100, // 分岐(if/switch等)のCoverage基準

      functions: 100, // 関数のCoverage基準

      lines: 100, // 行Coverage基準

      statements: 100, // 文Coverage基準
    },
  },
};

export default createJestConfig(config);
