<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const step = ref(0)
const stages = [
  { t: 'Specification', d: 'Scope, mechanics, scope cuts.' },
  { t: 'AI Workflow', d: 'Prompts, tooling, review loops.' },
  { t: 'Assets', d: 'Art, audio, data pipelines.' },
  { t: 'Game', d: 'Build, playtest, iterate.' },
  { t: 'Publishing', d: 'Steam · Itch · App Store · Google Play · Nintendo.' },
]
let timer: ReturnType<typeof setInterval>

onMounted(() => {
  timer = setInterval(() => {
    step.value = (step.value + 1) % stages.length
  }, 1400)
})
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <div class="relative h-full w-full overflow-hidden rounded-xl border border-border bg-card p-5">
    <div class="mb-5 flex items-center justify-between">
      <span class="font-mono text-xs text-muted-foreground">spec → ship</span>
      <span class="font-mono text-xs text-brand-green">cycle {{ Math.floor(step / stages.length) + 1 }}</span>
    </div>
    <div class="space-y-2.5">
      <div
        v-for="(s, i) in stages"
        :key="s.t"
        class="flex items-start gap-3 rounded-md border border-border px-3 py-2.5 transition-colors"
        :style="{ background: i === step ? 'var(--surface)' : 'transparent' }"
      >
        <div
          class="mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-sm border"
          :style="{
            borderColor: i === step ? 'var(--brand-blue)' : 'var(--border)',
            background: i < step ? 'color-mix(in oklch, var(--brand-green) 22%, transparent)' : 'transparent',
          }"
        >
          <svg v-if="i < step" viewBox="0 0 12 12" class="h-2.5 w-2.5">
            <path d="M2 6 L5 9 L10 3" stroke="var(--brand-green)" stroke-width="1.5" fill="none" />
          </svg>
          <div v-else-if="i === step" class="h-1.5 w-1.5 animate-blink rounded-full bg-brand-blue" />
        </div>
        <div class="min-w-0 flex-1">
          <div class="font-mono text-xs text-foreground">{{ s.t }}</div>
          <div class="font-mono text-[11px] text-muted-foreground">{{ s.d }}</div>
        </div>
        <span class="font-mono text-[10px] text-muted-foreground">0{{ i + 1 }}</span>
      </div>
    </div>
  </div>
</template>
