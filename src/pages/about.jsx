import Choices from "../components/about/choices"
import AboutHero from "../components/about/hero"
import Mission from "../components/about/mission"
import Team from "../components/about/team"
import WhyUs from "../components/about/why-us"
import ContactUs from "../components/home/contact"
import LatestAnnouncement from "../components/news/latest-announcements"
import Footer from "../components/utils/footer"
import Navbar from "../components/utils/navbar"
import backgound from "../hero/about.png"
const AboutRoute=()=>{
   return (
<div>
    <Navbar/>
    <AboutHero subtitle={'Know Us Better'} title={'About Us'} background={backgound}/>
    <LatestAnnouncement/>
    <WhyUs/>
    <Mission/>
    <Choices/>
    <Team/>
    <ContactUs/>
    <Footer/>
</div>
    )


}

export default AboutRoute