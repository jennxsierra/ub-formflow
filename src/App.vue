<script setup lang="ts">
import { usePageTitle } from '@/composables/usePageTitle'
usePageTitle('UB FormFlow') // keeps document.title in sync with route.meta.title
</script>

<template>
  <header class="app-header">
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
    <nav>
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
