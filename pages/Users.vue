<script setup lang="ts">
// import userServices from '~/utils/serviceApi/userServices';

import { title } from 'process';

const { data: userData, isError, isLoading, refetch, isRefetching } = userServices.FetchUser();
const btnRef = ref(null)

const { t } = useI18n()
const config = useAppConfig()
const meta = useHead({ title: `${t('pagesTitle.users')} - ${config?.title}` })

const callRefetch = () => {
  userData?.value &&
    userData?.value.forEach((user, index) => {
      const userObj = toRaw(user)
      // console.log(userObj.name)
    })
  refetch.value()
}
</script>

<template>
  <div class="mx-12 mt-12">
    <h2 class="font-bold">List of Users by Vue-Query</h2>
    <div v-if="isRefetching || isLoading">Loading...</div>
    <ul class="my-2" v-if="userData != undefined">
      <li v-for="user, index in userData">
        {{ `${user.id} ${user.name} ${user.PhoneNumber} ${user.createdAt}` }}
      </li>
    </ul>
    <button ref="btnRef" class="bg-blue-400 text-white px-3 py-1 rounded-md" @click="callRefetch()">Refresh</button>

    <div class="">
      <p>{{ `Load config: ${config.urlApi}` }}</p>
    </div>
  </div>
</template>
   
