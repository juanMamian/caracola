import { Resolvers } from "#graphql/resolver"
import { schema } from '#graphql/schema'
import { ApolloServer } from "@apollo/server"
import { startServerAndCreateH3Handler } from "@as-integrations/h3"
import { resolvers as rUsuario } from "../graphql/rUsuario"
import merge from "lodash.merge"

const resolvers: Resolvers = merge(rUsuario);


const apollo = new ApolloServer({ typeDefs: schema, resolvers });
export default startServerAndCreateH3Handler(apollo, {
    context: (event) => {
        return {
            id: 1
        }
    }
})
