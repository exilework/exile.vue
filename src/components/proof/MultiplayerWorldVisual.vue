<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const tick = ref(0)
let timer: ReturnType<typeof setInterval>

onMounted(() => {
  timer = setInterval(() => { tick.value++ }, 80)
})
onUnmounted(() => clearInterval(timer))

const shards = [
  { id: 'shard-01', label: 'Northreach', x: 25, y: 28, players: 312, tick: 30, ms: 22, color: 'var(--brand-blue)' },
  { id: 'shard-02', label: 'Ashfen',     x: 75, y: 30, players: 487, tick: 30, ms: 28, color: 'var(--brand-purple)' },
  { id: 'shard-03', label: 'Vael Sound', x: 28, y: 72, players: 204, tick: 20, ms: 41, color: 'var(--brand-green)' },
  { id: 'shard-04', label: 'Karst Reach',x: 74, y: 70, players: 593, tick: 30, ms: 19, color: 'var(--brand-blue)' },
]

const totalPlayers = shards.reduce((a, s) => a + s.players, 0)

const players = computed(() =>
  shards.flatMap((s, si) =>
    Array.from({ length: 6 }).map((_, pi) => {
      const a = (tick.value * 0.02 + pi * 1.05 + si) % (Math.PI * 2)
      const r = 6 + (pi % 3) * 1.5
      return { x: s.x + Math.cos(a) * r, y: s.y + Math.sin(a) * r, c: s.color }
    }),
  ),
)

const stateDelta = computed(() => (8 + (tick.value % 12) / 4).toFixed(1))
</script>

<template>
  <div class="relative aspect-[5/4] w-full overflow-hidden rounded-2xl border border-border bg-surface">
    <div class="absolute inset-0 dot-bg opacity-50" />
    <svg viewBox="0 0 100 100" class="absolute inset-0 h-full w-full" preserveAspectRatio="none">
      <path d="M50 8 L50 92" stroke="var(--border)" stroke-width="0.2" stroke-dasharray="1 1" />
      <path d="M8 50 L92 50" stroke="var(--border)" stroke-width="0.2" stroke-dasharray="1 1" />
      <template v-for="(s, i) in shards" :key="s.id">
        <line
          v-for="t in shards.slice(i + 1)"
          :key="s.id + t.id"
          :x1="s.x" :y1="s.y" :x2="t.x" :y2="t.y"
          stroke="var(--brand-blue)" stroke-width="0.15" stroke-dasharray="0.6 1.2"
          opacity="0.55" class="animate-dash"
        />
      </template>
      <circle v-for="(p, i) in players" :key="i" :cx="p.x" :cy="p.y" r="0.5" :fill="p.c" opacity="0.9" />
      <g v-for="s in shards" :key="s.id + '-node'">
        <circle :cx="s.x" :cy="s.y" r="3.5" fill="var(--background)" :stroke="s.color" stroke-width="0.4" />
        <circle :cx="s.x" :cy="s.y" r="1.2" :fill="s.color" />
      </g>
    </svg>

    <div
      v-for="s in shards"
      :key="s.id + '-label'"
      class="-translate-x-1/2 translate-y-5 absolute rounded-md border border-border bg-background/90 px-2 py-1 font-mono text-[10px] leading-tight backdrop-blur"
      :style="{ left: `${s.x}%`, top: `${s.y}%` }"
    >
      <div class="text-foreground">{{ s.label }}</div>
      <div class="text-muted-foreground">{{ s.players }} online · {{ s.ms }}ms · {{ s.tick }}hz</div>
    </div>

    <div class="absolute left-4 top-4 flex items-center gap-2 rounded-md border border-border bg-background/85 px-2.5 py-1.5 font-mono text-[11px] backdrop-blur">
      <span class="h-1.5 w-1.5 animate-blink rounded-full bg-brand-green" />
      world · persistent · uptime 318d
    </div>
    <div class="absolute right-4 top-4 rounded-md border border-border bg-background/85 px-2.5 py-1.5 font-mono text-[11px] backdrop-blur">
      ENet · UDP · authoritative
    </div>
    <div class="absolute bottom-4 left-4 right-4 grid grid-cols-4 gap-2 rounded-md border border-border bg-background/85 px-3 py-2 font-mono text-[11px] backdrop-blur">
      <div class="flex items-center justify-between">
        <span class="text-muted-foreground">players</span>
        <span class="text-foreground">{{ totalPlayers }}</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-muted-foreground">shards</span>
        <span class="text-foreground">{{ shards.length }} live</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-muted-foreground">state Δ</span>
        <span class="text-foreground">{{ stateDelta }} kb/s</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-muted-foreground">rollbacks</span>
        <span class="text-brand-green">0</span>
      </div>
    </div>
  </div>
</template>
