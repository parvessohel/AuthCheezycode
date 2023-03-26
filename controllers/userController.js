const userModel = require("../models//userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SECRET_KEY = "nOTESaPI"

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
res.status(201).json({user: result, token: token})


} catch(error) {
    console.log(error)
    res.status(500).json({message: "Something went wrong"})
    
}

}

const signin = (req, res)=>{
    
}

module.exports = {signup, signin}