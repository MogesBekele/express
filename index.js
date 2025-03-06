import express from "express";
import route from "./routes/route.js";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/user", route);

app.post("/form", (req, res) => {
  console.log(req.body);

  res.send("form resieved");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
