import logo from "./logo.svg";
import "./App.css";

// Komponenten müssen mit einem Großbuchstaben anfangen
const HelloMuc = () => {
  return <p>Hello Muc-3</p>;
};

const HelloHeader = () => {
  return <h1>Ich bin eine H1</h1>;
};

const HelloFooter = () => {
  return (
    <footer className="app__footer">
      <ul>
        <li>Link1</li>
        <li>Link2</li>
        <li>Link3</li>
      </ul>
    </footer>
  );
};

function App() {
  // ab hier JSX
  return (
    <div className="App">
      <header className="App-header">
        <HelloHeader />
        <img src={logo} className="App-logo" alt="logo" />
        <HelloMuc /> {/* Hauptcontainer */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <HelloFooter />
    </div>
  );
}

export default App;
