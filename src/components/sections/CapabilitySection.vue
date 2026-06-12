<script setup lang="ts">
import Reveal from '@/components/Reveal.vue'
import CapabilityEcosystem from '@/components/proof/CapabilityEcosystem.vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <section id="ecosystem" class="border-b border-border bg-surface py-28">
    <div class="mx-auto max-w-7xl px-6">
      <div class="max-w-3xl">
        <Reveal>
          <div class="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span class="h-px w-6 bg-foreground/40" />
            {{ t('eco.kicker') }}
          </div>
        </Reveal>
        <Reveal :delay="80">
          <h2 class="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl">{{ t('eco.title') }}</h2>
        </Reveal>
        <Reveal :delay="160">
          <p class="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{{ t('eco.body') }}</p>
        </Reveal>
      </div>
      <Reveal :delay="120">
        <div class="mt-14">
          <CapabilityEcosystem />
        </div>
      </Reveal>
      <p class="mt-8 max-w-2xl text-sm text-muted-foreground">{{ t('eco.foot') }}</p>
    </div>
  </section>
</template>
