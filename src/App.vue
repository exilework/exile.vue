<script setup lang="ts">
import { provideI18n } from '@/composables/useI18n'
import AppNav from '@/components/sections/AppNav.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import CapabilityStrip from '@/components/sections/CapabilityStrip.vue'
import WhySection from '@/components/sections/WhySection.vue'
import ManagedHosting from '@/components/sections/ManagedHosting.vue'
import ProcessSection from '@/components/sections/ProcessSection.vue'
import CapabilitySection from '@/components/sections/CapabilitySection.vue'
import FinalCTA from '@/components/sections/FinalCTA.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
import MultiplayerPillars from '@/components/sections/MultiplayerPillars.vue'
import CaseShowcase from '@/components/CaseShowcase.vue'
import CodeVisual from '@/components/visuals/CodeVisual.vue'
import PipelineVisual from '@/components/visuals/PipelineVisual.vue'
import MultiplayerWorldVisual from '@/components/proof/MultiplayerWorldVisual.vue'
import LocalizationSideBySide from '@/components/LocalizationSideBySide.vue'
import MentorshipPipeline from '@/components/proof/MentorshipPipeline.vue'
const { t } = provideI18n()
</script>

<template>
  <div class="min-h-screen bg-background text-foreground antialiased">
    <AppNav />
    <HeroSection />
    <CapabilityStrip />

    <CaseShowcase
      id="engineering"
      layout="right"
      :kicker="t('eng.kicker')"
      :title="t('eng.title')"
      :body="t('eng.body')"
      :tags="['Rails', 'Elixir', 'Go', 'Vue 3', 'PostgreSQL', 'Realtime']"
      :case-tag="t('eng.case.tag')"
      :case-title="t('eng.case.title')"
      :case-sub="t('eng.case.sub')"
      :annotations="[
        { label: 'uptime', value: '99.99%', accent: 'green' },
        { label: 'p95', value: '84ms', accent: 'blue' },
      ]"
    >
      <CodeVisual />
    </CaseShowcase>

    <CaseShowcase
      id="infrastructure"
      layout="left"
      :kicker="t('infra.kicker')"
      :title="t('infra.title')"
      :body="t('infra.body')"
      :tags="['Terraform', 'Docker', 'DigitalOcean', 'Linux', 'Monitoring', 'On-call']"
      :case-tag="t('infra.case.tag')"
      :case-title="t('infra.case.title')"
      :case-sub="t('infra.case.sub')"
      :annotations="[
        { label: 'regions', value: '3', accent: 'blue' },
        { label: 'downtime', value: '0s', accent: 'green' },
        { label: 'rollouts', value: '12/wk' },
      ]"
    >
      <PipelineVisual />
    </CaseShowcase>

    <section id="multiplayer">
      <CaseShowcase
        layout="background"
        :kicker="t('mp.kicker')"
        :title="t('mp.title')"
        :body="t('mp.body')"
        :case-tag="t('mp.case.tag')"
        :case-title="t('mp.case.title')"
        :case-sub="t('mp.case.sub')"
        :annotations="[
          { label: 'tick', value: t('mp.metric.2.v'), accent: 'blue' },
          { label: 'shard', value: t('mp.metric.1.v') + ' p', accent: 'green' },
          { label: 'sync', value: t('mp.metric.3.v'), accent: 'purple' },
        ]"
        video-src="/bg-multiplayer.webm"
      >
        <MultiplayerWorldVisual />
      </CaseShowcase>
      <MultiplayerPillars />
    </section>

    <CaseShowcase
      id="localization"
      layout="right"
      :kicker="t('loc.kicker')"
      :title="t('loc.title')"
      :body="t('loc.body')"
      :tags="['JA · KO · ZH', 'EN · ES · PT-BR', 'UI', 'Narrative', 'Economy', 'Live ops']"
      :case-tag="t('loc.case.tag')"
      :case-title="t('loc.case.title')"
      :case-sub="t('loc.case.sub')"
      :annotations="[
        { label: 'langs', value: '6', accent: 'blue' },
        { label: 'regions', value: 'EU · NA · SA', accent: 'green' },
      ]"
    >
      <LocalizationSideBySide />
    </CaseShowcase>

    <CaseShowcase
      id="mentorship"
      layout="left"
      :kicker="t('ment.kicker')"
      :title="t('ment.title')"
      :body="t('ment.body')"
      :tags="['Spec', 'Assets', 'Build', 'Playtest', 'Publish']"
      :case-tag="t('ment.case.tag')"
      :case-title="t('ment.case.title')"
      :case-sub="t('ment.case.sub')"
      :annotations="[
        { label: 'platforms', value: '5', accent: 'purple' },
        { label: 'cycle', value: 'spec → ship', accent: 'blue' },
      ]"
    >
      <MentorshipPipeline />
    </CaseShowcase>

    <WhySection />
    <ManagedHosting />
    <ProcessSection />
    <CapabilitySection />
    <FinalCTA />
    <FooterSection />
  </div>
</template>
