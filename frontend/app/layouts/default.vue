<template>
  <div class="app-shell">
    <AppHeader />
    <main>
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'
</script>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fff;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
