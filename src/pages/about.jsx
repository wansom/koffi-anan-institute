import Choices from "../components/about/choices"
import AboutHero from "../components/about/hero"
import Mission from "../components/about/mission"
import Team from "../components/about/team"
import WhyUs from "../components/about/why-us"
import ContactUs from "../components/home/contact"
import Footer from "../components/utils/footer"
import Navbar from "../components/utils/navbar"
import backgound from "../hero/about.png"
import { useState, useEffect } from "react";
import { getData } from "../services";
const AboutRoute=()=>{
   const [staff, setstaff] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch('https://kacit.twafwane.com/wp-json/wp/v2/staff')
  .then(response => response.json())
  .then(posts => {
    const promises = posts.map(post => {
      return fetch(`https://kacit.twafwane.com/wp-json/wp/v2/media/${post.featured_media}`)
        .then(response => response.json())
        .then(media => {
          post.featured_image_url = media.source_url;
          return post;
        });
    });
    return Promise.all(promises);
  })
  .then(posts => {
    setstaff(posts)
  })
  .catch(error => console.error(error));

    }, []);
   return (
<div>
    <Navbar/>
    <AboutHero subtitle={'Know Us Better'} title={'About Us'} background={backgound}/>
    <WhyUs/>
    <Mission/>
    <Choices/>
    <Team loading={loading} staff={staff}/>
    <ContactUs/>
    <Footer/>
</div>
    )


}

export default AboutRoute