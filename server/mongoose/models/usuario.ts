import { defineMongooseModel } from "#nuxt/mongoose"

export const modeloUsuario = defineMongooseModel('usuario', {
    username: {
        type: 'string',
        required: true,
    },
    nombre: {
        type: 'string',
        required: true,
    },
    apellidos: {
        type: 'string',
    }
})
