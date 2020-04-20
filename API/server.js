const express = require('express');
const bodyParser = require('body-parser');
const PORT = 5000;

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res)=>{
    res.json({message:"Welcome to Police Report System"});
});

require("./app/routes/admin.route.js")(app);
require("./app/routes/policeofficer.route.js")(app);
require("./app/routes/fine.route.js")(app);
require("./app/routes/driver.route.js")(app);
require("./app/routes/bank.route.js")(app);
require("./app/routes/offense.route.js")(app);
require("./app/routes/vehicalcategory.route.js")(app);
require("./app/routes/payment.route.js")(app);
app.listen(PORT,()=>{
    console.log("Server is running on PORT : "+PORT);
});