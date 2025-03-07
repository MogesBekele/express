import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();
app.use(cookieParser());
app.use(session());


const PORT = 3000;

app.get("/", (req, res) => {
 
  res.send("Hello, World!");
});




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
