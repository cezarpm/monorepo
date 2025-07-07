const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors()); // <-- Permite CORS para todas as origens por padrão

const books = [
  { id: 1, title: "O Hobbit", author: "J.R.R. Tolkien" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "Dom Casmurro", author: "Machado de Assis" },
  { id: 4, title: "Senhor dos anéis", author: "J.R.R. Tolkien" },
];

app.get("/", (req, res) => {
  res.send("Hello from Express 🚀");
});

app.get("/books", (_req, res) => {
  res.json(books);
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
