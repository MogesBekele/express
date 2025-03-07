import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());

const PORT = 3000;

app.get("/", (req, res) => {
  // Set a cookie
  res.cookie("name", "express-app", {maxAge: 3000});
  res.send("Hello, World!");
});

app.get("/fetch", (req, res) => {
  // Get the cookie
  console.log(req.cookies)
  res.send("Cookie value: " + req.cookies.myCookie);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
