const mongoose = require("mongoose");
const CustomerModel = mongoose.model("Customers")

module.exports = (app) => {
    //1.Retrieve Customers
    /**Retrieve All Customers 
     * response:-(on sucess) { status: 200, CustomersCollections(array) }
     *          -(on fail) {status:-1,Message:error}
     */
    app.get("/AllCustomers", async (request, response) => {
        try {
            const CustomersCollections = await CustomerModel.find({}).sort({ Name: 1 })
            return response.send({ status: 200, CustomersCollections })
        }
        catch (error) {
            return response.send({ status: -1, Message: error })
        }
    })



    //2.Add Customer
    /**Add a new Customer 
     * response: -(on Fail){status:-1,Message:"Error when Adding new customer"}
     *           -(on Fail){ status: -1, Message: error }
     *           -(on Fail){status:404,Message:"This Customer Name already exists"}
     *           -(on success){status:200,Message:"Customer Added Sucessfully"}
     */
    app.post('/AddCustomer', async (request, response) => {
        try {
            let { Customer } = request.body

            const Collection = await CustomerModel.find({ Name: Customer.Name })
            if (Collection.length > 0) {
                return response.send({ status: 404, Message: "This Customer Name already exists" })
            }

            if (Customer.Email) {
                Customer.Email = Customer.Email.toLowerCase();
            }
            let newCustomer = new CustomerModel({
                Name: Customer.Name,
                Gender: Customer.Gender,
                Mobile: Customer.Mobile,
                Email: Customer.Email,
                Current_Balance: Customer.Current_Balance
            })

            if (newCustomer) {
                await newCustomer.save()
                return response.send({ status: 200, Message: "Customer Added Sucessfully" })
            }
            else {
                return response.send({ status: -1, Message: "Error when Adding new customer" })
            }
        }
        catch (error) {
            return response.send({ status: -1, Message: error })
        }
    })
}