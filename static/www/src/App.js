import logo from './logo.svg';
import './App.css';
import * as wasm from "jdrp-wasm";


function App() {

  React.useEffect(() => {
    loadWasm();
  }, []);
  
  loadWasm = async () => {
    try {
      const wasm = await import('jdrp-wasm');
      this.setState({wasm});
    } catch(err) {
      console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
    }
  };
  
  console.log(wasm.xp_state());
  
  const { wasm = {} } = this.state;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
