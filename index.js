import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());

//ejs

app.set('view engine', 'ejs');

app.get('/home', (req, res) => {
  res.render('home', {
    title: 'My Home Page',
    message: 'Welcome to my website!'
  });
});

//routes
app.get("/", (req, res) => {
  res.send("Welcome");
  console.log("middle");
});



// Start the server  on the specified port
app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
