<template>
  <div>
    <Header message="<Header Component Props>" />
    <!-- <slot /> -->
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { useQueryProvider } from "vue-query";
useQueryProvider();
</script>

<!-- <script lang="ts">
import Vue from "vue";
export default {
  name: "default",
};
</script> -->
