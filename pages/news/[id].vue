<template>
     <div class="mx-24 flex flex-col">
          {{ `News: ${route.params.id}` }}
     </div>
</template>
<script setup lang="ts">
     const route = useRoute()
     console.log(route.params)
</script>