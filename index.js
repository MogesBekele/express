import express from "express";
import route from "./routes/route.js";
import mongoose from "mongoose";

const app = express();



const PORT = 3000;

const MONGODB_URI = 'mongodb+srv://mogesbekele32:<db_password>@cluster0.xcdr3.mongodb.net/express'

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Connected to MongoDB");
});

app.use("/user", route);

app.post("/form", (req, res) => {
  console.log(req.body);

  res.send("form received");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
