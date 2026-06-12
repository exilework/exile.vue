<script setup lang="ts">
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <a href="#" class="flex items-center gap-2">
        <div
          class="flex h-6 w-6 items-center justify-center rounded-[6px] bg-brand-blue font-mono text-[13px] font-bold text-black"
          style="WebkitTextStroke: '1px white'"
          aria-hidden="true"
        >
          <span class="translate-y-[1px]">|&gt;</span>
        </div>
        <span class="text-[15px] font-semibold tracking-tight">Exile.work</span>
      </a>
      <nav class="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
        <a href="#capabilities" class="transition-colors hover:text-foreground">{{ t('nav.capabilities') }}</a>
        <a href="#multiplayer" class="transition-colors hover:text-foreground">{{ t('nav.multiplayer') }}</a>
        <a href="#infrastructure" class="transition-colors hover:text-foreground">{{ t('nav.infrastructure') }}</a>
        <a href="#localization" class="transition-colors hover:text-foreground">{{ t('nav.localization') }}</a>
        <a href="#mentorship" class="transition-colors hover:text-foreground">{{ t('nav.mentorship') }}</a>
      </nav>
      <div class="flex items-center gap-2">
        <LanguageSwitcher />
        <a
          href="#contact"
          class="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3.5 py-2 text-xs font-medium text-background transition-colors hover:bg-foreground/90"
        >
          {{ t('nav.cta') }}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </header>
</template>
