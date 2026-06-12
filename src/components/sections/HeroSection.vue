<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Reveal from '@/components/Reveal.vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

const tick = ref(0)
let timer: ReturnType<typeof setInterval>

onMounted(() => {
  timer = setInterval(() => { tick.value++ }, 1400)
})
onUnmounted(() => clearInterval(timer))

const shards = [
  { id: 'eu-west-1', region: 'EU · Frankfurt', base: 1284, hz: 30, p: 42 },
  { id: 'na-east-2', region: 'NA · Ashburn',   base: 962,  hz: 30, p: 51 },
  { id: 'sa-east-1', region: 'SA · São Paulo', base: 731,  hz: 20, p: 68 },
]

function players(i: number, base: number) {
  return base + ((tick.value * (i + 3)) % 47)
}
function ping(i: number, p: number) {
  return p + ((tick.value + i) % 7) - 3
}
</script>

<template>
  <section class="relative overflow-hidden border-b border-border">
    <div class="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
    <div class="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.05fr_1fr] lg:py-32">
      <div class="flex flex-col justify-center">
        <Reveal>
          <div class="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground">
            <span class="h-1.5 w-1.5 animate-blink rounded-full bg-brand-green" />
            {{ t('hero.badge') }}
          </div>
        </Reveal>
        <Reveal :delay="80">
          <h1 class="mt-6 text-balance text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            {{ t('hero.title.a') }}{{ ' ' }}
            <span class="relative md:whitespace-nowrap">
              {{ t('hero.title.b') }}
              <svg viewBox="0 0 200 8" class="absolute -bottom-2 left-0 w-full" preserveAspectRatio="none">
                <path d="M0 4 Q 50 0, 100 4 T 200 4" stroke="var(--brand-blue)" stroke-width="2" fill="none" />
              </svg>
            </span>
          </h1>
        </Reveal>
        <Reveal :delay="160">
          <p class="mt-7 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground">{{ t('hero.body') }}</p>
        </Reveal>
        <Reveal :delay="240">
          <div class="mt-9 flex flex-wrap gap-3">
            <a href="#contact" class="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5">
              {{ t('hero.cta.primary') }}
              <span aria-hidden="true">→</span>
            </a>
            <a href="#capabilities" class="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface">
              {{ t('hero.cta.secondary') }}
            </a>
          </div>
        </Reveal>
        <Reveal :delay="320">
          <div class="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8 text-sm">
            <div>
              <div class="text-2xl font-semibold tracking-tight">{{ t('hero.metric.1.v') }}</div>
              <div class="mt-1 text-xs text-muted-foreground">{{ t('hero.metric.1.l') }}</div>
            </div>
            <div>
              <div class="text-2xl font-semibold tracking-tight">{{ t('hero.metric.2.v') }}</div>
              <div class="mt-1 text-xs text-muted-foreground">{{ t('hero.metric.2.l') }}</div>
            </div>
            <div>
              <div class="text-2xl font-semibold tracking-tight">{{ t('hero.metric.3.v') }}</div>
              <div class="mt-1 text-xs text-muted-foreground">{{ t('hero.metric.3.l') }}</div>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal :delay="120" class="flex items-center justify-center lg:justify-end">
        <div class="relative w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
          <div class="flex items-center justify-between border-b border-border px-4 py-2.5">
            <div class="flex items-center gap-2">
              <span class="h-1.5 w-1.5 animate-blink rounded-full bg-brand-green" />
              <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">live · world telemetry</span>
            </div>
            <div class="font-mono text-[10px] text-muted-foreground">exile.work</div>
          </div>
          <div class="relative aspect-[5/4]">
            <video
              class="absolute inset-0 h-full w-full object-cover"
              src="/bg-engineering.webm"
              autoplay muted loop playsinline
            />
            <div class="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
            <div class="pointer-events-none absolute inset-0">
              <div class="absolute left-3 top-3 flex flex-col gap-2 md:left-4 md:top-4">
                <div
                  v-for="(s, i) in shards"
                  :key="s.id"
                  class="rounded-md border border-background/25 bg-ink/65 px-2.5 py-1.5 font-mono text-[10px] text-background/90 shadow-sm backdrop-blur-md"
                >
                  <div class="flex items-center gap-2">
                    <span class="h-1.5 w-1.5 animate-blink rounded-full bg-brand-green" />
                    <span class="font-semibold">{{ s.id }}</span>
                    <span class="text-background/55">{{ s.region }}</span>
                  </div>
                  <div class="mt-1 flex items-center gap-3 text-background/80">
                    <span><span class="text-background/50">tick </span><span :style="{ color: 'var(--brand-blue)' }">{{ s.hz }}Hz</span></span>
                    <span><span class="text-background/50">players </span>{{ players(i, s.base).toLocaleString() }}</span>
                    <span><span class="text-background/50">p95 </span>{{ ping(i, s.p) }}ms</span>
                  </div>
                </div>
              </div>
              <div class="absolute bottom-3 right-3 rounded-md border border-background/25 bg-ink/65 px-2.5 py-1.5 text-right font-mono text-[10px] text-background/85 backdrop-blur-md md:bottom-4 md:right-4">
                <div class="text-[9px] uppercase tracking-[0.2em] text-background/55">connected shards</div>
                <div class="mt-1 flex items-center justify-end gap-2">
                  <span class="text-sm font-semibold text-background">{{ shards.length }}/3</span>
                  <span :style="{ color: 'var(--brand-green)' }">online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
</template>
