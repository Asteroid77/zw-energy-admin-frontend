import {
  type Composer,
  type ComposerTranslation,
  createI18n,
  type I18n,
  type I18nOptions,
  useI18n,
  type UseI18nOptions,
} from 'vue-i18n'
import type { I18NComposerTranslation, I18NInfo, I18NLanguage } from '@/types/i18n'
import { ref, type Ref } from 'vue'
import zhCN from '@/constant/i18n/zh-CN.ts'
import en from '@/constant/i18n/en.ts'
import ZhCN from '@/constant/i18n/zh-CN.ts'
export const language: Ref<NavigatorLanguage['language']> = ref(window.navigator.language)
const i18n = createI18n({
  legacy: false,
  locale: language.value,
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': zhCN,
    en: en,
  },
})
/**
 * 获取i18n实例
 * @return {I18NComposerTranslation}
 */
export function useI18N(): I18NComposerTranslation {
  return i18n.global.t
}
