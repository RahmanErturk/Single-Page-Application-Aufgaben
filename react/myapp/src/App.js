import logo from "./logo.svg";
import "./App.css";

function App() {
  const headline = "React";
  const text = "Lorem Ipsum dolor sit amet.";
  const headline2 = <h2>This is a headline.</h2>;
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello React!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <img src={logo} alt="logo" />
        <h1 className="title">{headline}</h1>
        {headline2}
        <label htmlFor="email">E-Mail</label>
        <input id="email" type="email"></input>
        {/* <input id="email" type="email" /> Das funktioniert auch und ist gleich mit dem obigen Ausdruck. */}
        <p>{text}</p>
      </header>
    </div>
  );
}

export default App;
