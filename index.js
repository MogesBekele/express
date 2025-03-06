import express from "express";
import route from "./routes/route.js";
import multer from "multer";

const app = express();

MONGODB_URL= 'mongodb+srv://mogesbekele32:moges123@cluster0.xcdr3.mongodb.net'

//mongodb+srv://mogesbekele32:<db_password>@cluster0.xcdr3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0



const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", route);

app.post("/form", (req, res) => {
  console.log(req.body);

  res.send("form received");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
