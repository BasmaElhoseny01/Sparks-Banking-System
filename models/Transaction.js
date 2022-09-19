const mongoose=require("mongoose");

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    Sender:{//Name of Sender
        type:String
    },
    Reciever:{//Name of Reciever
        type:String
    },
    Amount:{
        type:Number
    },
    Transfer_Date:{
        type:Date
    },
    Status:{
        type:String
    }
})

module.exports = mongoose.model("Transactions",TransactionSchema)