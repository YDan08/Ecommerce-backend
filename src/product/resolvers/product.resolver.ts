import { Arg, Mutation, Resolver } from "type-graphql"
import { CreateProductDto } from "../dtos"
import { ProductModel } from "../models"
import { ProductDb } from "../../db/models/Product.db"

@Resolver(() => ProductModel)
export class ProductResolver {
	@Mutation(() => ProductModel)
	async createProduct(@Arg("data", () => CreateProductDto) data: CreateProductDto) {
		const product = await ProductDb.create(data)
		return product
	}
}
