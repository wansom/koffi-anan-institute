import React from 'react'
import Navbar from '../components/utils/navbar'
import Footer from '../components/utils/footer'
import AboutHero from '../components/about/hero'
import backgound from "../hero/research-program.png"


function PartnershipsCollaborations() {
  return (
    <div>
        <Navbar />
        <AboutHero title={'Partnerships & Collaborations'} subtitle={'Partnership'} background={backgound}/>

        <section className="think-single">
            <div className="think-single-container container">

                <div>
                    <h2 className="think-head">AGIAMONDO e.V. <br/> Civil Peace Service, Germany</h2>
                    <p className="think-p">
                    AGIAMONDO has been our partner since 2010, supporting the institute through the secondment of
                    a Civil Peace Service Worker who supports KAICT in attracting funding, implementing projects,
                    organizing events and developing institutional capacities.
                    </p>
                    <p className="think-p">
                        AGIAMONDO e.V., formerly known as the Association for Development Cooperation (AGEH), is the
                        German Catholic personnel service for international cooperation. It is one of nine officially-recognized
                        organizations that deploys development workers in accordance with the German Development Aid Workers Act (EhfG).
                        AGIAMONDO is also one of the founding members of the German Civil Peace Service and deploys Civil Peace Service Workers throughout the world.
                    </p>
                </div>

                <div className="card">
                    <h2 className="think-head">Center for Global Affairs <br/> New York University (NYU), United States</h2>
                    <p className="card-description">
                        The Kofi Annan Institute has been hosting visiting students from the Master’s in Global Affairs at New York University since 2011, offering Master students the opportunity to develop and implement a small research project in collaboration with staff at KAICT. Students get the chance to deepen their knowledge and understanding of research processes and to learn more about Liberia, a country affected by 14 years of civil wars.
                    </p>
                    <h3 className="card-subtitle">Past projects:</h3>
                    <ul className="card-projects">
                        <li>An Assessment of the DDRR Process and Integration of Ex-Combatants and its Impact on Fragile Peace in Liberia (2023)</li>
                        <li>Liberia’s Democratic Election in 2017 – Opportunities and Challenges for Peaceful Political Competition (2017)</li>
                        <li>Examining the Aftermath of Ebola (2016)</li>
                    </ul>
                    <p className="card-note">These research projects are captured under the Workshop in Applied Peacebuilding (Course Number GLOB1-GC2350).</p>
                </div>

                <div className="card">
                    <h2 className="think-head">School of Conflict Management, Peacebuilding and Development, Kennesaw State University (KSU)<br/> United States Agency for International Development (USAID), United States</h2>
                    <p className="card-description">
                        The Kofi Annan Institute for Conflict Transformation is implementing the project Hope for a Better Future:
                        Building Collaborative Resilience for Youth in Liberia (2022-27), together with four partners: Kennesaw State University (KSU),
                        Sovereignty First (United States), Trends Global (United States), and the National Commission for Justice, Peace and Caritas (NCJPC, Liberia).
                        This co-creation project is implemented with support from and in collaboration with the United States Agency for International Development
                        (USAID).
                    </p>
                </div>


                {/* <h2 className="think-head">Research</h2>
                <p className="think-p">Our research focuses on a wide range of security sector reform topics, including but
                    not limited to:</p> */}

                    <div className="flex flex-col p-4">
                        <div className="card mb-4">
                            <h4 className="text-xl font-bold mb-4 think-head">Former Collaborating Partners include:</h4>
                            <h3 className="text-lg font-bold">Academic Institutes:</h3>
                            <ul className="list-disc ml-6 mb-4">
                            <li>African Centre for Peace and Conflict Studies (Africa Centre; now The John & Elnora Ferguson Centre for African Studies, JEFCAS, Department of Peace Studies, University of Bradford, United Kingdom)</li>
                            <li>King’s College London, United Kingdom</li>
                            <li>International Growth Center (IGC), London School of Economics (Funder: UK Foreign, Commonwealth and Development Office (FCDO), The Rockefeller Foundation), United Kingdom</li>
                            </ul>
                        </div>
                        <div className="card mb-4">
                            <h3 className="text-lg font-bold">Governmental Organizations:</h3>
                            <ul className="list-disc ml-6 mb-4">
                            <li>Welthungerhilfe (WHO)</li>
                            <li>United National Development Program (UNDP)</li>
                            <li>UN Women</li>
                            <li>United Nations Populations Fund (UNFPA)</li>
                            <li>Norwegian Institute of International Affairs (NUPI), Norway</li>
                            <li>Geneva Centre for Security Sector Governance, Switzerland</li>
                            <li>Medica Mondial</li>
                            </ul>
                        </div>
                        <div className="card mb-4">
                            <h3 className="text-lg font-bold">Non-Governmental Organizations:</h3>
                            <ul className="list-disc ml-6 mb-4">
                            <li>Being Involved, The Netherlands</li>
                            </ul>
                        </div>
                        </div>
            </div>
        </section>

        <Footer />
    </div>
  )
}

export default PartnershipsCollaborations