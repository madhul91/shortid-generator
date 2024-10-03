const express = require('express');

const {mongodbconnect}=require('./connect');
const app = express();
app.use(express.json());
const urlroute= require("./routes/url");
app.use("/url",urlroute);


mongodbconnect("mongodb://localhost:27017/short-url")
.then(()=>console.log("Mongodb Connected")).catch(err=>console.log("mongo error",err));


// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 8000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
