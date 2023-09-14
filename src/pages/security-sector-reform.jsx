import AboutHero from "../components/about/hero"
import Footer from "../components/utils/footer"
import Navbar from "../components/utils/navbar"
import background from '../hero/ssr.jpg'

const SecurityReforms = () => {
    return (
        <div>
            <Navbar />
            <main>

                <AboutHero title={'Security Sector Reform Think Tank'} subtitle={'Think Tank'} background={background}></AboutHero>
                <section className="think-single">
                    <div className="think-single-container container mx-auto px-5 lg:px-10">
                        <h2 className="think-head">Overview</h2>
                        <p className="think-p">
                            The Security Sector Reform Think Tank (SSR Think Tank) seeks to strengthen civil society-security sector relations and to create knowledge on Liberia’s security challenges. The SSR Think Tank thereby strengthens Liberian capacities and ownership of security institutions, and promotes an accountable, democratically oriented and human rights protecting security sector. Within this framework, KAICT is undertaking research on the development of the security situation and the justice sector. The Think Tank is dedicated to promoting dialogue between the security sector and society, and offers training on security-related matters.
                        </p>

                        <h2 className="think-head">SECURITY SECTOR REFORM DIALOGUES</h2>
                        <p className="think-p">KAICT has regularly held the public Security Sector Reform Dialogues, which take place about six times a year (2016-19). These usually feature senior security sector officials and civil society members as panelists engaging in discussions with an audience from the security sector, civil society and the student population. The Dialogues create opportunities for debate and cooperation between security sector professionals, civil society and academia. They are intended to stimulate reflection within the security sector, provide an opportunity for exchange of opinion between civil society, security actors and academia, and thereby promote a culture of open debate of security matters and contribute to civilian oversight.</p>
                        <h2 className="think-head">RESEARCH</h2>
                        <p className="think-p">Our research focuses on a wide range of security sector reform topics, including but not limited to</p>

                        <div className="comm-engage">
                            <div className="comm-row flex flex-col md:flex-row gap-10">
                                <div className="comm-card">
                                    <h2>1.</h2>
                                    <p>Disarmament, Demobilization, Rehabilitation & Reintegration</p>
                                </div>
                                <div className="comm-card">
                                    <h2>2. </h2>
                                    <p>
                                        Mental Health in the Military and the Executive Protection Service
                                    </p>
                                </div>
                            </div>
                            <div className="comm-row flex flex-col md:flex-row gap-10">
                                <div className="comm-card">
                                    <h2>3.</h2>
                                    <p>Security Sector Reform </p>
                                </div>

                                <div className="comm-card">
                                    <a href="/researchProject/MOWIP-project">
                                        <h2>4.</h2>
                                        <p>Women’s Participation in UN Peace Operations</p>
                                    </a>

                                </div>
                            </div>
                        </div>

                        <h2 className="think-head">TRAINING</h2>
                        <p className="think-p">The SSR Think Tank also offers training courses, in particular for security sector personnel and civil society activists. The trainings focus on strengthening democratic attitudes, respect for human rights, and sensitivity to gender disparities.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )

}
export default SecurityReforms