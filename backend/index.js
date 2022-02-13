const express = require("express");
const cors = require("cors");

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());

// ============================|| ROUTES ||============================ //
const userRouter = require("./routes/user.route.js");
const contentRouter = require("./routes/content.route.js");

server.use("/user", userRouter);
server.use("/content", contentRouter);

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
