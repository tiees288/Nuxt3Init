<script setup lang="ts">
import { useQueryProvider } from "vue-query";
import { useAuthenData } from "~~/composables/state";

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
// Init Vue Query Option
useQueryProvider({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

</script>

<template>
  <Html :lang="head?.htmlAttrs?.lang" :dir="head?.htmlAttrs?.dir">
  <Header message="<Header Component Props>" />
  <Body>
    <NuxtPage />
    <Loader />
  </Body>
  </Html>
</template>