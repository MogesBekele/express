import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const users = [];
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("Username and password are required");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashPassword });

  res.send("User registered successfully");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("Username and password are required");
  }

  const user = users.find((u) => u.username === username);
  if (!user) {
    return res.status(401).send("Invalid username or password");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).send("Invalid username or password");
  }

  const token = jwt.sign({ username }, "secretKey", { expiresIn: "1h" });
  res.json({ token });
});

app.get("/dashboard", (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).send("Unauthorized");
  }

  try {
    const decodedToken = jwt.verify(token, "secretKey");
    res.send("Welcome to the dashboard, " + decodedToken.username);
  } catch (err) {
    res.status(403).send("Unauthorized");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
