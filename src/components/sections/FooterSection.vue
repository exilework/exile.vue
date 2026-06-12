<script setup lang="ts">
import { computed } from 'vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

const capLinks = computed(() => [1, 2, 3, 4].map((i) => t(`footer.cap.${i}`)))
const coLinks = computed(() => [1, 2, 3, 4].map((i) => t(`footer.co.${i}`)))
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border bg-background">
    <div class="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
      <div>
        <div class="flex items-center gap-2">
          <div
            class="flex h-6 w-6 items-center justify-center rounded-[6px] bg-brand-blue font-mono text-[13px] font-bold text-black"
            aria-hidden="true"
          >
            <span class="translate-y-[1px]">|&gt;</span>
          </div>
          <span class="text-sm font-semibold">Exile.work</span>
        </div>
        <p class="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{{ t('footer.tag') }}</p>
        <div class="mt-5"><LanguageSwitcher /></div>
      </div>

      <div>
        <div class="font-mono text-xs uppercase tracking-wider text-muted-foreground">{{ t('footer.col.cap') }}</div>
        <ul class="mt-4 space-y-2 text-sm">
          <li v-for="item in capLinks" :key="item">
            <a href="#" class="text-foreground/80 transition-colors hover:text-foreground">{{ item }}</a>
          </li>
        </ul>
      </div>

      <div>
        <div class="font-mono text-xs uppercase tracking-wider text-muted-foreground">{{ t('footer.col.company') }}</div>
        <ul class="mt-4 space-y-2 text-sm">
          <li v-for="item in coLinks" :key="item">
            <a href="#" class="text-foreground/80 transition-colors hover:text-foreground">{{ item }}</a>
          </li>
        </ul>
      </div>

      <div>
        <div class="font-mono text-xs uppercase tracking-wider text-muted-foreground">{{ t('footer.col.contact') }}</div>
        <ul class="mt-4 space-y-2 text-sm">
          <li>
            <a href="mailto:hello@exile.work" class="text-foreground/80 transition-colors hover:text-foreground">hello@exile.work</a>
          </li>
          <li>
            <a href="#contact" class="text-foreground/80 transition-colors hover:text-foreground">{{ t('footer.contact.schedule') }}</a>
          </li>
        </ul>
      </div>

      <div>
        <div class="font-mono text-xs uppercase tracking-wider text-muted-foreground">{{ t('footer.col.legal') }}</div>
        <div class="mt-4 space-y-3 font-mono text-[11px] leading-relaxed text-muted-foreground">
          <div>
            <div class="text-foreground/80">Exile Work LTDA</div>
            <div>CNPJ 54.468.070/0001-06</div>
            <div>+55 (47) 99627-8180</div>
          </div>
          <div>
            <div class="text-foreground/60 uppercase tracking-wider text-[10px]">{{ t('footer.legal.studio') }}</div>
            <div>R. Orestes Guimarães, 876</div>
            <div>4º andar — Joinville SC</div>
          </div>
          <div>
            <div class="text-foreground/60 uppercase tracking-wider text-[10px]">{{ t('footer.legal.fiscal') }}</div>
            <div>Av. Paulista 1106, Sl. 01</div>
            <div>Andar 16 — São Paulo SP</div>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-border">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 font-mono text-xs text-muted-foreground">
        <span>© {{ year }} Exile.work</span>
        <span>{{ t('footer.note') }}</span>
      </div>
    </div>
  </footer>
</template>
