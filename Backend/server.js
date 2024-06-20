import express from "express";
import dotenv from "dotenv";


import authRoutes from "./routes/authRoutes.js";
import connectToMongoDB from "../Backend/DB/connectToMongoDB.js";


const app = express();
const PORT = 5000;


dotenv.config();


app.use(express.json());
app.use("/api/auth", authRoutes);



app.get("/" , (req , res) => {
    res.send("Hello lets Start.....")
})


app.listen(PORT , () => {
    connectToMongoDB();
    console.log(`Server Running on Port ${PORT}`)
});