const express = require("express");
const app = express();
const PORT = 5000;

const books = [
  { id: 1, title: "O Hobbit", author: "J.R.R. Tolkien" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "Dom Casmurro", author: "Machado de Assis" },
];

app.get("/", (req, res) => {
  res.send("Hello from Express 🚀");
});

// Rota GET /books
app.get("/books", (_req, res) => {
  res.json(books);
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
