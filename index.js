import express from "express";
import route from "./routes/route.js";

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/user", route);

app.post("/form", (req, res) => {
  const form = req.body;

  console.log(form);

  res.send("fporm resieved");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
