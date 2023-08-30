import AboutHero from "../components/about/hero";
import Programs from "../components/outreachprograms/programs";
import ProgramsGrid from "../components/outreachprograms/programs-grid";
import Footer from "../components/utils/footer";
import Navbar from "../components/utils/navbar";
import background from "../hero/outreach-programs.png";

const OutreachProgram = () => {
  return (
    <div>
      <Navbar />
      <main>
        <AboutHero
          title={"Outreach Programs"}
          subtitle="Building Peaceful Communities Together."
          background={background}
        />
        <div className="container mx-auto">
          <p className="text-lg my-6">
            The Kofi Annan Institute is committed to making research and
            education available to everyone. Through a range of outreach and
            capacity building activities, we engage people from all walks of
            life, from foreign diplomats to policy-makers, government officials,
            private sector representatives, NGO workers, youth and house wives.
            We take the university to towns and villages around Liberia, giving
            everyone the opportunity to benefit from the knowledge and skills
            that we gain through research and our countless engagements with
            Liberians, national and international partners.{" "}
          </p>
        </div>
        <ProgramsGrid />
      </main>
      <Footer />
    </div>
  );
};
export default OutreachProgram;
