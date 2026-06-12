import { describe, it, expect, beforeEach } from 'vitest'
import { defineComponent, h } from 'vue'
import { mount } from '@vue/test-utils'
import { provideI18n, useI18n } from '@/composables/useI18n'

function makeTestApp(childFn: () => unknown) {
  const Child = defineComponent({
    setup() {
      const ctx = useI18n()
      return () => h('div', String(childFn.call(ctx)))
    },
  })
  return defineComponent({
    setup() {
      provideI18n()
    },
    render() {
      return h(Child)
    },
  })
}

describe('useI18n', () => {
  it('provides a t() function that resolves keys', () => {
    const App = makeTestApp(function (this: ReturnType<typeof useI18n>) {
      return this.t('nav.cta')
    })
    const wrapper = mount(App)
    expect(wrapper.text()).toBe('Schedule a call')
  })

  it('falls back to English for unknown locale keys', () => {
    const App = makeTestApp(function (this: ReturnType<typeof useI18n>) {
      return this.t('cta.title')
    })
    const wrapper = mount(App)
    expect(wrapper.text()).toBe('Build it once. Operate it for years.')
  })

  it('returns the key itself when not found', () => {
    const App = makeTestApp(function (this: ReturnType<typeof useI18n>) {
      return this.t('nonexistent.key')
    })
    const wrapper = mount(App)
    expect(wrapper.text()).toBe('nonexistent.key')
  })

  it('exposes locales list', () => {
    const App = makeTestApp(function (this: ReturnType<typeof useI18n>) {
      return this.locales.length
    })
    const wrapper = mount(App)
    expect(Number(wrapper.text())).toBeGreaterThan(0)
  })

  it('starts in English by default', () => {
    const App = makeTestApp(function (this: ReturnType<typeof useI18n>) {
      return this.locale
    })
    const wrapper = mount(App)
    expect(wrapper.text()).toBe('en')
  })
})
