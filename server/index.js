const express = require("express");
const io = require("socket.io");
const cors = require("cors");

const port = process.env.PORT || 3001;

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// controllers
app.get("/", (req, res) => {
  res.json("Welcome to the chat app");
});

// listen
app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
