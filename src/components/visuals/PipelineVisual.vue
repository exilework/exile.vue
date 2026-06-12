<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const step = ref(0)
const steps = ['build', 'test', 'package', 'deploy', 'verify']
let timer: ReturnType<typeof setInterval>

onMounted(() => {
  timer = setInterval(() => {
    step.value = (step.value + 1) % steps.length
  }, 1200)
})

onUnmounted(() => clearInterval(timer))

function isDone(i: number) {
  return i < step.value || step.value === 0
}
</script>

<template>
  <div class="relative h-full w-full overflow-hidden rounded-xl border border-border bg-card p-5">
    <div class="mb-4 flex items-center justify-between">
      <span class="font-mono text-xs text-muted-foreground">pipeline · main</span>
      <span class="font-mono text-xs text-brand-green">passing</span>
    </div>
    <div class="space-y-2">
      <div
        v-for="(s, i) in steps"
        :key="s"
        class="flex items-center gap-3 font-mono text-xs"
      >
        <div
          class="flex h-4 w-4 items-center justify-center rounded-sm border transition-colors"
          :style="{
            borderColor: i === step ? 'var(--brand-blue)' : 'var(--border)',
            background: isDone(i) && i !== step ? 'color-mix(in oklch, var(--brand-green) 20%, transparent)' : 'transparent',
          }"
        >
          <svg v-if="isDone(i) && i !== step" viewBox="0 0 12 12" class="h-2.5 w-2.5">
            <path d="M2 6 L5 9 L10 3" stroke="var(--brand-green)" stroke-width="1.5" fill="none" />
          </svg>
          <div v-else-if="i === step" class="h-1.5 w-1.5 animate-blink rounded-full bg-brand-blue" />
        </div>
        <span class="text-foreground">$ exile {{ s }}</span>
        <span class="ml-auto text-muted-foreground">
          {{ i === step ? 'running…' : isDone(i) ? '0.4s' : '—' }}
        </span>
      </div>
    </div>
    <div class="mt-4 rounded-md border border-border bg-surface p-3 font-mono text-[11px] text-muted-foreground">
      <span class="text-brand-purple">→</span> terraform apply · 12 resources, 0 destroy
    </div>
  </div>
</template>
