export default defineNuxtRouteMiddleware((to, from) => {
  const router = useRouter()
  const locales = useLocales()
  const selectedLocales = toRaw(to.params).locales
  const listLocalesSupport = ['en', 'th']
  const defaultLocales = 'th'

  // Check has Locales
  if (listLocalesSupport.includes(selectedLocales?.toString())) {
    locales.value = selectedLocales?.toString()
  } else {
    if (to?.fullPath == '/') {
      router.push('/th')
    }
    locales.value = defaultLocales
    throw createError({ statusCode: 404, statusMessage: `Not found: ${to.fullPath}` })
  }
})