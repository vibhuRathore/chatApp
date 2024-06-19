import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";


const app = express();



dotenv.config();
const PORT = 5000;




app.get("/" , (req , res) => {
    res.send("Hello lets Start.....")
})


app.use("/api/auth", authRoutes);

app.listen(PORT ,  () => console.log(`Server Running on Port ${PORT}`));