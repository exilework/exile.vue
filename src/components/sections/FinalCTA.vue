<script setup lang="ts">
import Reveal from '@/components/Reveal.vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <section id="contact" class="relative overflow-hidden py-32">
    <div class="absolute inset-0 dot-bg opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
    <div class="relative mx-auto max-w-3xl px-6 text-center">
      <Reveal>
        <div class="inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
          <span class="h-px w-6 bg-foreground/40" />
          {{ t('cta.kicker') }}
        </div>
      </Reveal>
      <Reveal :delay="80">
        <h2 class="mt-5 text-balance text-5xl font-semibold tracking-tight md:text-6xl">{{ t('cta.title') }}</h2>
      </Reveal>
      <Reveal :delay="160">
        <p class="mt-6 text-lg text-muted-foreground">{{ t('cta.body') }}</p>
      </Reveal>
      <Reveal :delay="240">
        <a
          href="mailto:hello@exile.work"
          class="mt-10 inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
        >
          {{ t('cta.button') }}
          <span aria-hidden="true">→</span>
        </a>
      </Reveal>
    </div>
  </section>
</template>
