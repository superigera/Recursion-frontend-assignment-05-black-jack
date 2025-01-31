/**
 * .eslint.js
 *
 * ESLint configuration file.
 */

import pluginVue from "eslint-plugin-vue";
import vueTsEslintConfig from "@vue/eslint-config-typescript";

export default [
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"],
  },

  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
  },

  ...pluginVue.configs["flat/recommended"],
  ...vueTsEslintConfig(),

  {
    rules: {
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],
      "vue/multi-word-component-names": "off",
    },
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always", // HTML の void 要素（例: <img />）を自己終了に強制
          normal: "never", // 通常の HTML 要素（例: <div>）は自己終了しない
          component: "always", // カスタムコンポーネント（例: <v-img />）を自己終了に強制
        },
        svg: "always", // SVG 要素を自己終了に強制
        math: "always", // MathML 要素を自己終了に強制
      },
    ],
  },
];
