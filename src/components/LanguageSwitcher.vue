<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '@/composables/useI18n'
import type { Locale } from '@/i18n/translations'

const i18n = useI18n()
const { setLocale, locales } = i18n
const open = ref(false)
const containerRef = ref<HTMLElement | null>(null)

const current = () => locales.find((l) => l.code === i18n.locale) ?? locales[0]!

function onClickOutside(e: MouseEvent) {
  if (!containerRef.value?.contains(e.target as Node)) open.value = false
}

onMounted(() => document.addEventListener('mousedown', onClickOutside))
onUnmounted(() => document.removeEventListener('mousedown', onClickOutside))

function pick(code: Locale, enabled: boolean) {
  if (!enabled) return
  setLocale(code)
  open.value = false
}
</script>

<template>
  <div ref="containerRef" class="relative">
    <button
      type="button"
      :aria-expanded="open"
      aria-haspopup="listbox"
      class="inline-flex items-center gap-2 rounded-md border border-border bg-background px-2.5 py-1.5 text-xs font-mono text-foreground/80 transition-colors hover:bg-surface"
      @click="open = !open"
    >
      <svg viewBox="0 0 16 16" class="h-3.5 w-3.5" aria-hidden="true">
        <circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" stroke-width="1.2" />
        <ellipse cx="8" cy="8" rx="3" ry="6.5" fill="none" stroke="currentColor" stroke-width="1.2" />
        <path d="M1.5 8h13" stroke="currentColor" stroke-width="1.2" />
      </svg>
      <span class="tracking-wider">{{ current().flag }}</span>
      <span class="hidden text-foreground sm:inline">{{ current().native }}</span>
      <span aria-hidden="true" class="text-muted-foreground">▾</span>
    </button>

    <div
      v-if="open"
      role="listbox"
      class="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-md border border-border bg-background shadow-lg"
    >
      <div class="border-b border-border bg-surface px-3 py-2 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
        Language · We localize for a living
      </div>
      <button
        v-for="l in locales"
        :key="l.code"
        role="option"
        :aria-selected="l.code === i18n.locale"
        :disabled="!l.enabled"
        class="flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm transition-colors"
        :class="[
          l.code === i18n.locale ? 'bg-surface text-foreground' : 'text-foreground/80 hover:bg-surface',
          !l.enabled ? 'cursor-not-allowed opacity-45' : '',
        ]"
        @click="pick(l.code, l.enabled)"
      >
        <span class="flex items-center gap-3">
          <span class="font-mono text-[11px] tracking-wider text-muted-foreground">{{ l.flag }}</span>
          <span>{{ l.native }}</span>
        </span>
        <span v-if="l.enabled && l.code === i18n.locale" class="text-brand-green">●</span>
        <span v-else-if="!l.enabled" class="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">soon</span>
      </button>
    </div>
  </div>
</template>
