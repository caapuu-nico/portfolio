const mongoose = require("mongoose");
const messageModel =new mongoose.Schema({
    nombre:{
        type: String,
        required:true
    },
    numero:{
        type:String,
        maxlength:12,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        validate:{
            validator: function(v){
                 // Validación básica de formato de email usando una expresión regular
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message:props=>`${props.value} no es un email valido`
        }
    },
    tema:{
        type:String,
        maxlength:20,
    },
    message:{
        type:String,
        required:true,
        maxlength:200
    }

},
{
    timestamps:true
}
)

const Message = mongoose.model("Message",messageModel);
module.exports = Message

