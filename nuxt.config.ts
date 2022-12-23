// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
     app: {
          head: {
               charset: 'utf-8',
               viewport: 'width=500, initial-scale=1',
               title: 'Initial NuxtTS',
               // en: {

               //      meta: [
               //           // <meta name="description" content="My amazing site">
               //           { name: 'description', content: 'My amazing site.' }
               //      ],
               // },
          }
     },
     imports: {
          autoImport: true,
          dirs: ['/interfaces/', '/utils/serviceApi']
     },
     css: ['~/assets/css/main.css'],
     postcss: {
          plugins: {
               tailwindcss: {},
               autoprefixer: {},
          },
     },
     modules: [
          '@nuxtjs/i18n',
     ],
     i18n: {
          baseUrl: '/',
          defaultLocale: 'th',
          strategy: 'prefix',
          customRoutes: 'page',
          detectBrowserLanguage: {
               useCookie: true,
               cookieKey: 'lang',
          },
          langDir: 'lang/',
          locales: [
               { code: 'en', name: 'English', file: 'EN.json', iso: 'en' },
               { code: 'th', name: 'ไทย', file: 'TH.json', iso: 'th' },
          ],
          vueI18n: {
               legacy: false,
               locale: 'th',
          }
     }
})