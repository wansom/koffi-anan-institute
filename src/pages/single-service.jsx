import AboutHero from "../components/about/hero"
import Footer from "../components/utils/footer"
import Navbar from "../components/utils/navbar"
import background from "../hero/teaching-and-training.png";
const SingleService=()=>{

    return(
        <>
        <Navbar/>
        <AboutHero title={'Teaching & Training'} subtitle={'LEARNING'} background={background}/>
        <main>
        <section class="courses">
            <div class="training-courses-container container">
                <div class="train-course">
                    <div class="left">
                        <img src="images/services/masters.png" alt=""/>
                    </div>
                    <div class="right">
                        <div class="train-course-card right-card">
                            <h2>Master’s Program</h2>
                            <p>The program is designed to equip students with the skills and knowledge necessary to
                                address conflict and promote peace in their communities and beyond.</p>
                            <a href="program.html">Course Details
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_591_387" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0"
                                        y="0" width="20" height="20">
                                        <rect width="20" height="20" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_591_387)">
                                        <path
                                            d="M7.83268 15L6.66602 13.8333L10.4993 10L6.66602 6.16667L7.83268 5L12.8327 10L7.83268 15Z"
                                            fill="#FCFCFC" />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="train-course">
                    <div class="right">
                        <div class="train-course-card left-card">
                            <h2>Diploma Program</h2>
                            <p>The program is designed to equip students with the skills and knowledge necessary to
                                address conflict and promote peace in their communities and beyond.</p>
                            <a href="program.html">Course Details
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_591_387" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0"
                                        y="0" width="20" height="20">
                                        <rect width="20" height="20" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_591_387)">
                                        <path
                                            d="M7.83268 15L6.66602 13.8333L10.4993 10L6.66602 6.16667L7.83268 5L12.8327 10L7.83268 15Z"
                                            fill="#FCFCFC" />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="left">
                        <img src="images/services/diploma.png" alt=""/>
                    </div>
                </div>
                <div class="train-course">
                    <div class="left">
                        <img src="images/services/certificate.png" alt=""/>
                    </div>
                    <div class="right">
                        <div class="train-course-card right-card">
                            <h2>Certificate Program</h2>
                            <p>The program is designed to equip students with the skills and knowledge necessary to
                                address conflict and promote peace in their communities and beyond.</p>
                            <a href="program.html">Course Details
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_591_387" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0"
                                        y="0" width="20" height="20">
                                        <rect width="20" height="20" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_591_387)">
                                        <path
                                            d="M7.83268 15L6.66602 13.8333L10.4993 10L6.66602 6.16667L7.83268 5L12.8327 10L7.83268 15Z"
                                            fill="#FCFCFC" />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
        <Footer/>
        </>
    )
}
export default SingleService