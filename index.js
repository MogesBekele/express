import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";

const PORT = 3000;
const app = express();

app.use(express.json()); // Add this line to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Add this line to parse URL-encoded bodies
app.use(cookieParser());
app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false,
    //cookie: { secure: false }  // Set secure to false for development environment. In production, set secure to true.  // This will make the cookie accessible only over HTTP (not HTTPS)
  })
);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const users = [];
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  users.push({ username, password });

  res.send("User registered successfully");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);

  if (!user || user.password !== password) {
    res.status(401).send("Invalid username or password");
    return;
  }
  req.session.user = user;
  res.send("Logged in successfully");
});

app.get('/remove', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).send("Failed to destroy session");
    }
    res.send("Session destroyed successfully");
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
