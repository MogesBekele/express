import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
  // Set a cookie
  res.cookie("myCookie", "express-app");


});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
