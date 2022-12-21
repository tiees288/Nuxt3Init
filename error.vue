<template>
     <h1>{{ (err as ErrorP).statusCode }}</h1>
     <div>
          {{ err?.message }}
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