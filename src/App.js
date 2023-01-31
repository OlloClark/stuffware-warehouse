import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Stuffware Warehouse. Everything is under control soon.
        </p>
        <a
          className="App-link"
          href="https://www.amazon.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pretty sure this link redirects to our store
        </a>
      </header>
    </div>
  );
}

export default App;
