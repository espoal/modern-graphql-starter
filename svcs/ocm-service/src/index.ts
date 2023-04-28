import schema from './schema.graphql'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
// import gql from 'graphql-tag'
import { buildSubgraphSchema } from '@apollo/subgraph'

const resolvers = {
	Query: {
		me() {
			return { id: '1', name: '@ava' }
		},
	},
	User: {
		__resolveReference(user, { fetchUserById }) {
			return fetchUserById(user.id)
		},
	},
}

const server = new ApolloServer({
	schema: buildSubgraphSchema({ typeDefs: schema, resolvers }),
})

const { url } = await startStandaloneServer(server)
console.log(`🚀  ocm-service ready at ${url}`)
