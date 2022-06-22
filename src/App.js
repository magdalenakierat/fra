import logo from "./logo.svg";
import "./App.css";

// Unterkomponenten
// Komponenten müssen mit einem Großbuchstaben anfangen
const HelloMuc = () => {
  return <p>Hello Muc-3</p>;
};

const HelloH1 = () => {
  return <h1>Ich bin eine H1</h1>;
};

const HelloHeader = () => {
  return (
    <header className="App-header">
      <HelloH1 />
    </header>
  );
};

const HelloMain = () => {
  return <main></main>;
};

const HelloFooter = () => {
  return (
    // in Komponenten muss className statt class verwendet werden
    <footer className="app__footer">
      <ul>
        <li>Link1</li>
        <li>Link2</li>
        <li>Link3</li>
      </ul>
    </footer>
  );
};

// Hauptkomponente
function App() {
  // ab hier JSX
  return (
    <div className="App">
      <HelloHeader />
      <HelloMain />
      <HelloFooter />
    </div>
  );
}

export default App;
