<script setup lang="ts">
import { projectPhases } from '@/data/phases'
</script>

<template>
  <h1>Design & Development</h1>
  <div v-for="phase in projectPhases" :key="phase.id">
    <img :src="phase.image" :alt="phase.name" />
    <h2>
      <span>{{ phase.id }}</span> {{ phase.name }}
    </h2>
    <div>{{ phase.code }}</div>
    <p>{{ phase.description }}</p>

    <div v-if="phase.report">
      <a :href="phase.report" target="_blank">Report PDF</a>
    </div>

    <div v-if="phase.presentation">
      <a :href="phase.presentation" target="_blank">Presentation</a>
    </div>

    <div v-if="phase.externalLinks">
      <div v-for="link in phase.externalLinks" :key="link.url">
        <a :href="link.url" target="_blank">{{ link.name }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
