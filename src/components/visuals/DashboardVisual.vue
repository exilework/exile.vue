<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const bars = ref<number[]>(Array.from({ length: 28 }, () => 30 + Math.random() * 60))
let timer: ReturnType<typeof setInterval>

onMounted(() => {
  timer = setInterval(() => {
    bars.value = [...bars.value.slice(1), 20 + Math.random() * 80]
  }, 500)
})

onUnmounted(() => clearInterval(timer))
</script>

<template>
  <div class="relative h-full w-full overflow-hidden rounded-xl border border-border bg-card p-5">
    <div class="mb-4 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div class="h-2 w-2 animate-blink rounded-full bg-brand-green" />
        <span class="font-mono text-xs text-muted-foreground">requests · prod</span>
      </div>
      <span class="font-mono text-xs text-foreground">99.98%</span>
    </div>
    <div class="flex h-32 items-end gap-1">
      <div
        v-for="(h, i) in bars"
        :key="i"
        class="flex-1 rounded-sm transition-all duration-500"
        :style="{
          height: `${h}%`,
          background:
            i === bars.length - 1
              ? 'var(--brand-blue)'
              : 'color-mix(in oklch, var(--brand-blue) 25%, transparent)',
        }"
      />
    </div>
    <div class="mt-4 grid grid-cols-3 gap-3 font-mono text-xs">
      <div class="rounded-md border border-border bg-surface px-3 py-2">
        <div class="text-[10px] uppercase tracking-wider text-muted-foreground">p50</div>
        <div class="text-sm text-foreground">42ms</div>
      </div>
      <div class="rounded-md border border-border bg-surface px-3 py-2">
        <div class="text-[10px] uppercase tracking-wider text-muted-foreground">p99</div>
        <div class="text-sm text-foreground">180ms</div>
      </div>
      <div class="rounded-md border border-border bg-surface px-3 py-2">
        <div class="text-[10px] uppercase tracking-wider text-muted-foreground">rps</div>
        <div class="text-sm text-foreground">12.4k</div>
      </div>
    </div>
  </div>
</template>
