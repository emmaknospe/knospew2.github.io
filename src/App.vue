<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1><RouterLink to="/">Knospe's Personal Website</RouterLink></h1>
    <nav>
      <ul>
        <li><a href="https://www.linkedin.com/in/will-knospe/">Linkedin</a></li>
        <li><RouterLink to="/dbtd-clocks">Dreamers Beyond the Dragonsteeth Clocks</RouterLink></li>
      </ul>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
</style>
