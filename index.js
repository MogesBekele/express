import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());

//middleware



//routes
app.get("/", (req, res) => {
  res.send("Welcome");
  console.log('middle')
});

app.get('/error', ()=>{
  throw new Error('Something went wrong');

})
















// Start the server  on the specified port
app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
