'use client'
import { createI18nClient } from 'next-international/client'

export const {
  useI18n,
  useScopedI18n,
  useChangeLocale,
  useCurrentLocale,
  I18nProviderClient,
} = createI18nClient({
  ja: () => import('./ja'),
  en: () => import('./en'),
})
