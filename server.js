const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    msg: "Welcome to the app",
  });
});

app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretKey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        msg: "Welcome to the Post",
        authData,
      });
    }
  });
});

app.post("/api/login", (req, res) => {
  // Mock User
  const user = {
    id: 1,
    name: "Akshay",
    email: "akshay@gmail.com",
  };

  jwt.sign({ user: user }, "secretKey", { expiresIn: "60s" }, (err, token) => {
    res.json({
      token: token,
    });
  });
});

function verifyToken(req, res, next) {
  // get auth header value
  const bearerHeader = req.headers["authorization"];

  // check typeof bearerHeader
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

app.listen(5000, () => console.log(`running on post 5000...`));
