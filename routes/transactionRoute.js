const mongoose = require("mongoose");

const TransactionModel = mongoose.model("Transactions")
const CustomerModel = mongoose.model("Customers")


module.exports = (app) => {
    //1.Retrieve Transactions
    /**Retrieve All Transactions 
     * response:-(on success) { status: 200, TransactionsCollections(array) }
     *          -(on fail) { status: -1, Message: error }
     */
    app.get("/AllTransactions", async (request, response) => {
        try {
            const TransactionsCollections = await TransactionModel.find({}).sort({ Transfer_Date: -1 })
            return response.send({ status: 200, TransactionsCollections })
        }
        catch (error) {
            return response.send({ status: -1, Message: error })
        }
    })


    //2.Make A Transaction
    /* response:-(on success) { status: 200, TransactionsCollections(array) }
     *          -(on fail) { status: 404, Message: "No Payer With This ID" }
     *          -(on fail) { status: 404, Message: "No Payee With This ID"  }
     * 
     *          -(on fail) { status: 400, Message: "The Customer's balance is insufficient" }
     *          -(on fail) {{ status: -1, Message: "Error with The Customer's balance is insufficient" }
     *         
     *          -(on fail) { status: -1, Message: "Error when Adding new Transaction" }
     * 
     *          -(on fail) { status: 402, Message: "Error in Recieving Transaction", updatedCollection2 }
     *          -(on fail) { status: -1, Message: "Error Recieving Transaction" }
     * 
     *          -(on fail) { status: 402, Message: "Error in Sending Transaction", updatedCollection }
     *          -(on fail) { status: -1, Message: "Error Sending Transaction" }
     * 
     *          -(on fail) { status: -1, Message: error }
     */
    app.put("/Transfer", async (request, response) => {
        try {
            let { Payer, Payee, Amount } = request.body;

            const PayerCollection = await CustomerModel.find({ _id: Payer });
            if (PayerCollection.length <= 0) {
                return response.send({ status: 404, Message: "No Payer With This ID" })
            }

            const PayeeCollection = await CustomerModel.find({ _id: Payee });
            if (PayeeCollection.length <= 0) {
                return response.send({ status: 404, Message: "No Payee With This ID" })
            }

            //Insucfficent balance
            if (PayerCollection[0].Current_Balance < Amount) {
                let newTransaction = new TransactionModel({
                    Sender: Payer,
                    Reciever: Payee,
                    Amount: Amount,
                    Transfer_Date: new Date(),
                    Status: "Insufficient Balance"
                })

                if (newTransaction) {
                    await newTransaction.save()
                    return response.send({ status: 404, Message: "The Customer's balance is insufficient" })
                }
                else {
                    return response.send({ status: -1, Message: "Error with The Customer's balance is insufficient" })
                }
            }

            //else he has sufficient balance

            //make the trasnaction
            const updatedCollection = await CustomerModel.updateOne({ _id: Payer }, { $inc: { 'Current_Balance': -1 * Amount } })
            if (updatedCollection.modifiedCount > 0) {

                const updatedCollection2 = await CustomerModel.updateOne({ _id: Payee }, { $inc: { 'Current_Balance': Amount } })

                if (updatedCollection2.modifiedCount > 0) {
                    let newTransaction = new TransactionModel({
                        Sender: Payer,
                        Reciever: Payee,
                        Amount: Amount,
                        Transfer_Date: new Date(),
                        Status: "Suceeded"
                    })

                    if (newTransaction) {
                        await newTransaction.save()
                        return response.send({ status: 200, Message: "Tranaction Done Sucessfully" })
                    }
                    else {
                        return response.send({ status: -1, Message: "Error when Adding new Transaction" })
                    }
                }
                else {
                    let newTransaction = new TransactionModel({
                        Sender: Payer,
                        Reciever: Payee,
                        Amount: Amount,
                        Transfer_Date: new Date(),
                        Status: "Error in Recieving"
                    })

                    if (newTransaction) {
                        await newTransaction.save()
                        return response.send({ status: 402, Message: "Error in Recieving Transaction", updatedCollection2 })
                    }
                    else {
                        return response.send({ status: -1, Message: "Error Recieving Transaction" })
                    }
                }
            }
            else {
                let newTransaction = new TransactionModel({
                    Sender: Payer,
                    Reciever: Payee,
                    Amount: Amount,
                    Transfer_Date: new Date(),
                    Status: "Error in Sending"
                })

                if (newTransaction) {
                    await newTransaction.save()
                    return response.send({ status: 402, Message: "Error in Sending Transaction", updatedCollection })
                }
                else {
                    return response.send({ status: -1, Message: "Error Sending Transaction" })
                }
            }
        }
        catch (error) {
            return response.send({ status: -1, Message: error })
        }
    })

}