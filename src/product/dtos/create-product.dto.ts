import { IsNumber, IsString } from "class-validator"
import { Field, InputType } from "type-graphql"

@InputType()
export class CreateProductDto {
	@IsString()
	@Field(() => String)
	name: string

	@IsString()
	@Field(() => String)
	description: string

	@IsString()
	@Field(() => String)
	image: string

	@IsNumber()
	@Field(() => Number)
	quantity: number
}
