import './App.css';
import Navbar from "./components/utils/navbar";
import Hero from './components/home/hero';
import Services from "./components/home/services";
import ThinkTanks from './components/home/think-tanks';
import ContactUs from './components/home/contact';
import Footer from './components/utils/footer';
import EventSection from './components/home/events';
import ResearchProjects from './components/home/ResearchProjects';
function App() {

  return (
    <div className="App overflow-x-hidden">
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
