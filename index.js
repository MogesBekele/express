import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/user/:name/:id([0-9]{4})", (req, res) => {
  const { name, id } = req.params;
  res.json({ name, id });
});



// Start the server  on the specified port
app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
