import mongoose from "mongoose"

interface IProduct {
	name: string
	description: string
	image: string
	quantity: number
}

const { Schema } = mongoose

export const productSchema = new Schema<IProduct>(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		quantity: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
)

export const ProductDb = mongoose.model<IProduct>("products", productSchema)
