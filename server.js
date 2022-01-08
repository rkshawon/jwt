const express = require("express")
const app = express()
const mongoose = require("mongoose")
const authroute = require("./routes/auth")
const postR = require("./routes/post")
const dotenv = require("dotenv")

dotenv.config()

app.use(express.json())
mongoose.connect(process.env.DB_URL,(req,res)=>{
    console.log("Database is connected")
})

app.use("/user", authroute)
app.use("/post", postR)

app.listen(3001, (req, res)=>{
    console.log("Server is running at port 3001")
})