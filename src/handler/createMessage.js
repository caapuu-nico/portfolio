const Message = require("../model/messageModel")
const createMessage = async(req,res)=> {
    console.log(req.body)
    try {
        const {nombre, numero, email, tema, message} = req.body;
        const  newMessage = new Message({
            nombre,
            numero,
            email,
            tema,
            message
        })
        const saveMessage = await newMessage.save();
        res.json(saveMessage)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = 
    {
        createMessage
    }