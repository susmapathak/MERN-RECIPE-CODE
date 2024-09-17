import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';

import { userRouter } from "./routes/users.js";
import { recipeRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipeRouter);

mongoose.connect(
  "mongodb+srv://suspathak21:Password123@recipes.wr4q7lj.mongodb.net/?retryWrites=true&w=majority&appName=recipes",
  {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  }
);

app.listen(3001, () => console.log("Server Started"));