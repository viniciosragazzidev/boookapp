import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import routes from "./routes"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3333

app.use(cors())
app.use(express.json())
app.use("/api", routes)

app.listen(PORT, () => {
    console.log(`🔥 Servidor rodando na porta ${PORT}`)
})
