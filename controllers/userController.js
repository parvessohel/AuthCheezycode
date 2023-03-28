const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()


const SECRET_KEY = process.env.SECRET_KEY

const signup = async(req, res)=>{

//Existing user check
// Hashed pass
// User Creation
// Token Generate

const {username, email, password} = req.body

try {
    const exinstingUser = await userModel.findOne({email: email}) 
    if(exinstingUser){
        return res.status(400).json({message: "User already exists"})
    }

    const hashedPassword = await bcrypt.hash(password, 10)


    const result =  await userModel.create({
        email: email,
        password: hashedPassword,
        username: username
    })

const token = jwt.sign({email: result.email, id: result.id}, SECRET_KEY)
res.status(200).json({user: result, token: token})


} catch(error) {
    console.log(error)
    res.status(500).json({message: "User not found"})
    
}

}

const signin = async(req, res)=>{
    const {email, password} = req.body
    try {
        const exinstingUser = await userModel.findOne({email: email}) 
    if(!exinstingUser){
        return res.status(404).json({message: "User already exists"})
    }
    const matchedPassword = await bcrypt.compare(password, exinstingUser.password)
    if(!matchedPassword){
        return res.status(400).json({message: "Invalid Password"})
    }
     
    const token = jwt.sign({email: exinstingUser.email, id: exinstingUser.id}, SECRET_KEY)
    res.status(201).json({user: exinstingUser, token: token})

    } catch (error) {
        console.log(error)
        res.status(500).json({message: "User not found"})
    }

}

module.exports = {signup, signin}