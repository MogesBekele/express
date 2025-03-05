import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());


//middleware

app.use((req, res, next) => {

  console.log(`a new requesr resieved at ` + Date.now())
  next();
})

app.get("/", (req, res) => {
res.send('Welcome')
});



// Start the server  on the specified port
app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
