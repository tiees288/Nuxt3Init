<template>
  <div class="mt-12">name: {{ name }}</div>
  <div class="mt-12">Message: {{ helloWorld() }}</div>
  <input name="firstname" v-model="formData.firstname" />
</template>

<script setup lang="ts">
interface FormData {
  firstname: string
  lastname: string
}
let formData: FormData = {
  firstname: '',
  lastname: ''
}

const name = '123'
const data = useState<string>()
const meta = useHead({
  title: `Index - Nuxt 3`
})

const helloWorld = () => {
  return 'Hello Message'
}

</script>