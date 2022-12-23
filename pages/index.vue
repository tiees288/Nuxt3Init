<template>
     Index Page
</template>

<script setup lang="ts">
const router = useRouter()
const route = useRoute()
const config = useAppConfig()
const meta = useHead({ title: `Index - ${config?.title}` })


</script>