import mongoose from "mongoose"

const { Schema } = mongoose

export const productSchema = new Schema(
	{
		name: {
			type: String,
			require: true,
		},
		description: {
			type: String,
			require: true,
		},
		image: {
			type: String,
			require: true,
		},
		quantity: {
			type: Number,
			require: true,
		},
	},
	{ timestamps: true }
)

export const ProductDb = mongoose.model("products", productSchema)
