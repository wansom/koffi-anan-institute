import AboutHero from "../components/about/hero";
import Footer from "../components/utils/footer";
import Navbar from "../components/utils/navbar";
import backgound from "../hero/publications.png";

const Publications = () => {
  return (
    <>
      <Navbar />
      <AboutHero
        title={"Publications"}
        subtitle={"Learning Resources"}
        background={backgound}
      />
      <main>
        <section class="filter">
          <div class="filter-container container">
            <div class="filter-top">
              <div class="head publication">
                <h2>Filters</h2>
                <div class="pagination-numbers">
                  <button>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_841_571"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="14"
                        height="14"
                      >
                        <rect width="14" height="14" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_841_571)">
                        <path
                          d="M9.33333 12.8334L3.5 7.00008L9.33333 1.16675L10.3687 2.20216L5.57083 7.00008L10.3687 11.798L9.33333 12.8334Z"
                          fill="#1C1B1F"
                        />
                      </g>
                    </svg>
                  </button>
                  <span>1-9 of 13</span>
                  <button>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_841_568"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="14"
                        height="14"
                      >
                        <rect width="14" height="14" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_841_568)">
                        <path
                          d="M4.67995 12.8334L3.64453 11.798L8.44245 7.00008L3.64453 2.20216L4.67995 1.16675L10.5133 7.00008L4.67995 12.8334Z"
                          fill="#1C1B1F"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="filter-form">
                <form action="">
                  <div class="form-group">
                    <select name="type" id="types">
                      <option value="type">Type</option>
                      <option value="sa">South Africa</option>
                      <option value="congo">Congo</option>
                      <option value="zimbabwe">Zimbabwe</option>
                      <option value="zambia">Zambia</option>
                      <option value="burkina">Burkina Faso</option>
                      <option value="egypt">Egypt</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <select name="author" id="authors">
                      <option value="author">Author</option>
                      <option value="sa">South Africa</option>
                      <option value="congo">Congo</option>
                      <option value="zimbabwe">Zimbabwe</option>
                      <option value="zambia">Zambia</option>
                      <option value="burkina">Burkina Faso</option>
                      <option value="egypt">Egypt</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Date Published"
                      onfocus="(this.type='date')"
                    />
                  </div>
                  <div class="form-group">
                    <select name="issue" id="issues">
                      <option value="issue">Issue</option>
                      <option value="sa">South Africa</option>
                      <option value="congo">Congo</option>
                      <option value="zimbabwe">Zimbabwe</option>
                      <option value="zambia">Zambia</option>
                      <option value="burkina">Burkina Faso</option>
                      <option value="egypt">Egypt</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <select name="region" id="regions">
                      <option value="region">Region</option>
                      <option value="sa">South Africa</option>
                      <option value="congo">Congo</option>
                      <option value="zimbabwe">Zimbabwe</option>
                      <option value="zambia">Zambia</option>
                      <option value="burkina">Burkina Faso</option>
                      <option value="egypt">Egypt</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <button type="submit">Filter</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="published-container container">
            <div class="published-card">
              <img src="/images/publications/one.png" alt="Publication" />
              <div class="pub-info">
                <h3>
                  Incomplete DDRR: A Prescription for Prolonged Fragility in
                  Liberia, In Bangura, Ibrahim (eds.) Disarmament,
                  Demobilisation and Reintegration of Ex-Combatants in Africa,
                  Routledge: 178-193.
                </h3>
                <span>
                  by <u>Kormoll, Raphaela & Sayndee, T. Debey </u>
                </span>
              </div>
            </div>
            <div class="published-card">
              <img src="/images/publications/two.png" alt="Publication" />
              <div class="pub-info">
                <h3>
                  Spaces of Exclusion: Negotiating Access to the Land Beyond the
                  Border Fence in Indian Punjab,’ In Bissonnette, Andréanne &
                  Vallet, Elisabeth (eds), Borders and Border Walls:
                  In-Security, Symbolism, Vulnerabilities, Routledge: 166-184.
                </h3>
                <span>
                  by <u>Kormoll, Raphaela (2020). </u>
                </span>
              </div>
            </div>
            <div class="published-card">
              <img src="/images/publications/four.png" alt="Publication" />
              <div class="pub-info">
                <h3>
                  Die Gewaltunternehmener: Wie finanziert sich die somalische
                  Islamistische-Miliz al-Shabaab? [How does the Somali Islamist
                  militant organisation al-Shabaab finance itself?] iz3w, 358.
                </h3>
                <span>
                  by <u>Bakonyi, Jutta & Kormoll, Raphaela (2017). </u>
                </span>
              </div>
            </div>
            <div class="published-card">
              <img src="/images/publications/three.png" alt="Publication" />
              <div class="pub-info">
                <h3>
                  Review of Pippa Virdee’s (2018) book From the Ashes of 1947:
                  Reimagining Punjab, Cambridge: Cambridge University Press,
                  South Asian Review
                </h3>
                <span>
                  by <u>Kormoll, Raphaela (2019). </u>
                </span>
              </div>
            </div>
          
            <div class="published-card">
              <img src="/images/publications/five.png" alt="Publication" />
              <div class="pub-info">
                <h3>Commentary: India-Pakistan: Contextualising the Cancelled Talks Debacle, IPCS</h3>
                <span>
                  by <u>Kormoll, Raphaela (2015). </u>
                </span>
              </div>
            </div>
            <div class="published-card">
              <img src="/images/publications/six.png" alt="Publication" />
              <div class="pub-info">
                <h3>A Threat to Life and Property: Domestic Terrorism in India,’ JASON Magazine (Special Edition), 40(4), pp. 60-64.</h3>
                <span>
                  by <u>Kormoll, Raphaela (2015)</u>
                </span>
              </div>
            </div>
            <div class="published-card">
              <img src="/images/publications/seven.png" alt="Publication" />
              <div class="pub-info">
                <h3>Is Taiwan struggling for independence?’ JASON Magazine, 39(3), pp. 22-25.</h3>
                <span>
                  by <u>Kormoll, Raphaela (2014).</u>
                </span>
              </div>
            </div>
            <div class="published-card">
              <img src="/images/publications/eight.png" alt="Publication" />
              <div class="pub-info">
                <h3>‘Thailand’s Current Crisis: A Democratic Revolution?’ JASON Magazine, 39(2), pp. 36-39.</h3>
                <span>
                  by <u>Kormoll, Raphaela (2014).</u>
                </span>
              </div>
            </div>
            <div class="published-card">
              <img src="/images/publications/nine.png" alt="Publication" />
              <div class="pub-info">
                <h3>China’s Law of the Sea: The New Rules of Maritime Order</h3>
                <span>
                  by <u>Kormoll, Raphaela (2014). </u>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section class="pub-pagination">
          <div class="pub-pagination-container container">
            <div class="pagination-boxes">
              <div></div>
              <div class="pagination">
                <div class="page">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_477_39"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    >
                      <rect width="20" height="20" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_477_39)">
                      <path
                        d="M13.3333 18.3333L5 9.99996L13.3333 1.66663L14.8125 3.14579L7.95833 9.99996L14.8125 16.8541L13.3333 18.3333Z"
                        fill="#1C1B1F"
                      />
                    </g>
                  </svg>
                </div>
                <div class="page">
                  <span>1</span>
                </div>
                <div class="page">
                  <span>2</span>
                </div>
                <div class="page">
                  <span>3</span>
                </div>
                <div class="page">
                  <span>4</span>
                </div>
                <div class="page">
                  <span>5</span>
                </div>
                <div class="page">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_477_34"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    >
                      <rect width="20" height="20" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_477_34)">
                      <path
                        d="M6.68717 18.3333L5.20801 16.8541L12.0622 9.99996L5.20801 3.14579L6.68717 1.66663L15.0205 9.99996L6.68717 18.3333Z"
                        fill="#1C1B1F"
                      />
                    </g>
                  </svg>
                </div>
                <div class="page more">
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Publications;
