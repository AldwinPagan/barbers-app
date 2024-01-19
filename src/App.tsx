import logo from "./logo.svg";
import "./App.css";
import { Link, RouteComponentProps } from "@reach/router";
function App(props: RouteComponentProps) {
  return (
    <div className="App">
      <nav>
        <Link to="/auth/login">Login</Link>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
