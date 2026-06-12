<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
const open = ref<string | null>('multiplayer')

const layerIds = ['players', 'worlds', 'multiplayer', 'services', 'infra'] as const
const layerColors = ['var(--brand-green)', 'var(--brand-blue)', 'var(--brand-blue)', 'var(--brand-purple)', 'var(--brand-purple)']
const layerTech = [
  ['Web', 'Desktop', 'Mobile clients'],
  ['Godot', 'Custom engines', 'World state services'],
  ['ENet', 'UDP', 'TCP', 'Tick scheduling', 'Interest management'],
  ['Elixir', 'Ruby on Rails', 'Go', 'Vue 3', 'PostgreSQL'],
  ['Terraform', 'Docker', 'DigitalOcean', 'Linux', 'Monitoring'],
]

const layers = computed(() =>
  layerIds.map((id, i) => ({
    id,
    label: t(`eco.layer.${i + 1}.label`),
    sub: t(`eco.layer.${i + 1}.sub`),
    color: layerColors[i],
    tech: layerTech[i],
  }))
)

function toggle(id: string) {
  open.value = open.value === id ? null : id
}
</script>

<template>
  <div class="overflow-hidden rounded-xl border border-border bg-background">
    <button
      v-for="(l, i) in layers"
      :key="l.id"
      class="group flex w-full flex-col text-left transition-colors"
      :class="[i !== 0 ? 'border-t border-border' : '', open === l.id ? 'bg-surface' : 'hover:bg-surface']"
      @click="toggle(l.id)"
    >
      <div class="flex items-center gap-5 px-6 py-5 md:px-8 md:py-6">
        <div
          class="flex h-10 w-10 flex-none items-center justify-center rounded-md border border-border"
          :style="{ color: l.color }"
        >
          <span class="h-2.5 w-2.5 rounded-sm" :style="{ background: l.color }" />
        </div>
        <div class="min-w-0 flex-1">
          <div class="flex items-baseline gap-3">
            <span class="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">L{{ i + 1 }}</span>
            <span class="text-lg font-semibold tracking-tight md:text-xl">{{ l.label }}</span>
          </div>
          <p class="mt-1 text-sm text-muted-foreground">{{ l.sub }}</p>
        </div>
        <span
          class="font-mono text-xs text-muted-foreground transition-transform duration-300"
          :style="{ transform: open === l.id ? 'rotate(90deg)' : 'none' }"
        >→</span>
      </div>
      <div
        class="grid transition-[grid-template-rows] duration-500 ease-out"
        :style="{ gridTemplateRows: open === l.id ? '1fr' : '0fr' }"
      >
        <div class="overflow-hidden">
          <div class="flex flex-wrap gap-2 px-6 pb-6 pl-[4.5rem] md:px-8 md:pb-7 md:pl-[5.5rem]">
            <span
              v-for="tech in l.tech"
              :key="tech"
              class="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[11px] text-foreground/80"
            >{{ tech }}</span>
          </div>
        </div>
      </div>
    </button>
  </div>
</template>
