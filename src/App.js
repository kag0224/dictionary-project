import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary Project</header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This{" "}
            <a
              href="https://github.com/kag0224/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              open-sourced
            </a>{" "}
            project was coded by Kristy-Ann and hosted on{" "}
            <a
              href="https://charming-florentine-dd05c9.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}
