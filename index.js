import express from "express";
import route from "./routes/route.js";


const app = express();



const PORT = 3000;


app.use("/user", route);

app.post("/form", (req, res) => {
  console.log(req.body);

  res.send("form received");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
