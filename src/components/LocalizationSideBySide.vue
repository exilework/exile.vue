<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

const rows = computed(() =>
  [1, 2, 3, 4].map((i) => ({
    k: t(`loc.diff.${i}.k`),
    a: t(`loc.diff.${i}.a`),
    b: t(`loc.diff.${i}.b`),
  })),
)

const cols = computed(() => [
  { lab: t('loc.col.original'), tag: 'JA · source', side: 'a' as const, accent: 'var(--brand-purple)' },
  { lab: t('loc.col.localized'), tag: 'EN · ES · PT-BR', side: 'b' as const, accent: 'var(--brand-green)' },
])
</script>

<template>
  <div class="relative h-full w-full bg-card">
    <div class="absolute inset-0 dot-bg opacity-30" />
    <div class="relative grid h-full grid-cols-2 gap-3 p-5">
      <div
        v-for="col in cols"
        :key="col.lab"
        class="flex h-full flex-col rounded-lg border border-border bg-background"
      >
        <div class="flex items-center justify-between border-b border-border px-3 py-2">
          <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{{ col.lab }}</span>
          <span class="font-mono text-[10px]" :style="{ color: col.accent }">{{ col.tag }}</span>
        </div>
        <div class="flex-1 space-y-2 p-3">
          <div
            v-for="row in rows"
            :key="row.k"
            class="rounded-md border border-border bg-surface p-2.5"
          >
            <div class="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{{ row.k }}</div>
            <div class="mt-1 truncate text-sm text-foreground">
              {{ col.side === 'a' ? row.a : row.b }}
            </div>
          </div>
          <div class="mt-3 flex items-center justify-between rounded-md border border-dashed border-border px-2.5 py-2 font-mono text-[10px] text-muted-foreground">
            <span>QA · {{ col.side === 'a' ? 'source' : 'linguistic + UI' }}</span>
            <span class="text-brand-green">●</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
