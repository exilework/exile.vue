import { inject, provide, reactive, computed, type InjectionKey } from 'vue'
import { dict, locales, type Locale } from '@/i18n/translations'

const STORAGE_KEY = 'exile.work.locale'

type I18nContext = {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (key: string) => string
  locales: typeof locales
}

const I18nKey: InjectionKey<I18nContext> = Symbol('i18n')

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  const saved = localStorage.getItem(STORAGE_KEY) as Locale | null
  if (saved && dict[saved]) return saved
  const nav = navigator.language.toLowerCase()
  if (nav.startsWith('pt')) return 'pt'
  if (nav.startsWith('es')) return 'es'
  return 'en'
}

export function provideI18n() {
  const state = reactive({ locale: detectLocale() as Locale })

  function setLocale(l: Locale) {
    state.locale = l
    try { localStorage.setItem(STORAGE_KEY, l) } catch {}
    if (typeof document !== 'undefined') {
      document.documentElement.lang = l === 'pt' ? 'pt-BR' : l
    }
  }

  const t = computed(() => {
    const table = dict[state.locale] ?? dict.en
    return (key: string) => table[key] ?? dict.en[key] ?? key
  })

  const ctx: I18nContext = {
    get locale() { return state.locale },
    setLocale,
    get t() { return t.value },
    locales,
  }

  provide(I18nKey, ctx)
  return ctx
}

export function useI18n() {
  const ctx = inject(I18nKey)
  if (!ctx) throw new Error('useI18n must be used inside a component with provideI18n()')
  return ctx
}
