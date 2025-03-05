import express from "express";
import ejs from "ejs";
const app = express();

const PORT = 3000;

app.use(express.json());

//ejs

app.set('view engine', 'ejs');


//routes
app.get("/", (req, res) => {
 const username = 'john'
  res.render('index', { username });

});



// Start the server  on the specified port
app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
