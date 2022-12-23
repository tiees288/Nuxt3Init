const router = useRouter()

export const useLocales = () => {
     return useState('locales', () => {
          // localStorage
          return ''
     })
}
export const useAuthenData = () => {
     return useState('authenDay', () => {
          // localStorage
          return {
               name: 'Krittawat'
          }
     })
}

export const usePageName = () => {
     return useState('pageName', () => {
          return router.currentRoute?.value.name?.toString().split('__')?.[0].toString()
     })
}