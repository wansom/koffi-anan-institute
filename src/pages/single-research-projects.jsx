import AboutHero from "../components/about/hero"
import Footer from "../components/utils/footer"
import Navbar from "../components/utils/navbar"
import background from '../hero/research-program.png'

const SingleResearchProject=()=>{
    return (
        <div>
            <Navbar/>
            <main>
            <AboutHero title={'Hope for a Better Future: Building Collaborative Resilience for Youth in Liberia'} subtitle='Research Projects' background={background}/>
            </main>
         <Footer/>
        </div>
    )
}
export default SingleResearchProject