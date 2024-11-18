import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import pluginVitest from '@vitest/eslint-plugin'
import pluginPlaywright from 'eslint-plugin-playwright'
import oxlint from 'eslint-plugin-oxlint'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  {
    ...pluginPlaywright.configs['flat/recommended'],
    files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },
  oxlint.configs['flat/recommended'],
  skipFormatting,
  {
    files: ['**/*.vue'],
    rules: {
      // 定义script lang属性的可选项
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: ['tsx', 'ts'],
          },
        },
      ],
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // 启用 JSX 语法支持
          tsx: true, // 启用 TSX 语法支持
        },
      },
    },
  },
]
