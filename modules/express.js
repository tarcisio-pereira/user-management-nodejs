const express = require("express");

const UserModel = require("../src/models/user.model");

const app = express();

app.use(express.json());

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200);
  res.send("<h1> Helo word </h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "Jhon Doe",
      email: "jhon@done.com",
    },
    {
      name: "Jane Doe",
      email: "Jane@done.com",
    },
  ];
  res.status(200);
  res.json(users);
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () =>
  console.log(
    `Start serve with Espress in port ${port}! - http://localhost:${port}`
  )
);
