const express= require("express");
const {handleshorturl}=require("../controllers/url");

const router=express.Router();

router.post("/",handleshorturl);

module.exports=router;