import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());

//middleware

app.use('/welcome',(req, res, next) => {
  console.log(`a new requesr resieved at ` + Date.now());
  next();
});

//routes
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/welcome", (req, res) => {
  res.send('express middleware')
});



// Start the server  on the specified port
app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
