<template>
  <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-3 drop-shadow-md">
    <div class="flex items-center flex-shrink-0 text-white mr-10">
      <!-- <NuxtLink :to="`/${locale}`" class="text-xl tracking-tight font-bold">{{ $t('header') }} - {{ props.message }} - {{ -->
      <NuxtLink :to="`/${locale}`" class="text-xl tracking-tight font-bold">{{ $t('header') }}</NuxtLink>
    </div>
    <div class="visible md:invisible">
      <button data-collapse-toggle="mega-menu-full" type="button" class="menu-btn-mobile" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-between">
      <div class="text-sm lg:flex-grow hidden md:inline">
        <NuxtLink :to="`/${locale}/Users`" class="menu-item1"> User List </NuxtLink>
        <NuxtLink :to="`/${locale}/Experince`" class="menu-item1"> Experience </NuxtLink>
        <NuxtLink :to="`/${locale}/About`" class="menu-item1"> About me </NuxtLink>
        <NuxtLink :to="`/${locale}/Contact`" class="menu-item1"> Contact </NuxtLink>
      </div>
    </div>
    <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
      {{ locale.name }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import { defineProps, reactive } from "vue";

interface Props {
  message: string
}

interface LangList {
  code: string
  file: string
  name: string
}

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const langList: LangList[] = toRaw(locales.value) as LangList[]

const availableLocales = computed(() => {
  return langList.filter(i => i.code !== locale.value)
})

const nuxtApp = useNuxtApp();
const router = useRouter()
const appConfig = useAppConfig()
const authenUser = useAuthenData()

// Object for username
onMounted(() => {
})

// const localesState = useLocales()
const props = withDefaults(defineProps<Props>(), {
  message: ''
})

// console.log(locale.value)
// console.log(locales.value)


</script>


<style scoped>

</style>
