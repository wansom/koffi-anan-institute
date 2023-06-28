const LibraryFilters=()=>{
    return (
        <section className="filter">
        <div className="filter-container container">
          <div className="filter-top">
            <div className="head publication">
              <h2>Filters</h2>
              <div className="pagination-numbers">
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
            <div className="filter-form">
              <form action="">
                <div className="form-group">
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
                <div className="form-group">
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
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Date Published"
                    onfocus="(this.type='date')"
                  />
                </div>
                <div className="form-group">
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
                <div className="form-group">
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
                <div className="form-group">
                  <button type="submit">Filter</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}

export default LibraryFilters