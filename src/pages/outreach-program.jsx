import AboutHero from "../components/about/hero"
import Footer from "../components/utils/footer"
import Navbar from "../components/utils/navbar"
import background from '../hero/outreach-programs.png'

const OutreachProgram=()=>{
    return (
        <div>
            <Navbar/>
            <main>
                <AboutHero title={'Outreach Programs'} subtitle='Building Peaceful Communities Together.' background={background}/>
            </main>
            <Footer/>
        </div>
    )
}
export default OutreachProgram