<script setup lang="ts">
import { usePageTitle } from '@/composables/usePageTitle'
import { ref } from 'vue'
usePageTitle('UB FormFlow') // keeps document.title in sync with route.meta.title

// Mobile navigation state
const navOpen = ref(false)
const toggleNav = () => (navOpen.value = !navOpen.value)
</script>

<template>
  <header class="app-header" :class="{ 'nav-open': navOpen }">
    <RouterLink to="/">
      <div class="header-logo-group">
        <img
          src="/images/logo/ub-formflow-logo-100x100.svg"
          alt="UB FormFlow Logo"
          class="site-logo"
        />
        <div class="header-title-group">
          <h1>UB FormFlow</h1>
        </div>
      </div>
    </RouterLink>
    <!-- Mobile menu toggle -->
    <button class="menu-toggle" @click="toggleNav" aria-label="Toggle navigation" :aria-expanded="navOpen" aria-controls="primary-nav">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="sr-only">Menu</span>
    </button>
    <nav id="primary-nav" :class="{ open: navOpen }">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/design-and-development">Design & Development</RouterLink>
    </nav>
  </header>

  <main class="app-main">
    <RouterView />
  </main>

  <footer class="app-footer">
    <p>© 2025 UB FormFlow</p>
  </footer>
</template>

<style src="./styles/globals.css"></style>
<style src="./styles/header.css"></style>
<style src="./styles/buttons.css"></style>
<style src="./styles/hero.css"></style>
<style src="./styles/sections.css"></style>
<style src="./styles/team.css"></style>
<style src="./styles/phases.css"></style>
<style src="./styles/media.css"></style>
