import logo from './logo.svg';
import './App.scss';
import Header from './components/Header'
import Product from './components/Product';
import BaiTapComponent from './components/BaiTap/BaiTapComponent';
import Databinding from './components/Example/Databinding';
import HandleEvent from './components/Example/HandleEvent';
import Loop from './components/Example/Loop';
import Demostate from './components/Example/Demostate';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      <div className="container">
        <Header />
        <Product />
      </div> */}

      {/* <BaiTapComponent/> */}
      {/* <Databinding></Databinding> */}
      {/* <HandleEvent></HandleEvent> */}
      {/* <Loop></Loop> */}
      <Demostate></Demostate>
    </div>
  );
}

export default App;
