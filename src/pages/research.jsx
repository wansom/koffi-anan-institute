import AboutHero from "../components/about/hero"
import AllResearch from "../components/research-projects/all-research"
import Footer from "../components/utils/footer"
import Navbar from "../components/utils/navbar"
import background from '../hero/research-program.png'

const ResearchProjects=()=>{
    return (
        <div>
            <Navbar/>
            <main>
                <AboutHero title={'Research Projects'} subtitle='Advancing Peace and Stability through Innovative Research' background={background}/>
               <AllResearch/>
            </main>
            <Footer/>
        </div>
    )
}
export default ResearchProjects
