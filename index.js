import express from "express";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});


//synchronous error
app.get("/error", (req, res, next) => {
  try {
    throw new Error("An error occurred");
    
  } catch (error) {
    
  }


})



// app.get("/api/products", (req, res) => {
//   const products = [
//     { id: 1, name: "Product 1", price: 100 },
//     { id: 2, name: "Product 2", price: 200 },
//     { id: 3, name: "Product 3", price: 300 },
//   ];

//   res.status(200).json(products);
// });

// // for single products
// app.get("/api/products/:id", (req, res) => {
//   const products = [
//     { id: 1, name: "Product 1", price: 100 },
//     { id: 2, name: "Product 2", price: 200 },
//     { id: 3, name: "Product 3", price: 300 },
//   ];

//   const product = products.find((p) => p.id === Number(req.params.id));
//   if (!product) {
//     return res.status(404).send("Product not found");
//   }

//   res.status(200).json(product);
// });

// //create a new product

// app.post("/api/products", (req, res) => {
//   const product = req.body;
//   product.id = Date.now();
//   if (!product.name || !product.price) {
//     return res.status(400).send("Name and price are required");
//   }
//   res.status(201).json(product);
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
//200 for successfuly get request
//201 for successfuly post request
//204 for pu and delete
// 4xx for client error like bad request
//5xx for server error
// const users = [];
// app.post("/register", async (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     return res.status(400).send("Username and password are required");
//   }

//   const hashPassword = await bcrypt.hash(password, 10);
//   users.push({ username, password: hashPassword });

//   res.send("User registered successfully");
// });

// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     return res.status(400).send("Username and password are required");
//   }

//   const user = users.find((u) => u.username === username);
//   if (!user) {
//     return res.status(401).send("Invalid username or password");
//   }

//   const isPasswordValid = await bcrypt.compare(password, user.password);
//   if (!isPasswordValid) {
//     return res.status(401).send("Invalid username or password");
//   }

//   const token = jwt.sign({ username }, "secretKey", { expiresIn: "1h" });
//   res.json({ token });
// });

// app.get("/dashboard", (req, res) => {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.status(403).send("Unauthorized");
//   }

//   try {
//     const decodedToken = jwt.verify(token, "secretKey");
//     res.send("Welcome to the dashboard, " + decodedToken.username);
//     console.log(token)
//   } catch (err) {
//     res.status(403).send("Unauthorized");
//   }
// });
