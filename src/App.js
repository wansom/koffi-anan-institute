import './App.css';
import Navbar from "./components/navbar";
import Hero from './components/hero';
import Services from "./components/services";
import ThinkTanks from './components/think-tanks';
import ContactUs from './components/contact';
import Footer from './components/utils/footer';
import EventSection from './components/events';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      </header>
      <Hero/>
      <EventSection/>
      <Services/>
      <ThinkTanks/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
