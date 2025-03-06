import express from "express";
import route from "./routes/route.js";
import multer from "multer";

const app = express();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
})
const PORT = 3000;
const upload = multer();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.single('image'));

app.use("/user", route);

app.post("/form", (req, res) => {
  
  console.log(req.body);
  console.log(req.file);  // req.file contains the uploaded file object

  res.send("form resieved");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
