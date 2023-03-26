const express = require("express")
const userRouter = require("../routes/userRouter")
const noteRouter = require("../routes/noteRouter")
const mongoose = require("mongoose")

const app = express()

const Port = 5000

app.use(express.json())

app.use("/users",userRouter)
app.use("/note", noteRouter)

app.use(req, res, next){
    console.log("HTTP Method - " + req.method + " , URL " + req.url)
    next()
}

app.get("/", (req, res) => {
    res.send("hello")
})




mongoose.connect("mongodb+srv://pargamerx1264:Noyjonoyjo11@cluster0.l2aopod.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(Port, () => {
        console.log(`Server is running at http://localhost:${Port}`)
    })
}).catch((err)=>{
    console.log(err)
})



