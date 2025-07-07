import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import typescriptLogo from "/typescript.svg";
import { Header, Counter } from "@repo/ui";

const App = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://10.40.10.31:5000/")
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
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img
          src={typescriptLogo}
          className="logo vanilla"
          alt="TypeScript logo"
        />
      </a>
      <Header title="Web" />
      <div className="card">
        <Counter />
      </div>

      <div>
        <h2>Livros</h2>
        {error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <ul>
            {books.map((book: any, index) => (
              <li key={index}>{JSON.stringify(book)}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

createRoot(document.getElementById("app")!).render(<App />);
