import './App.css';
import Navbar from "./components/navbar";
import Hero from './components/hero';
import Services from "./components/services"
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar></Navbar>
      </header>
      <Hero></Hero>
      <Services></Services>
    </div>
  );
}

export default App;
