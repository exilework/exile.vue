<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
const items = computed(() => [1, 2, 3, 4, 5, 6].map((i) => t(`strip.${i}`)))
</script>

<template>
  <section id="capabilities" class="border-b border-border bg-surface py-8">
    <div class="mx-auto max-w-7xl px-6">
      <div class="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 font-mono text-sm text-muted-foreground">
        <span class="text-xs uppercase tracking-[0.2em] text-foreground/70">{{ t('strip.label') }}</span>
        <span
          v-for="item in items"
          :key="item"
          class="transition-colors hover:text-foreground"
        >{{ item }}</span>
      </div>
    </div>
  </section>
</template>
