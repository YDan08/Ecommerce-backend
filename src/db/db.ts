import mongoose from "mongoose"

export const db = async () => {
	try {
		await mongoose.connect(
			"mongodb://root:password@localhost:27017/ecommerce?authSource=admin"
		)
		console.log("conectado no mongoose")
	} catch (error) {
		console.log(error)
	}
}
