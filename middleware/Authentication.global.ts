export default defineNuxtRouteMiddleware((to, from) => {
  const cookie = useCookie('token')

  // Check Authorized
  if (!cookie.value) {
    // return createError({ statusCode: 403, statusMessage: 'Unauthorized' })
  } else {

  }
})