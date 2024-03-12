const express =require("express");
const router=express.Router();
const user=require("../models/userSchema")
const bcrypt =require("bcrypt");
router.post("/signup",async(req,res)=>{
    try{
        
        const {name,email,password} =req.body;

        if(!name || !email || !password)
        {
            return res.status(404)
            .json({
                success:false,
                message:"Please enter all the fields"
            })
        };

        const userExist = await user.findOne({email:email});

        if(userExist)
        {
            return res.status(400)
            .json({
                success:false,
                message:"User already registered"
            })
        };

        const hashedPassowrd = await bcrypt.hash(password,10);

        if(hashedPassowrd)
        {
            const newUser =await user.create({
                name,
                email,
                password:hashedPassowrd
            });    
            return res.status(200)
            .json({
                success:true,
                message:"User created Successfully",
                newUser,
            })
        }
        

        return res.status(400)
        .json({
            success:false,
            message:"Password Not hashed",
            newUser,
        })
      


    }catch(error)
    {
        console.log(error);
        return  res.status(500)
        .json({
            success:false,
            message:"Somthing Went wrong in this route",
        })
    }
});


router.get("/home",(req,res)=>{
    res.send("This is Home Page")
})

module.exports=router