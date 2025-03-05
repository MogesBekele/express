import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to express");
});

app.post('/users', (req, res) => {
  const { name, emial } = req.body;
res.json({name, emial})
 
})

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
