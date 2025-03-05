import express from "express";

import router from "./routes/route.js";

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/user", router);


// Start the server on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
