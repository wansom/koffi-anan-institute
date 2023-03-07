import './App.css';
import Navbar from "./components/navbar";
import Hero from './components/hero';
import Services from "./components/services";
import ThinkTanks from './components/think-tanks';
import ContactUs from './components/contact';
import Footer from './components/utils/footer';
import EventSection from './components/events';
import ResearchProjects from './components/ResearchProjects';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
      <Hero/>
      <EventSection/>
      <Services/>
      <ResearchProjects/>
      <ThinkTanks/>
      <ContactUs/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
