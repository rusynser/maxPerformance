
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://maxPerformanceDB:maxPerformance123@maxperformance.f203yk9.mongodb.net/?retryWrites=true&w=majority");

app.listen(3001,()=>console.log("Server Started"));

