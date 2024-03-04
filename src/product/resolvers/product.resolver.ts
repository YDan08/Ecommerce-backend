import { Arg, Mutation, Query, Resolver } from "type-graphql"
import { CreateProductDto, GetProductDto } from "../dtos"
import { ProductModel } from "../models"
import { ProductDb } from "../../db/models/Product.db"
@Resolver(() => ProductModel)
export class ProductResolver {
	@Query(() => ProductModel)
	async getProduct(@Arg("data", () => GetProductDto) data: GetProductDto) {
		console.log(data.id)
		const products = await ProductDb.findById(data.id)
		return products
	}

	@Query(() => [ProductModel])
	async findProducts() {
		const products = await ProductDb.find()
		return products
	}

	@Mutation(() => ProductModel)
	async createProduct(@Arg("data", () => CreateProductDto) data: CreateProductDto) {
		const product = await ProductDb.create(data)
		return product
	}
}
