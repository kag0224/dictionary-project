import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary Project</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Kristy-Ann and open-sourced on{" "}
            <a
              href="https://github.com/kag0224/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              GitHub{" "}
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
