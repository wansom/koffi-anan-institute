import './App.css';
import Navbar from "./components/navbar";
import Hero from './components/hero';
import Services from "./components/services";
import ThinkTanks from './components/think-tanks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      </header>
      <Hero/>
      <Services/>
      <ThinkTanks/>
    </div>
  );
}

export default App;
