<template>
  <div class="mx-12 mt-12">
    <h2 class="font-bold">List of Users by Vue-Query</h2>
    <div v-if="isRefetching || isLoading">Loading...</div>
    <ul class="my-2" v-if="userData != undefined">
      <li v-for="user, index in userData">
        {{ `${user.id} ${user.name} ${user.PhoneNumber} ${user.createdAt}` }}
      </li>
    </ul>
    <button class="bg-blue-400 text-white px-3 py-1 rounded-md" @click="callRefetch()">Refresh</button>
  </div>
</template>
   
<script setup lang="ts">
import { use } from 'h3';

const meta = useHead({
  title: `Users - Nuxt 3`
})
const { data: userData, isError, isLoading, refetch, isRefetching } = userServices.FetchUser();

const test = new Proxy()


const callRefetch = () => {
  userData?.value &&
    userData?.value.forEach((user, index) => {
      const userObj = toRaw(user)
      console.log(userObj.name)
    })

  refetch.value()
}



</script>