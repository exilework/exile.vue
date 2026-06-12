import { describe, it, expect } from 'vitest'
import { dict, locales } from '@/i18n/translations'

describe('translations', () => {
  it('has all required locales', () => {
    const codes = locales.map((l) => l.code)
    expect(codes).toContain('en')
    expect(codes).toContain('pt')
    expect(codes).toContain('es')
  })

  it('English dictionary has all navigation keys', () => {
    const en = dict.en
    expect(en['nav.cta']).toBeTruthy()
    expect(en['nav.capabilities']).toBeTruthy()
    expect(en['nav.multiplayer']).toBeTruthy()
  })

  it('Portuguese dictionary has hero keys', () => {
    const pt = dict.pt
    expect(pt['hero.title.a']).toBeTruthy()
    expect(pt['hero.body']).toBeTruthy()
    expect(pt['hero.cta.primary']).toBeTruthy()
  })

  it('Spanish dictionary has CTA keys', () => {
    const es = dict.es
    expect(es['cta.title']).toBeTruthy()
    expect(es['cta.button']).toBeTruthy()
  })

  it('all enabled locales have the nav.cta key', () => {
    const enabled = locales.filter((l) => l.enabled)
    for (const l of enabled) {
      expect(dict[l.code]['nav.cta']).toBeTruthy()
    }
  })

  it('multiplayer pillars 1-6 are present in English', () => {
    for (let i = 1; i <= 6; i++) {
      expect(dict.en[`mp.pillar.${i}.k`]).toBeTruthy()
      expect(dict.en[`mp.pillar.${i}.v`]).toBeTruthy()
    }
  })

  it('hosting features 1-6 are present in all enabled locales', () => {
    const enabled = locales.filter((l) => l.enabled)
    for (const l of enabled) {
      for (let i = 1; i <= 6; i++) {
        expect(dict[l.code][`hosting.feat.${i}`]).toBeTruthy()
      }
    }
  })
})
