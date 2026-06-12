<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(
  defineProps<{
    delay?: number
    as?: 'div' | 'section' | 'h2' | 'p' | 'li'
  }>(),
  { delay: 0, as: 'div' },
)

const el = ref<HTMLElement | null>(null)
const visible = ref(false)
let io: IntersectionObserver | null = null

onMounted(() => {
  if (!el.value) return
  io = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (entry?.isIntersecting) {
        visible.value = true
        io?.disconnect()
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
  )
  io.observe(el.value)
})

onUnmounted(() => io?.disconnect())
</script>

<template>
  <component
    :is="props.as"
    ref="el"
    :style="{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${props.delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${props.delay}ms`,
    }"
  >
    <slot />
  </component>
</template>
