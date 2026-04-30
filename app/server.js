const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from Docker App" });
});

app.get("/api/test", (req, res) => {
  res.status(200).json({ success: true });
});

// app.get("/api/test", (req, res) => {
//   res.status(500).json({ success: false });
// });

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});