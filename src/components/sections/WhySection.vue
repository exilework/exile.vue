<script setup lang="ts">
import { computed } from 'vue'
import Reveal from '@/components/Reveal.vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

const pillars = computed(() =>
  [1, 2, 3, 4, 5].map((i, idx) => ({
    name: t(`why.pillar.${i}.k`),
    body: t(`why.pillar.${i}.v`),
    color: ['var(--brand-blue)', 'var(--brand-purple)', 'var(--brand-green)', 'var(--brand-blue)', 'var(--brand-purple)'][idx],
  })),
)
</script>

<template>
  <section id="why" class="border-b border-border bg-surface py-28">
    <div class="mx-auto max-w-7xl px-6">
      <div class="max-w-3xl">
        <Reveal>
          <div class="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span class="h-px w-6 bg-foreground/40" />
            {{ t('why.kicker') }}
          </div>
        </Reveal>
        <Reveal :delay="80">
          <h2 class="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl">{{ t('why.title') }}</h2>
        </Reveal>
        <Reveal :delay="160">
          <p class="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{{ t('why.body') }}</p>
        </Reveal>
      </div>
      <div class="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3 lg:grid-cols-5">
        <Reveal
          v-for="(p, i) in pillars"
          :key="p.name"
          :delay="i * 60"
        >
          <div class="h-full bg-background p-6 transition-colors hover:bg-surface">
            <div class="flex h-8 w-8 items-center justify-center rounded-md border border-border" :style="{ color: p.color }">
              <div class="h-2 w-2 rounded-sm" :style="{ background: p.color }" />
            </div>
            <div class="mt-5 text-sm font-semibold">{{ p.name }}</div>
            <p class="mt-2 text-sm leading-relaxed text-muted-foreground">{{ p.body }}</p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
</template>
