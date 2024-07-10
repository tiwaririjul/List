import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { itemRouter } from "./routes/itemsRouter.js";

const app = express();

const PORT = 3001;

app.use(express.json());
app.use(cors());

// not required
const connectDB = async () => {
  try {
    const response = await mongoose.connect(
      "mongodb://localhost:27017/testing"
    );
    console.log("successfully connected to the database");
  } catch (error) {
    console.log("error while connecting to the database");
  }
};

connectDB();

app.use("/items", itemRouter);
// app.get("/", (req, res) => {
//   res.json("you are here");
// });

app.listen(PORT, () => {
  console.log("connected to the server port ", PORT);
});
