<template>
     <div class="flex flex-col px-24 content-center justify-center h-screen items-center w-full border-2">
          <h1 class="text-3xl font-bold">{{ (err as ErrorP)?.statusCode }}</h1>
          <hr />
          <div class="border-t-2">
               {{ err?.message }}
          </div>
          <NuxtLink to="/th">
               <div class="w-32 h-10 px-4 select-none mt-4 cursor-pointer py-2 rounded-lg bg-gray-200">Return Home</div>
          </NuxtLink>
     </div>
</template>

<script setup lang="ts">
interface ErrorP extends Error {
     url: string;
     statusCode: string;
     statusMessage: string;
     message: string;
     description: string;
     data?: any;
}
const err = useError()

</script>