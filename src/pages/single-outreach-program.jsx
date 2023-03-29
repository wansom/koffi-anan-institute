import AboutHero from "../components/about/hero"
import Footer from "../components/utils/footer"
import Navbar from "../components/utils/navbar"
import  background from '../hero/single-program.png'

const SingleOutreachProgram=()=>{
    return (
        <div>
            <Navbar/>
            <main>
                <AboutHero title={'Community Engagement'} subtitle='Outreach Programs' background={background}/>
            </main>
            <Footer/>

        </div>
    )
}
export default SingleOutreachProgram