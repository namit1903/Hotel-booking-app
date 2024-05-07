import express from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';


mongoose.connect(process.env.MONGODB_CONNECTION_DTRING as string);

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get("/api/test",async(req, res) => {
res.json({message:"hello from express Endpoint"})

})
app.listen(5000,()=>{
  console.log("server is running on port 5000")
})
