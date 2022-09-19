require("dotenv").config();

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
mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{
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

const path = require("path");

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.get('*',function (req,res){
    res.sendFile(path.resolve(__dirname, "./client/build","index.html"));
});

app.listen(PORT,() =>{
    console.log(`server running on port ${PORT}`);
});