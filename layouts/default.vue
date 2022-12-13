<template>
  <div>
    <Header message="Header Component" />
  <slot />
  </div>
</template>

<script setup lang="ts">
  useHead({
    title: 'Nuxt 3 Initial'
  })
</script>

<script lang="ts">
import Vue from "vue";
export default {
  name: "default",
};
</script>
