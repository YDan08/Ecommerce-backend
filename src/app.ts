import { ApolloServer } from "apollo-server"
import "reflect-metadata"
import { buildSchema } from "type-graphql"
import { ProductResolver } from "./product"
import { db } from "./db/db"

const bootstrap = async () => {
	await db()

	const schema = await buildSchema({
		resolvers: [ProductResolver],
	})

	const server = new ApolloServer({
		schema,
	})

	const { url } = await server.listen(process.env.PORT || 4000)

	console.log(`Server running on ${url}`)
}

bootstrap()
