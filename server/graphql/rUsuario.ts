import { Resolvers } from "#graphql/resolver"
import { GraphQLError } from "graphql";
import { modeloUsuario as Usuario } from "../mongoose/models/usuario";
export const resolvers: Resolvers = {
    Query: {
        login: async function(_, { username, password }, context) {
            console.log("Petición de login recibida para " + username + " con pass: " + password);
            let usuario;
            try {
                 usuario = await Usuario.findOne({ username }).exec();
            } catch (error) {
                console.log("Error buscando el usuario en DB: " + error);
                throw new GraphQLError("Error conectando con la base de datos", {
                    extensions: {
                        code: "INTERNAL_SERVER_ERROR"
                    }
                });
            }
            console.log("Encontrado " + usuario.nombre + " en la base de datos");
            return "ok"
        }

    }
}
