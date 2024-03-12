const express= require("express");
const app=express();
require("dotenv").config();
const dbConnect =require("./config/database");
const router =require("./routes/Auth")
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/api/v1",router);
app.get("/baba",()=>{
    res.send("Baba is Here")
})
dbConnect();
app.listen(PORT,()=>{
    console.log(`Server is started at :${PORT}`);
})