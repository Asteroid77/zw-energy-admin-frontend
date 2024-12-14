import { usePreset, updatePreset } from '@primevue/themes'

/**
 * 应用主题
 * @param preset 主题配置
 * @see https://primevue.org/theming/styled/
 */
export function useTheme(preset: Record<string, string>): void {
  usePreset(preset)
}

/**
 * 局部更新主题
 * @param preset 主题配置
 * @description 与useTheme不同的是，这里传入的preset与主配置直接merge而非定义整个主题
 * @see https://primevue.org/theming/styled/
 */
export function updateTheme(preset: Record<string, string>): void {
  updatePreset(preset)
}
