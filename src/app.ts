import express from "express"
import { config } from "dotenv"

config()

const app = express()

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
	res.send("hello")
})

app.listen(port, () => console.log("Start server"))
