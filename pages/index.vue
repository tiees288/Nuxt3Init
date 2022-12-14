<template>
  <div class="mx-12 md:mx-[300px] mt-12">
    <form @submit="onSubmit" ref="refForm" :validation-schema="schema"
      class="flex flex-col bg-blue-400 px-12 py-4 rounded-md">
      <h3>Login Page</h3>
      <div class="flex flex-col">
        <Field name="email" type="email" class="my-2 h-12 drop-shadow-md" />
        <ErrorMessage name="email" />
      </div>
      <div class="flex flex-col">
        <Field name="password" type="password" class="my-2 h-12 drop-shadow-md" />
        <ErrorMessage name="password" />
      </div>
      <button>Submit</button>
    </form>
  </div>
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

const refForm = ref(null)
const schema = yup.object({
  email: yup.string().required('กรุณาระบุ Email').email(),
  password: yup.string().required().min(8).test('Check Password Strength', 'Password เกิน 8',
    (value: any): boolean => {
      if (value?.toString().length > 8) {
        return false
      } else {
        return true
      }
    }),
  fieldArray: yup.array()
});
const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
});

const onSubmit = handleSubmit(async (values, { resetForm }) => {
  console.log(values); // send data to API
  // reset the form and the field values to their initial values
  resetForm();
});
</script>