const jwt = require("jsonwebtoken");
const User=require("../models/User");

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:"1h",
    });

};

exports.registerUser= async (req,res)=>{
    const {name,email,password}=req.body;
    try{
        const exist= await User.findOne({email})
        if(exist){
            res.status(401).json({message:"email already exist"})
        }else{

            const user=new User({
             name,email,password
            });
            await user.save();
            res.status(201).json({
             _id:user._id,
             name:user.name,
             email:user.email,
             token:generateToken(user._id)
            });    
        }  
    }catch(err){
        res.status(500).json({message:err.message})
    }
};
exports.loginUser= async (req,res)=>{
    const {email,password}=req.body;
    try{
       const user = await User.findOne({email})  ;
       if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id),
        })
       }else{
        res.status(401).json({message:"invalid email or password"})
       }
    }catch(err){
        res.status(500).json({message:err.message})
    }
};