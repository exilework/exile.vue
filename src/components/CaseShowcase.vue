<script setup lang="ts">
import Reveal from '@/components/Reveal.vue'
import { useI18n } from '@/composables/useI18n'

export type Annotation = { label: string; value: string; accent?: 'blue' | 'green' | 'purple' }

const props = withDefaults(
  defineProps<{
    id?: string
    kicker: string
    title: string
    body: string
    tags?: string[]
    caseTag?: string
    caseTitle?: string
    caseSub?: string
    annotations?: Annotation[]
    layout?: 'left' | 'right' | 'background'
    tone?: 'light' | 'dark'
    videoSrc?: string
    imageSrc?: string
    ctaHref?: string
    ctaLabel?: string
  }>(),
  { layout: 'right', tone: 'light' },
)

const { t } = useI18n()

const accentVar: Record<string, string> = {
  blue: 'var(--brand-blue)',
  green: 'var(--brand-green)',
  purple: 'var(--brand-purple)',
}
</script>

<template>
  <!-- background layout -->
  <section
    v-if="props.layout === 'background'"
    :id="props.id"
    class="relative overflow-hidden border-b border-background/15 bg-ink py-28 text-background"
  >
    <div class="absolute inset-0">
      <video
        v-if="props.videoSrc"
        class="h-full w-full object-cover"
        :src="props.videoSrc"
        autoplay muted loop playsinline
      />
      <div v-else class="absolute inset-0 flex items-center justify-center bg-ink/[0.04]">
        <slot />
      </div>
      <div class="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
      <div class="absolute inset-0 grid-bg opacity-[0.06]" />
    </div>

    <div class="relative mx-auto max-w-7xl px-6">
      <div class="max-w-2xl">
        <Reveal>
          <div class="flex w-fit max-w-full items-center gap-2 overflow-hidden font-mono text-xs uppercase tracking-[0.22em] text-background/60">
            <span class="h-px w-6 shrink-0 bg-background/40" />
            <span class="truncate">{{ props.kicker }}</span>
          </div>
        </Reveal>
        <Reveal :delay="80">
          <h2 class="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">{{ props.title }}</h2>
        </Reveal>
        <Reveal :delay="160">
          <p class="mt-6 text-base leading-relaxed text-background/75">{{ props.body }}</p>
        </Reveal>
        <Reveal v-if="props.ctaHref && props.ctaLabel" :delay="240">
          <a :href="props.ctaHref" class="mt-8 inline-flex items-center gap-2 rounded-md bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5">
            {{ props.ctaLabel }} <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>

      <Reveal v-if="props.caseTag || props.caseTitle || props.annotations" :delay="200">
        <div class="mt-14 max-w-md rounded-xl border border-background/15 bg-background/[0.06] p-5 backdrop-blur-md">
          <div v-if="props.caseTag" class="font-mono text-[10px] uppercase tracking-[0.2em] text-background/55">{{ props.caseTag }}</div>
          <div v-if="props.caseTitle" class="mt-2 text-base font-semibold">{{ props.caseTitle }}</div>
          <div v-if="props.caseSub" class="mt-1 font-mono text-[11px] text-background/60">{{ props.caseSub }}</div>
          <div v-if="props.annotations?.length" class="mt-4 grid grid-cols-3 gap-3 border-t border-background/15 pt-4">
            <div v-for="a in props.annotations" :key="a.label">
              <div class="font-mono text-[10px] uppercase tracking-wider text-background/55">{{ a.label }}</div>
              <div class="mt-1 text-sm font-semibold" :style="a.accent ? { color: accentVar[a.accent] } : {}">{{ a.value }}</div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>

  <!-- side layout (left/right) -->
  <section
    v-else
    :id="props.id"
    :class="[
      'relative border-b py-24 md:py-28',
      props.tone === 'dark' ? 'border-background/15 bg-ink text-background' : 'border-border bg-background',
    ]"
  >
    <div class="mx-auto max-w-7xl px-6">
      <div
        class="grid items-center gap-12 lg:grid-cols-2"
        :class="props.layout === 'left' ? 'lg:[&>*:first-child]:order-2' : ''"
      >
        <Reveal class="min-w-0">
          <div class="min-w-0">
            <div
              :class="[
                'flex w-fit max-w-full overflow-hidden items-center gap-2 font-mono text-xs uppercase tracking-[0.22em]',
                props.tone === 'dark' ? 'text-background/60' : 'text-muted-foreground',
              ]"
            >
              <span :class="props.tone === 'dark' ? 'h-px w-6 shrink-0 bg-background/40' : 'h-px w-6 shrink-0 bg-foreground/40'" />
              <span class="truncate">{{ props.kicker }}</span>
            </div>
            <h3 class="mt-5 text-balance text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">{{ props.title }}</h3>
            <p
              :class="[
                'mt-6 max-w-xl text-base leading-relaxed',
                props.tone === 'dark' ? 'text-background/70' : 'text-muted-foreground',
              ]"
            >{{ props.body }}</p>
            <ul v-if="props.tags?.length" class="mt-7 flex flex-wrap gap-2">
              <li
                v-for="tag in props.tags"
                :key="tag"
                :class="[
                  'rounded-md border px-2.5 py-1 font-mono text-[11px]',
                  props.tone === 'dark'
                    ? 'border-background/20 bg-background/[0.04] text-background/80'
                    : 'border-border bg-surface text-foreground/80',
                ]"
              >{{ tag }}</li>
            </ul>
            <a
              v-if="props.ctaHref && props.ctaLabel"
              :href="props.ctaHref"
              :class="[
                'mt-8 inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-transform hover:-translate-y-0.5',
                props.tone === 'dark' ? 'bg-background text-foreground' : 'bg-foreground text-background',
              ]"
            >{{ props.ctaLabel }} <span aria-hidden="true">→</span></a>
          </div>
        </Reveal>

        <Reveal :delay="120" class="min-w-0">
          <!-- showcase frame -->
          <div
            :class="[
              'group relative overflow-hidden rounded-2xl border shadow-sm',
              props.tone === 'dark' ? 'border-background/15 bg-background/[0.04]' : 'border-border bg-surface',
            ]"
          >
            <div
              :class="[
                'flex items-center justify-between border-b px-4 py-2.5',
                props.tone === 'dark' ? 'border-background/15' : 'border-border',
              ]"
            >
              <div class="flex min-w-0 items-center gap-2">
                <span class="h-1.5 w-1.5 shrink-0 animate-blink rounded-full bg-brand-green" />
                <span
                  :class="[
                    'truncate font-mono text-[10px] uppercase tracking-[0.2em]',
                    props.tone === 'dark' ? 'text-background/55' : 'text-muted-foreground',
                  ]"
                >{{ props.caseTag ?? `${t('showcase.case')} · ${t('showcase.live')}` }}</span>
              </div>
              <div :class="['shrink-0 font-mono text-[10px]', props.tone === 'dark' ? 'text-background/40' : 'text-muted-foreground']">
                exile.work
              </div>
            </div>

            <div class="relative aspect-[5/4]">
              <video
                v-if="props.videoSrc"
                class="absolute inset-0 h-full w-full object-cover"
                :src="props.videoSrc"
                autoplay muted loop playsinline
              />
              <img
                v-else-if="props.imageSrc"
                :src="props.imageSrc"
                alt=""
                class="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div
                v-else
                class="absolute inset-0 [&>*]:!h-full [&>*]:!w-full [&>*]:!rounded-none [&>*]:!border-0"
              >
                <slot />
              </div>

              <div
                v-if="props.annotations?.length"
                class="pointer-events-none absolute inset-x-3 bottom-3 flex flex-wrap justify-end gap-1.5"
              >
                <div
                  v-for="a in props.annotations"
                  :key="a.label"
                  :class="[
                    'rounded-md border px-2 py-1 font-mono text-[10px] backdrop-blur',
                    props.tone === 'dark'
                      ? 'border-background/20 bg-background/30 text-background/85'
                      : 'border-border bg-background/90 text-foreground/85',
                  ]"
                >
                  <span :class="props.tone === 'dark' ? 'text-background/55' : 'text-muted-foreground'">{{ a.label }} </span>
                  <span :style="a.accent ? { color: accentVar[a.accent] } : {}">{{ a.value }}</span>
                </div>
              </div>
            </div>

            <div
              v-if="props.caseTitle || props.caseSub"
              :class="[
                'flex items-end justify-between gap-4 border-t px-4 py-3',
                props.tone === 'dark' ? 'border-background/15' : 'border-border',
              ]"
            >
              <div class="min-w-0">
                <div v-if="props.caseTitle" class="truncate text-sm font-semibold">{{ props.caseTitle }}</div>
                <div
                  v-if="props.caseSub"
                  :class="[
                    'mt-0.5 truncate font-mono text-[11px]',
                    props.tone === 'dark' ? 'text-background/60' : 'text-muted-foreground',
                  ]"
                >{{ props.caseSub }}</div>
              </div>
              <span
                :class="[
                  'font-mono text-[10px] uppercase tracking-wider',
                  props.tone === 'dark' ? 'text-background/45' : 'text-muted-foreground',
                ]"
              >01 / 01</span>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
</template>
