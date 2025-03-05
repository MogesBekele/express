import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());

//ejs
app.use(express.static('public'))


app.get("/", (req, res) => {
  res.send('wellocome')
});

// Start the server  on the specified port
app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
