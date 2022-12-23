<template>
     Index Page
</template>

<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const { t } = useI18n()
const config = useAppConfig()
const meta = useHead({ title: `${t('pagesTitle.experience')} - ${config?.title}` })

</script>