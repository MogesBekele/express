import express from "express";
import route from "./routes/route.js";
import multer from "multer";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", route);
app.use(upload.array())

app.post("/form", (req, res) => {
  const {email, password}= req.body
  console.log(email, password);

  res.send("form resieved");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
