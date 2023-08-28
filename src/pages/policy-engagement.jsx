import AboutHero from "../components/about/hero";
import ThinkTanks from "../components/home/think-tanks";
import Footer from "../components/utils/footer";
import Navbar from "../components/utils/navbar";
import backgound from "../hero/about.jpg";

const PolicyEngagement = () => {
    return (
        <div>
            <Navbar />
            <AboutHero title={'Policy Engagement'} subtitle={''} background={backgound} />
         <div className="container mx-auto  px-5 md:px-10">
         <p className="mt-5">KAICT envisions a future where public dialogue and rigorous research and analysis are endemic to policy making and implementation in Liberia. It is a future in which a new generation of
                Liberians, endowed with abilities for critical and innovative thinking, lead in the definition,reconstruction, and administration of the Liberian state.
                Policy research, formulation, and engagement in Liberia have been weak. Throughout history, the‘all powerful’ presidents have formulated policies arbitrarily and without research and an analytical basis. On the other hand,civil society, especially think tanks, have paid less attention to
                monitoring and engaging in constructive dialogues for the purpose of ensuring a healthy policy environment. In this recovery phase where institutions, laws, and practices are being formulated anew , there is need for
                a policy think
                tank
                that can transform Liberia’s long years of bad policy
                -
                making culture by ensuring that
                policymaking is informed by rigorous research and analysis
                .
                To
                share research and
                analysis with the KAICT family and wider community
                , the
                Kofi
                Annan
                Institute for Conflict Transformation
                has set up the Security Sector Reform Think Tank and the
                Mary Antoinette Brown Sherman Think Thank
                .
            </p>
            <ThinkTanks/>
         </div>
         <Footer/>
        </div>
    );
}

export default PolicyEngagement;