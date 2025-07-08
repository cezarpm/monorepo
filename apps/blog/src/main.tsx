import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { Header, Counter, BookItem } from "@repo/ui";

const App = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => {
        if (!res.ok) throw new Error("Erro na resposta da API");
        return res.json();
      })
      .then((data) => setBooks(data))
      .catch((err) => {
        console.error("Erro ao buscar livros:", err);
        setError("Não foi possível carregar os livros.");
      });
  }, []);

  return (
    <div>
      <Header title="Blog" />
      <div className="card">
        <Counter />
      </div>

      <div className="card">
        <h2>Livros</h2>
        {error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <ul>
            {books.map((book: any, index) => (
              <BookItem key={index} book={book} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

createRoot(document.getElementById("app")!).render(<App />);
