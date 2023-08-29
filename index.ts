import express from "express"
import usersRoute from "./users"

const app = express()

app.use(express.json()) // para recibir post
app.use("/", usersRoute)

app.listen(3000, () => console.log("Escuchando"))
