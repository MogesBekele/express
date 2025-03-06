import express from "express";
import route from "./routes/route.js";
import multer from "multer";
import { storage } from "./config/multer.js";

const app = express();

const upload = multer({
  storage,
  limits: { fileSize: 1000000 }, // 1MB
});

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/user", route);

app.post("/form", (req, res) => {
  console.log(req.body);
  console.log(req.file); // req.file contains the uploaded file object

  res.send("form received");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
