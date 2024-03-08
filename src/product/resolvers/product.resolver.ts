import { Arg, Mutation, Query, Resolver } from "type-graphql"
import { ClaimAvailabilityDto, CreateProductDto } from "../dtos"
import { ProductModel } from "../models"
import { ProductDb } from "../../db"

@Resolver(() => ProductModel)
export class ProductResolver {
	@Query(() => ProductModel)
	async getProduct(@Arg("id", () => String) id: string) {
		const products = await ProductDb.findById(id)
		return products
	}

	@Query(() => [ProductModel])
	async listProducts() {
		const products = await ProductDb.find()
		return products
	}

	@Query(() => [ProductModel])
	async findProducts(@Arg("data", () => [String]) data: string[]) {
		console.log(data)
		const products = await ProductDb.find({
			_id: {
				$in: data,
			},
		})
		return products
	}

	@Mutation(() => ProductModel)
	async createProduct(@Arg("data", () => CreateProductDto) data: CreateProductDto) {
		const product = await ProductDb.create(data)
		return product
	}

	@Mutation(() => ProductModel)
	async claimAvailability(
		@Arg("data", () => ClaimAvailabilityDto) data: ClaimAvailabilityDto
	) {
		const exist = await ProductDb.findById(data.id)

		if (!exist) {
			return "erro"
		}

		if (exist.quantity + data.quantity < 0) {
			return "qunatidade invalida"
		}

		const product = await ProductDb.findByIdAndUpdate(data.id, {
			quantity: exist.quantity + data.quantity,
		})

		return product
	}
}
