import express from "express";
import mongoose from "mongoose";
import connectDB from "./configs/dbConnect";
import cors from "cors";
import corsOptions from "./configs/corsOptions";
import router from "./router";

const app = express();
const PORT = 3500;

connectDB();

app.use(cors(corsOptions));

app.use(express.json());

app.use(router);

app.all("*", (req, res) => {
  res.status(404).json({ message: "404 Not Found" });
});

mongoose.connection.once("open", () => {
  app.listen(PORT, () => console.log("Server running on port:" + PORT));
});

mongoose.connection.on("error", (err: Error) => {
  console.log(err);
});
