import AboutHero from "../components/about/hero";
import AllResearch from "../components/research-projects/all-research";
import Footer from "../components/utils/footer";
import Navbar from "../components/utils/navbar";
import background from "../hero/research-program.png";

const ResearchProjects = () => {
  return (
    <div>
      <Navbar />
      <main>
        <AboutHero
          title={"Research Projects"}
          subtitle="Advancing Peace and Stability through Innovative Research"
          background={background}
        />
        <main>
          <section class="research-content">
            <div class="research-container container">
              <div class="research-item">
                <div class="research-head">
                  <h1>Ongoing Projects</h1>
                </div>
                <div class="research-information one">
                  <div class="research-status">
                    <p>Ongoing Project</p>
                  </div>
                  <div class="research-card">
                    <h3>
                      Hope for a Better Future: Building Collaborative
                      Resilience for Youth in Liberia
                    </h3>
                    <p>
                      The project aims to explore the factors that contribute to
                      the resilience of young people in Liberia and to identify
                      strategies for building collaborative resilience in the
                      face of the many challenges that youth in Liberia face.
                    </p>
                    <a href="" className="flex items-center gap-1">
                      Read More{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_772_135"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <rect width="16" height="16" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_772_135)">
                          <path
                            d="M8.0013 13.3334L7.0513 12.4001L10.7846 8.66675H2.66797V7.33342H10.7846L7.0513 3.60008L8.0013 2.66675L13.3346 8.00008L8.0013 13.3334Z"
                            fill="#25518C"
                          />
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div class="research-item">
                <div class="research-head">
                  <h1>Completed Projects</h1>
                </div>
                <div class="research-information two">
                  <div class="research-status">
                    <p>Ongoing Project</p>
                  </div>
                  <div class="research-card">
                    <h3>
                      Hope for a Better Future: Building Collaborative
                      Resilience for Youth in Liberia
                    </h3>
                    <p>
                      The project aims to explore the factors that contribute to
                      the resilience of young people in Liberia and to identify
                      strategies for building collaborative resilience in the
                      face of the many challenges that youth in Liberia face.
                    </p>
                    <a href="" className="flex items-center gap-1">
                      Read More{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_772_135"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <rect width="16" height="16" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_772_135)">
                          <path
                            d="M8.0013 13.3334L7.0513 12.4001L10.7846 8.66675H2.66797V7.33342H10.7846L7.0513 3.60008L8.0013 2.66675L13.3346 8.00008L8.0013 13.3334Z"
                            fill="#25518C"
                          />
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div class="research-item">
                <div class="research-head">
                  <h1>Consultancies</h1>
                </div>
                <div class="research-information three">
                  <div class="research-status">
                    <p>Ongoing Project</p>
                  </div>
                  <div class="research-card">
                    <h3>
                      Hope for a Better Future: Building Collaborative
                      Resilience for Youth in Liberia
                    </h3>
                    <p>
                      The project aims to explore the factors that contribute to
                      the resilience of young people in Liberia and to identify
                      strategies for building collaborative resilience in the
                      face of the many challenges that youth in Liberia face.
                    </p>
                    <a href="" className="flex items-center gap-1">
                      Read More{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_772_135"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <rect width="16" height="16" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_772_135)">
                          <path
                            d="M8.0013 13.3334L7.0513 12.4001L10.7846 8.66675H2.66797V7.33342H10.7846L7.0513 3.60008L8.0013 2.66675L13.3346 8.00008L8.0013 13.3334Z"
                            fill="#25518C"
                          />
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </main>
      <Footer />
    </div>
  );
};
export default ResearchProjects;
