<script setup lang="ts">
import { useQueryProvider } from "vue-query";
import { useAuthenData } from "~~/composables/state";

const nuxtApp = useNuxtApp();
const router = useRouter()
const pageName = router.currentRoute?.value.name?.toString()
const meta = useHead({
  title: `${pageName} - Nuxt 3`
})

// Object for username
const authenUser = useAuthenData()

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
  <div>
    <Header message="<Header Component Props>" />
    <NuxtPage />
    <div>{{ authenUser.name }}</div>
  </div>
<Loader/>
</template>



<!-- <script lang="ts">
import Vue from "vue";
export default {
  name: "default",
};
</script> -->
