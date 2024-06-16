const mongoose=require("mongoose")
const dotenv=require("dotenv")

dotenv.config();

const connectDB= async ()=>{
    try{

        await mongoose.connect("mongodb://0.0.0.0:27017/product-service")
        console.log("MongoDb Connected")
    }catch(err){
        console.log(err)
        console.log("not connected")
        process.exit(1);
    }

}

module.exports = connectDB;
