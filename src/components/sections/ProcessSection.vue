<script setup lang="ts">
import { computed } from 'vue'
import Reveal from '@/components/Reveal.vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
const steps = computed(() =>
  [1, 2, 3, 4].map((n) => ({ n: `0${n}`, t: t(`process.${n}.t`), b: t(`process.${n}.b`) })),
)
</script>

<template>
  <section id="process" class="border-b border-border py-28">
    <div class="mx-auto max-w-7xl px-6">
      <div class="max-w-3xl">
        <Reveal>
          <div class="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span class="h-px w-6 bg-foreground/40" />
            {{ t('process.kicker') }}
          </div>
        </Reveal>
        <Reveal :delay="80">
          <h2 class="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl">{{ t('process.title') }}</h2>
        </Reveal>
      </div>
      <div class="relative mt-16">
        <div class="absolute left-0 right-0 top-7 hidden h-px bg-border md:block" />
        <div class="grid gap-10 md:grid-cols-4">
          <Reveal
            v-for="(s, i) in steps"
            :key="s.n"
            :delay="i * 100"
          >
            <div class="relative">
              <div class="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background font-mono text-sm">
                {{ s.n }}
                <div
                  class="absolute -inset-1 animate-pulse-ring rounded-full border opacity-0"
                  :style="{ borderColor: 'var(--brand-blue)', animationDelay: `${i * 0.4}s` }"
                />
              </div>
              <div class="mt-6 text-lg font-semibold">{{ s.t }}</div>
              <p class="mt-2 text-sm leading-relaxed text-muted-foreground">{{ s.b }}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
</template>
