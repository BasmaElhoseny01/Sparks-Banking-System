const mongoose=require("mongoose");

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    Name:{
        type:String,
        unique:true
    },
    Gender:{
        type:String
    },
    Mobile:{
        type:String
    },
    Email:{
        type:String
    },
    Current_Balance:{
        type:Number
    }  
})

module.exports = mongoose.model("Customers",CustomerSchema)