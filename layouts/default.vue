<template>
  <div>
    <Header message="<Header Component Props>" />
    <!-- <slot /> -->
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { useQueryProvider } from "vue-query";

const router = useRouter()
const pageName = router.currentRoute?.value.name?.toString()
const meta = useHead({
  title: `${pageName} - Nuxt 3`
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

<!-- <script lang="ts">
import Vue from "vue";
export default {
  name: "default",
};
</script> -->
