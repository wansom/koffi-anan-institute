import AboutHero from "../components/about/hero";
import Programs from "../components/outreachprograms/programs";
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
        <section className="outreach-card-sec  container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="outreach-card">
              <img src="/images/outreach-program/p-3.png" alt="" />
              <div className="outreach-info">
                <h2>Community Engagement</h2>
                <p className="h-[210px] overflow-y-scroll">
                  Dialogues, trainings and workshops with women and youth are a
                  key part of the Kofi Annan Institute’s activities. We strongly
                  believe that youth and women are crucial for Liberia’s
                  reconstruction and development. To focus specifically on these
                  two population groups is essential in a country where older
                  men often take the front seat when it comes to public
                  decision-making, thereby frequently underrepresenting the
                  needs of women and future generations. The youth of today will
                  be the leaders of tomorrow. Therefore, we need to make
                  particular efforts to strengthen the skills of young people in
                  the country. We do so through women’s community engagements
                  and youth leadership trainings.{" "}
                </p>
                <a href="outreachprogram/Community Engagement">
                  <button>Explore Program</button>
                </a>
              </div>
            </div>
            <div className="outreach-card">
              <img src="/images/outreach-program/p-1.png" alt="" />
              <div className="outreach-info">
                <h2>Women Community Engagement</h2>
                <p className="h-[210px] overflow-y-scroll">
                  Our Women’s Community Engagements focus on a broad range of
                  topics, from elections to peaceful conflict resolution. While
                  most attendees of our events are women, we include some men in
                  our sessions, as we believe that gender norms can only be
                  changed in collaboration and not in isolation. Effective
                  gender-related interventions need to include both men and
                  women.
                </p>
                <a href="outreachprogram/>Women Community Engagement">
                  {" "}
                  <button>Explore Program</button>
                </a>
              </div>
            </div>
            <div className="outreach-card">
              <img src="/images/outreach-program/p-2.png" alt="" />
              <div className="outreach-info">
                <h2>YOUTH LEADERSHIP TRAINING PROGRAM </h2>
                <p className="h-[210px] overflow-y-scroll">
                  KAICT offers a leadership program for motivated and talented
                  young professionals to-be. The program is developed based on
                  the conviction that there is a need for a new breed of young
                  leaders dedicated to the promotion of participatory, enabling,
                  transparent and integer leadership in all sectors of Liberia,
                  oriented towards a more stable country. The young leadership
                  program aims to fill the vacuum of young leaders in the age
                  bracket of 18 to 35 years, who will foster democracy that
                  engenders social justice, transparency, integrity, gender
                  equity and responsibility and human social capital development
                  in Liberia.
                </p>
                <a href="outreachprogram/Field Trips">
                  <button>Explore Program</button>
                </a>
              </div>
            </div>
            <div className="outreach-card">
              <img src="/images/outreach-program/p-4.png" alt="" />
              <div className="outreach-info">
                <h2>The Kofi Annan Dialogues</h2>
                <p className="h-[210px] overflow-y-scroll">
                  The Wednesday Seminar on Peace, Politics and Society takes
                  place weekly during the lecture period. It is an
                  extra-curricular information and discussion event for the
                  student population and the interested public. It is flexible
                  in format and can accommodate a broad range of topics on
                  politics, economics and society. By regularly organizing the
                  seminar, we aim to provide a space for informed and reasoned
                  debate on issues and trends in Liberia and beyond. The event
                  is open to diverse styles of knowledge transfer. Often,
                  external experts or KAICT faculty present on current events or
                  academic debates and discuss their insights with the audience.
                  Panel discussions or student model debates are among the
                  alternative formats. Screening and discussion of
                  documentaries, movies or online lectures by third parties also
                  take place within the seminar framework. The Wednesday Seminar
                  takes place in the cozy atmosphere of the Graduate School’s
                  grand lecture hall and attracts approximately 30 to 60
                  visitors from the student population and the public.
                </p>
                <a href="outreachprogram/The Kofi Annan Dialogues">
                  <button>Explore Program</button>
                </a>
              </div>
            </div>
            <div className="outreach-card">
              <img src="/images/outreach-program/p-4.png" alt="" />
              <div className="outreach-info">
                <h2>The Kofi Annan Dialogues</h2>
                <p className="h-[210px] overflow-y-scroll">
                  The Wednesday Seminar on Peace, Politics and Society takes
                  place weekly during the lecture period. It is an
                  extra-curricular information and discussion event for the
                  student population and the interested public. It is flexible
                  in format and can accommodate a broad range of topics on
                  politics, economics and society. By regularly organizing the
                  seminar, we aim to provide a space for informed and reasoned
                  debate on issues and trends in Liberia and beyond. The event
                  is open to diverse styles of knowledge transfer. Often,
                  external experts or KAICT faculty present on current events or
                  academic debates and discuss their insights with the audience.
                  Panel discussions or student model debates are among the
                  alternative formats. Screening and discussion of
                  documentaries, movies or online lectures by third parties also
                  take place within the seminar framework. The Wednesday Seminar
                  takes place in the cozy atmosphere of the Graduate School’s
                  grand lecture hall and attracts approximately 30 to 60
                  visitors from the student population and the public.
                </p>
                <a href="outreachprogram/The Kofi Annan Dialogues">
                  <button>Explore Program</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default OutreachProgram;
