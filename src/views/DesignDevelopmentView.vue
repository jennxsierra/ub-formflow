<script setup lang="ts">
import { projectPhases } from '@/data/phases'
</script>

<template>
  <div class="container">
    <header class="phase-header">
      <h1>Design & Development</h1>
      <div class="muted">Project phases, reports and presentations</div>
    </header>

    <section class="phase-grid">
      <article v-for="phase in projectPhases" :key="phase.id" class="phase-card">
        <img :src="phase.image" :alt="phase.name" />
        <div class="phase-card-info">
          <div>
            <div class="phase-badge">Phase {{ phase.id }}</div>
          </div>
          <div class="phase-meta">{{ phase.code }}</div>
        </div>
        <h3>{{ phase.name }}</h3>
        <p class="muted">{{ phase.description }}</p>

        <div class="phase-links">
          <a v-if="phase.report" :href="phase.report" target="_blank" class="link-chip">Report</a>
          <a v-if="phase.presentation" :href="phase.presentation" target="_blank" class="link-chip"
            >Presentation</a
          >
          <a
            v-for="link in phase.externalLinks || []"
            :key="link.url"
            :href="link.url"
            target="_blank"
            class="link-chip"
            >{{ link.name }}</a
          >
        </div>
      </article>
    </section>
  </div>
</template>
