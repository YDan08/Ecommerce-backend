import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class ProductModel {
	@Field(() => String)
	name: string
	@Field(() => String)
	description: string
	@Field(() => String)
	image: string
	@Field(() => Number)
	quantity: number
}
