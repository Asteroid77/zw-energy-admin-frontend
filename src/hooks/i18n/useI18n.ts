import { type App, type Ref, ref } from 'vue'
import { createI18n } from 'vue-i18n'
import en from '@/constant/i18n/en.ts'
import zhCN from '@/constant/i18n/zh-CN.ts'
import type { I18NInfo } from '@/types/i18n'
export const language: Ref<NavigatorLanguage['language']> = ref(window.navigator.language)
/**
 * 初始化I18N
 * @see https://vue-i18n.intlify.dev/guide/advanced/typescript
 * @param {App<Element>} app
 */
export const useI18n = (app: App<Element>): void => {
  const i18n = createI18n<[I18NInfo], 'zh-CN' | 'en'>({
    legacy: false,
    locale: language.value,
    fallbackLocale: 'zh-CN',
    messages: {
      'zh-CN': zhCN,
      en: en,
    },
  })
  app.use(i18n)
}
