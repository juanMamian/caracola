// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['~/assets/estilos/estilosGenerales.css', '~/assets/estilos/paletaColores.css'],
    modules: ['nuxt-graphql-server', 'nuxt-mongoose', '@nuxtjs/apollo'],
    graphqlServer: {
        url: '/api/graphql',
        schema: "./server/**/*.graphql"
    },
    mongoose: {
        uri: process.env.DB_CONNECT,
        options: {},
        modelsDir: 'mongoose/models',
        devtools: true,
    },
    apollo: {
        clients: {
            default: {
                httpEndpoint: 'http://localhost:3000/api/graphql'
            }
        }
    }
})
