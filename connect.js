const mongoose=require("mongoose");
mongoose.set("strictQuery",true);

async function mongodbconnect(url){
    return mongoose.connect(url);
}
module.exports={mongodbconnect};