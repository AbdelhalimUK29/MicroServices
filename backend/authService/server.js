const express =require("express");
const dotenv=require("dotenv");
const connectDB=require("./config/db")
const router =require("./routes/authRoutes")
const cors=require("cors")

dotenv.config();

connectDB();

const app=express();
app.use(cors());

app.use(express.json())


app.use("/api/auth",router);

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`server running on port ${PORT}`))
