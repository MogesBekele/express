import express from "express";
import route from "./routes/route.js";
import multer from "multer";

const app = express();

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.single("image"));

app.use("/user", route);

app.post("/form", (req, res) => {
  console.log(req.body);
  console.log(req.file); // req.file contains the uploaded file object

  res.send("form received");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
