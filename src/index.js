const express = require("express")
const userRouter = require("../routes/userRouter")
const noteRouter = require("../routes/noteRouter")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config()

const app = express()

const Port = process.env.Port || 5000

app.use(express.json())

app.use(cors())

app.use("/users",userRouter)
app.use("/note", noteRouter)


app.get("/", (req, res) => {
    res.send("Notes API from cool")
})


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(Port, () => {
        console.log(`Server is running at http://localhost:${Port}`)
    })
}).catch((err)=>{
    console.log(err)
})



