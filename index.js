const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

//import models
require('./models/Customer');
require('./models/Transaction');

//connect to DB
mongoose.connect(`mongodb://localhost:27017/SparksBankingSystemDB`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log("MongoDB has been connected"))
.catch((err)=> console.log(err));


//middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//import routes
require('./routes/customerRoute.js')(app)
require('./routes/transactionRoute.js')(app)

const PORT = process.env.PORT || 5000;

app.listen(PORT,() =>{
    console.log(`server running on port ${PORT}`);
});