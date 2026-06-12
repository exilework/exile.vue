import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = mount(App)
    expect(wrapper.exists()).toBe(true)
  })

  it('contains the brand name', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Exile.work')
  })

  it('has a sticky nav header', () => {
    const wrapper = mount(App)
    const header = wrapper.find('header')
    expect(header.exists()).toBe(true)
    expect(header.classes()).toContain('sticky')
  })

  it('has at least one contact CTA link', () => {
    const wrapper = mount(App)
    const ctaLinks = wrapper.findAll('a[href="#contact"]')
    expect(ctaLinks.length).toBeGreaterThan(0)
  })

  it('renders hero title parts', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Persistent worlds')
    expect(wrapper.text()).toContain('Built to last')
  })

  it('renders all showcase sections', () => {
    const wrapper = mount(App)
    expect(wrapper.find('#engineering').exists()).toBe(true)
    expect(wrapper.find('#infrastructure').exists()).toBe(true)
    expect(wrapper.find('#multiplayer').exists()).toBe(true)
    expect(wrapper.find('#localization').exists()).toBe(true)
    expect(wrapper.find('#mentorship').exists()).toBe(true)
  })

  it('renders the footer with copyright', () => {
    const wrapper = mount(App)
    const footer = wrapper.find('footer')
    expect(footer.exists()).toBe(true)
    expect(footer.text()).toContain('Exile.work')
  })
})
