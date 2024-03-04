import { ApolloServer } from "apollo-server"
import "reflect-metadata"
import { buildSchema } from "type-graphql"
import { ProductResolver } from "./product"
import { db } from "./db/db"
import { config } from "dotenv"

const bootstrap = async () => {
	config()
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
