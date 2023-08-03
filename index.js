require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
const router = require("./router/route")

const MONGO_URI = process.env.MONGO_URI
const port = process.env.PORT || 3000

app.use(cors())
app.use("/public", express.static(`${process.cwd()}/public`))

app.use(express.json())
app.use("/", router)

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html")
})

app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" })
})


const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    app.listen(port, console.log(`Listening on port ${port}...`))
  } 
  catch (error) {
    console.log(error)
  }
}

startServer()