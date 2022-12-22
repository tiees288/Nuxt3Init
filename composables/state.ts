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