<template>
 
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage, useForm } from 'vee-validate';
import * as yup from 'yup';

interface FormData {
  email: string
  password: string
}

const meta = useHead({
  title: `Index - Nuxt 3`
})

useRouter().push('/th')

</script>