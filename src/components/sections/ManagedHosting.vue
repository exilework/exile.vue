<script setup lang="ts">
import { computed } from 'vue'
import Reveal from '@/components/Reveal.vue'
import DashboardVisual from '@/components/visuals/DashboardVisual.vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
const features = computed(() => [1, 2, 3, 4, 5, 6].map((i) => t(`hosting.feat.${i}`)))
</script>

<template>
  <section id="hosting" class="border-b border-border py-28">
    <div class="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.1fr]">
      <Reveal>
        <div>
          <div class="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span class="h-px w-6 bg-foreground/40" />
            {{ t('hosting.kicker') }}
          </div>
          <h2 class="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">{{ t('hosting.title') }}</h2>
          <p class="mt-6 max-w-lg leading-relaxed text-muted-foreground">{{ t('hosting.body') }}</p>
          <ul class="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <li v-for="f in features" :key="f" class="flex items-start gap-2.5 text-sm">
              <svg viewBox="0 0 16 16" class="mt-1 h-3.5 w-3.5 flex-none">
                <path d="M3 8 L7 12 L13 4" stroke="var(--brand-green)" stroke-width="2" fill="none" />
              </svg>
              <span class="text-foreground/90">{{ f }}</span>
            </li>
          </ul>
        </div>
      </Reveal>
      <Reveal :delay="120" class="aspect-[5/4] lg:aspect-auto">
        <DashboardVisual />
      </Reveal>
    </div>
  </section>
</template>
