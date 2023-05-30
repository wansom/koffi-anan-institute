import AboutHero from "../components/about/hero";
import Footer from "../components/utils/footer"
import Navbar from "../components/utils/navbar"
import backgound from "../hero/publications.png";

const Publications=()=>{
return (
    <>
    <Navbar/>
    <AboutHero title={'Publications'} subtitle={'Learning Resources'} background={backgound}/>
    <Footer/>
    </>
)
}
export default Publications