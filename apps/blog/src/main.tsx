import { createRoot } from "react-dom/client";
import "./style.css";
import { Header, Counter } from "@repo/ui";

const App = () => (
  <div>
    <Header title="Blog" />
    <div className="card">
      <Counter />
    </div>
  </div>
);

createRoot(document.getElementById("app")!).render(<App />);
