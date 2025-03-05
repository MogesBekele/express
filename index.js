import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/user/:name/:id", (req, res) => {
  const { name, id } = req.params;
  res.json({ name, id });
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;
  res.json({ name, email });
});
app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  // update user with given id
  res.json({
    message: `update ${name}, ${email} and ${userId}`,
  });
});

app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  // delete user with given id
  res.json({
    message: `delete user with id ${userId}`,
  });
});
app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
