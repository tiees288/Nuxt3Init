<template>
  <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-3 drop-shadow-md">
    <div class="flex items-center flex-shrink-0 text-white mr-10">
      <a href="/" class="text-xl tracking-tight font-bold">Krittawat Vue - {{ props.message }}</a>
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
        <a href="/Users" class="menu-item1"> User List </a>
        <a href="/Experince" class="menu-item1"> Experience </a>
        <a href="/About" class="menu-item1"> About me </a>
        <a href="/Contact" class="menu-item1"> Contact </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { defineProps, reactive } from "vue";

interface Props {
  message: string
}

const props = withDefaults(defineProps<Props>(), {
  message: ''
})
</script>


<style scoped>
</style>
