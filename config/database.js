const mongoose =require("mongoose");
require("dotenv").config();
const dbConnect = ()=>
{
    mongoose.connect(process.env.DATA_BASE_URL)
    .then(()=>{
        console.log("db connected successfully")
    })
    .catch((error)=>{
        console.log(error);
    })
};

module.exports= dbConnect;