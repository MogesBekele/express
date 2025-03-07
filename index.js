import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const PORT = 3000;
const app = express();

app.use(express.json()); // Add this line to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Add this line to parse URL-encoded bodies

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const users = [];
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);

  users.push({ username, password: hashPassword });

  res.send("User registered successfully");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  const create = await bcrypt.compare(password, user.password)

  if (!user || !create) {
    res.status(401).send("Invalid username or password");
    return;
  }
  
  const token = jwt.sign({ username }, "secretKey", { expiresIn: "1h" });
  res.json({ token });
});

app.get("/remove", (req, res) => {
  req.session.destroy();
  res.send("Logged out successfully");
});

app.get("/dashboard", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  const decodedToken = jwt.verify(token, "secretKey")

  if (decodedToken.username) {
    res.send("Welcome to the dashboard, " + decodedToken.username);
    
  }


});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
