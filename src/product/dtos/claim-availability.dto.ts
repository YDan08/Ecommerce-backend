import { IsNumber, IsString } from "class-validator"
import { Field, InputType } from "type-graphql"

@InputType()
export class ClaimAvailabilityDto {
	@IsString()
	@Field(() => String)
	id: string

	@IsNumber()
	@Field(() => Number)
	quantity: number
}
