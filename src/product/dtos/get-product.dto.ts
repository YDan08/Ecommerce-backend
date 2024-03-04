import { IsString } from "class-validator"
import { Field, InputType } from "type-graphql"

@InputType()
export class GetProductDto {
	@IsString()
	@Field(() => String)
	id: string
}
