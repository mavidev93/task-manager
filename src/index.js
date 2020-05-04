// require("dotenv").config({
//   path: "./env/.env",
// });
require("./db/mongoose");
const multer = require("multer");
const express = require("express");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const app = express();
const port = process.env.PORT;

const upload = multer({
  dest: "images",
});

app.post("/upload", upload.single("upload"), (req, res) => {
  res.send();
});

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("server is up on " + port);
});
