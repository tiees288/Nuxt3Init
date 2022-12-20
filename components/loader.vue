<template>
     <div v-if="loading" class="fixed left-0 top-0 h-0.5 w-full z-50 bg-green-500">Load</div>
</template>
   
<script setup lang="ts">
import { useQueryProvider } from "vue-query";
import { useAuthenData } from "~~/composables/state";

const nuxtApp = useNuxtApp();
const loading = useState('loading', () => false)

nuxtApp.hook("page:start", () => {
     console.log('Start Load')
     loading.value = true;
});
nuxtApp.hook("page:finish", () => {
     console.log('End Load')
     loading.value = false;
});

</script>   