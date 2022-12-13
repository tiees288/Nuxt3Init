<template>
  <div class="mt-12">name: {{name}}</div>
  <Tutorial />
</template>

<script setup lang="ts">
  const data = useState<string>()
</script>

<script lang="ts">
import Vue from 'vue'

export default {
  name: 'IndexPage',
  data() {

    return {
      name: 'Krittawat'
    }
  },
  fetch() {
  },
  mounted() {
    let locale = localStorage.getItem('Locale') ?? undefined
    if (!locale) {
      localStorage.setItem('Locale', JSON.stringify({ Locale: 'EN' }))
    } else {
      console.log(`Locale: ${locale}`)
    }
  },
  methods: {
    async test () {
    }
  }
}
</script>
