<script setup lang="ts">
import { computed } from 'vue'
import Reveal from '@/components/Reveal.vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
const pillars = computed(() =>
  [1, 2, 3, 4, 5, 6].map((i) => ({ k: t(`mp.pillar.${i}.k`), v: t(`mp.pillar.${i}.v`) })),
)
</script>

<template>
  <section class="border-b border-background/15 bg-ink py-20 text-background">
    <div class="mx-auto max-w-7xl px-6">
      <div class="grid gap-px overflow-hidden rounded-xl border border-background/15 bg-background/15 md:grid-cols-2 lg:grid-cols-3">
        <Reveal
          v-for="(p, i) in pillars"
          :key="p.k"
          :delay="i * 50"
        >
          <div class="h-full bg-ink p-6">
            <div class="text-sm font-semibold">{{ p.k }}</div>
            <p class="mt-2 text-sm leading-relaxed text-background/65">{{ p.v }}</p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
</template>
