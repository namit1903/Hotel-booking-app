import express from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";


mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.use(cors());
//endpoints
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.get("/api/test",async(req, res) => {
res.json({message:"hello from express Endpoint"})

})
app.listen(5000,()=>{
  console.log("server is running on port 5000")
})
