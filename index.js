import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());

//middleware

app.use((req, res, next) => {
  console.log("Middleware: Request Received");
  next();
});



//routes
app.get("/", (req, res) => {
  res.send("Welcome");
  console.log('middle')
});




// Start the server  on the specified port
app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
