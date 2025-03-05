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
app.put('/users/:id', (req, res) => {
  const userId  = req.params.id;
  const { name, emial } = req.body;
  // update user with given id
  res.json({id: userId, name, emial})

 
 
})
app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
