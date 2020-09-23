const express = require("express");
const app = express();

app.get("/", (req, res) =>
  res.json({ msg: "welcome to the ContactKeeper API...." })
);
const PORT = process.env.Port || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
