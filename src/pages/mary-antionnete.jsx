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
          <div className="think-single-container container">
            <h2 className="think-head">Overview</h2>
            <p className="think-p">
              The Mary Antoinette Brown Sherman Think Tank (MABSTT) is the
              flagship program on gender of the Kofi Annan Institute. It
              champions the participation of girls and women in all aspects of
              public life in Liberia, especially in leadership and governance.
              The MABS Think Tank involves three areas of activity: a lecture
              series, training, and research.
            </p>
            <p className="think-p">
              We employ a range of research methodologies, including desk
              research, qualitative and quantitative data analysis, and field
              research. Our research is based on a solid understanding of the
              complex security challenges facing Liberia and the region, as well
              as the local context and dynamics.
            </p>
            <p className="think-p">
              Our team of experts includes researchers, practitioners, and
              academics with extensive experience in the field of security
              sector reform. We work closely with local and international
              partners, including government agencies, civil society
              organizations, and regional bodies, to ensure that our research is
              relevant, timely, and impactful.
            </p>
            <p className="think-p">
              In addition to our research activities, the SSR Think Tank also
              organizes seminars, workshops, and conferences to promote dialogue
              and knowledge sharing on security sector reform issues. We welcome
              collaboration and partnership with organizations and individuals
              who share our vision and mission.
            </p>


              {/* Public lectures */}
            <div>
                <h2 className="think-head">Public Lectures</h2>
                <p className="think-p">
                  Recognizing the need to discuss the role of girls and women in
                  society and acknowledging their contribution to public life,
                  the Mary Antoinette Brown Sherman Think Tank launched its
                  lecture series on November 24, 2022. The series features notable
                  women who have contributed to public life in Liberia, women’s champions,
                  and discussions around gender, women and girls.
                </p>
               
                <div className="lecture-cards">
                  <div className="lecture-card">
                    <img src="/images/video.png" alt="Lecuture Thumbnail KAICT" />
                    <button>
                      <svg
                        width="48"
                        height="34"
                        viewBox="0 0 48 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M46.9964 5.28C46.725 4.25883 46.1902 3.32684 45.4454 2.57731C44.7007 1.82778 43.7721 1.287 42.7527 1.00909C39 1.19209e-07 24 0 24 0C24 0 9 1.19209e-07 5.24727 1.00909C4.22786 1.287 3.29932 1.82778 2.55458 2.57731C1.80983 3.32684 1.27501 4.25883 1.00364 5.28C1.19209e-07 9.04909 0 16.9091 0 16.9091C0 16.9091 1.19209e-07 24.7691 1.00364 28.5382C1.27501 29.5594 1.80983 30.4913 2.55458 31.2409C3.29932 31.9904 4.22786 32.5312 5.24727 32.8091C9 33.8182 24 33.8182 24 33.8182C24 33.8182 39 33.8182 42.7527 32.8091C43.7721 32.5312 44.7007 31.9904 45.4454 31.2409C46.1902 30.4913 46.725 29.5594 46.9964 28.5382C48 24.7691 48 16.9091 48 16.9091C48 16.9091 48 9.04909 46.9964 5.28Z"
                          fill="#FF0302"
                        />
                        <path
                          d="M19.0898 24.047V9.77246L31.6353 16.9097L19.0898 24.047Z"
                          fill="#FEFEFE"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="lecture-card">
                    <img src="/images/video.png" alt="Lecuture Thumbnail KAICT" />
                    <button>
                      <svg
                        width="48"
                        height="34"
                        viewBox="0 0 48 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M46.9964 5.28C46.725 4.25883 46.1902 3.32684 45.4454 2.57731C44.7007 1.82778 43.7721 1.287 42.7527 1.00909C39 1.19209e-07 24 0 24 0C24 0 9 1.19209e-07 5.24727 1.00909C4.22786 1.287 3.29932 1.82778 2.55458 2.57731C1.80983 3.32684 1.27501 4.25883 1.00364 5.28C1.19209e-07 9.04909 0 16.9091 0 16.9091C0 16.9091 1.19209e-07 24.7691 1.00364 28.5382C1.27501 29.5594 1.80983 30.4913 2.55458 31.2409C3.29932 31.9904 4.22786 32.5312 5.24727 32.8091C9 33.8182 24 33.8182 24 33.8182C24 33.8182 39 33.8182 42.7527 32.8091C43.7721 32.5312 44.7007 31.9904 45.4454 31.2409C46.1902 30.4913 46.725 29.5594 46.9964 28.5382C48 24.7691 48 16.9091 48 16.9091C48 16.9091 48 9.04909 46.9964 5.28Z"
                          fill="#FF0302"
                        />
                        <path
                          d="M19.0898 24.047V9.77246L31.6353 16.9097L19.0898 24.047Z"
                          fill="#FEFEFE"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="lecture-card">
                    <img src="/images/video.png" alt="Lecuture Thumbnail KAICT" />
                    <button>
                      <svg
                        width="48"
                        height="34"
                        viewBox="0 0 48 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M46.9964 5.28C46.725 4.25883 46.1902 3.32684 45.4454 2.57731C44.7007 1.82778 43.7721 1.287 42.7527 1.00909C39 1.19209e-07 24 0 24 0C24 0 9 1.19209e-07 5.24727 1.00909C4.22786 1.287 3.29932 1.82778 2.55458 2.57731C1.80983 3.32684 1.27501 4.25883 1.00364 5.28C1.19209e-07 9.04909 0 16.9091 0 16.9091C0 16.9091 1.19209e-07 24.7691 1.00364 28.5382C1.27501 29.5594 1.80983 30.4913 2.55458 31.2409C3.29932 31.9904 4.22786 32.5312 5.24727 32.8091C9 33.8182 24 33.8182 24 33.8182C24 33.8182 39 33.8182 42.7527 32.8091C43.7721 32.5312 44.7007 31.9904 45.4454 31.2409C46.1902 30.4913 46.725 29.5594 46.9964 28.5382C48 24.7691 48 16.9091 48 16.9091C48 16.9091 48 9.04909 46.9964 5.28Z"
                          fill="#FF0302"
                        />
                        <path
                          d="M19.0898 24.047V9.77246L31.6353 16.9097L19.0898 24.047Z"
                          fill="#FEFEFE"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
            </div>

              {/* Training section */}
            <div>
                <h2 className="think-head">Training</h2>
                <p className="think-p">
                Recognizing the need to build girls’ and women’s self-confidence
                and skills for their full participation in public life, the Mary
                Antoinette Brown Sherman Think Tank offers a variety of skills
                training programs for girls and women focused on public speaking,
                leadership and governance, amongst others. These include both
                in-house training and outreach programs in communities across Liberia.
                </p>

            </div>

            {/* Research section */}
            <div>
                <h2 className="think-head">Research</h2>
                <p className="think-p">
                Recognizing the need for evidence-based learning, teaching and
                participation in public life, the Think Tank engages in research
                on gender in Liberia.
                </p>
                <div className="takeaway-cards">
                  <div className="takeaway-card">
                    <div className="card-center">
                      <h2>Stay Ahead of the Curve</h2>
                      <p>
                        The summit will offer attendees the opportunity to stay
                        up-to-date with the latest trends and innovations shaping
                        the future of work in Africa.
                      </p>
                    </div>
                  </div>
                  <div className="takeaway-card">
                    <div className="card-center">
                      <span></span>
                      <h2>Police Reform</h2>
                      <p>
                        The process of transforming police institutions to make them
                        more effective, accountable, and responsive to the needs of
                        the population.
                      </p>
                    </div>
                  </div>
                  <div className="takeaway-card">
                    <div className="card-center">
                      <h2>Training</h2>
                      <p>
                        The SSR Think Tank also offers training courses, in particular
                        for security sector personnel and civil society activists.
                        The trainings focus on strengthening democratic attitudes,
                        respect for human rights, and sensitivity to gender disparities.
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
