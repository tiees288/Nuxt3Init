// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
     app: {
          head: {
               charset: 'utf-16',
               viewport: 'width=500, initial-scale=1',
               title: 'Initial NuxtTS',
               meta: [
                    // <meta name="description" content="My amazing site">
                    { name: 'description', content: 'My amazing site.' }
               ],
          },
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
})
