import express from "express";
import route from "./routes/route.js";
import mongoose from "mongoose";

const app = express();


//mongodb+srv://mogesbekele32:<db_password>@cluster0.xcdr3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const PORT = 3000;

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
