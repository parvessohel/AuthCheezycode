const noteModel =require("../models/noteModel")

const createNote = async (req, res) =>{
const {title, description} = req.body

const newNote = new noteModel({
    title: title,
    description: description,
    userId: req.userId
})

try {
    await newNote.save()
    res.status(201).json({newNote})
} catch (error) {
    console.log(error)
    res.status(500).json({message: "Something went wrong"})
}


}

const updateNote = (req, res) =>{
    
}

const deteteNote = (req, res) =>{
    
}

const  getNotes = async (req, res) =>{

    try {
        const notes = await noteModel.find({userId: req.userId})
        
    } catch (error) {
        console.log(error)
    res.status(500).json({message: "Something went wrong"})
    }
}

module.exports = {createNote, updateNote, deteteNote, getNotes}