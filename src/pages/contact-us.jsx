import AboutHero from "../components/about/hero"
import ContactUs from "../components/home/contact"
import Footer from "../components/utils/footer"
import Navbar from "../components/utils/navbar"
import backgound from "../hero/contact.png"


const ContactUsRoute=()=>{

    return (
        <div>
            <Navbar/>
            <AboutHero title={'Contact Us'} subtitle={'Get In Touch'} background={backgound}/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}
 export default ContactUsRoute