import AboutHero from "../components/about/hero";
import Footer from "../components/utils/footer";
import Navbar from "../components/utils/navbar";
import background from "../hero/mabs.jpg";

const MaryAntoinnette = () => {
  return (
    <div>
      <Navbar />
      <main>
        <AboutHero
          title={"Mary Antoinette Brown Sherman Think Tank"}
          subtitle={"Think Tank"}
          background={background}
        ></AboutHero>
        <section className="think-single">
          <div className="think-single-container container mx-auto px-5">
            <h2 className="think-head">Overview</h2>
            <p className="think-p">
              The Mary Antoinette Brown Sherman Think Tank (MABS Think Tank) is the flagship program on gender of the Kofi Annan Institute.
               It champions the participation of girls and women in all aspects of public life in Liberia, especially in leadership and governance. The MABS Think Tank involves three areas of activity: a lecture series, training, and research.
            </p>
            <p className="think-p">
            The Kofi Annan Institute for Conflict Transformation launched the Mary Antoinette Brown Sherman Think Tank on March 8, 2022. 
            The Think Tank is named after Dr Mary Antoinette Brown Sherman (1926-2004), to celebrate and honor her immense contributions to Liberia’s education sector and society at large. Brown Sherman was a Liberian educator who served as the first female president of an African higher education institution at the University of Liberia from 1978 to 1984. 
            </p>


            {/* Research section */}
            <div>
              
              <div className="takeaway-cards">
                <div className="takeaway-card">
                  <div className="card-center">
                    <h2>Lecture Series</h2>
                    <p>
                    Recognizing the need to discuss the role of girls and women in society and acknowledging their contribution to public life, the Mary Antoinette Brown Sherman Think Tank launched its lecture series on November 24, 2022. The series features notable women who have contributed to public life in Liberia, women’s champions, and discussions around gender, women and girls. 
                    </p>
                  </div>
                </div>
                <div className="takeaway-card">
                  <div className="card-center">
                    <span></span>
                    <h2>Training</h2>
                    <p>
                    Recognizing the need to build girls’ and women’s self-confidence
                and skills for their full participation in public life, the Mary
                Antoinette Brown Sherman Think Tank offers a variety of skills
                training programs for girls and women focused on public speaking,
                leadership and governance, amongst others. These include both
                in-house training and outreach programs in communities across Liberia.
                    </p>
                  </div>
                </div>
                <div className="takeaway-card">
                  <div className="card-center">
                    <h2>Research</h2>
                    <p>
                    Recognizing the need for evidence-based learning, teaching and
                participation in public life, the Think Tank engages in research
                on gender in Liberia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MaryAntoinnette;
