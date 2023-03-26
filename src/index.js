const express = require("express")
const userRouter = require("../routes/userRouter")
const noteRouter = require("../routes/noteRouter")
const mongoose = require("mongoose")

const app = express()

const Port = 5000

mongoose.connect("mongodb+srv://pargamerx1264:Noyjonoyjo11@cluster0.l2aopod.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(Port, () => {
        console.log(`Server is running at http://localhost:${Port}`)
    })
}).catch((err)=>{
    console.log(err)
})


app.use("/users",userRouter)
app.use("/note", noteRouter)

app.get("/", (req, res) => {
    res.send("hello")
})

