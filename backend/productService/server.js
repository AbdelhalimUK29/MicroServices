const express=require("express")
const dotenv=require("dotenv")
const cors=require("cors")
const connectDB=require("./config/db")
const router=require("./routes/productRoutes")
const path=require("path")

dotenv.config()

connectDB();

const app=express();

app.use(cors())

app.use(express.json())

// Serve static files from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/api/products",router)

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));