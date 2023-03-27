const NewsSidebar =({news,loading})=>{
    return (
        <div className="right">
        <div className="news-list">
          <div className="news top">
            <div className="head-new">
              <h4>All Categories</h4>
            </div>
            <ul>
              <li>
                <a href="#">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_477_49"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="14"
                      height="14"
                    >
                      <rect width="14" height="14" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_477_49)">
                      <path
                        d="M5.48366 10.5L4.66699 9.68333L7.35033 7L4.66699 4.31667L5.48366 3.5L8.98366 7L5.48366 10.5Z"
                        fill="#25518C"
                      />
                    </g>
                  </svg>
                  Student
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_477_49"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="14"
                      height="14"
                    >
                      <rect width="14" height="14" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_477_49)">
                      <path
                        d="M5.48366 10.5L4.66699 9.68333L7.35033 7L4.66699 4.31667L5.48366 3.5L8.98366 7L5.48366 10.5Z"
                        fill="#25518C"
                      />
                    </g>
                  </svg>
                  Seminars
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_477_49"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="14"
                      height="14"
                    >
                      <rect width="14" height="14" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_477_49)">
                      <path
                        d="M5.48366 10.5L4.66699 9.68333L7.35033 7L4.66699 4.31667L5.48366 3.5L8.98366 7L5.48366 10.5Z"
                        fill="#25518C"
                      />
                    </g>
                  </svg>
                  Research
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_477_49"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="14"
                      height="14"
                    >
                      <rect width="14" height="14" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_477_49)">
                      <path
                        d="M5.48366 10.5L4.66699 9.68333L7.35033 7L4.66699 4.31667L5.48366 3.5L8.98366 7L5.48366 10.5Z"
                        fill="#25518C"
                      />
                    </g>
                  </svg>
                  Events
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_477_49"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="14"
                      height="14"
                    >
                      <rect width="14" height="14" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_477_49)">
                      <path
                        d="M5.48366 10.5L4.66699 9.68333L7.35033 7L4.66699 4.31667L5.48366 3.5L8.98366 7L5.48366 10.5Z"
                        fill="#25518C"
                      />
                    </g>
                  </svg>
                  Admissions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="news-list">
          {news.map((i)=>(
            <div>
              {loading?<p>Loading....</p>:
                        <div className="news">
                        <div className="top">
                          <div className="left-tag">
                            <span>Weekly updates</span>
                          </div>
                          <div className="right-tag">
                            <span>{new Date(i.date).toDateString()}</span>
                          </div>
                        </div>
                        <div className="bottom">
                          <h4 dangerouslySetInnerHTML={{ __html: i.title.rendered }}></h4>
                          <p dangerouslySetInnerHTML={{ __html: i.content.rendered }}>
                          </p>
                        </div>
                      </div>
              }
            </div>

          ))}

        </div>
        <div className="side-socials">
          <img src="images/news/side-social.png" alt="" />
          <div className="side-info">
            <div className="side-contact">
              <div className="icon one">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_477_107"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="25"
                    height="25"
                  >
                    <rect width="25" height="25" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_477_107)">
                    <path
                      d="M20.7812 21.875C18.5417 21.875 16.3585 21.3759 14.2318 20.3776C12.105 19.3793 10.2214 18.0599 8.58073 16.4193C6.9401 14.7786 5.62066 12.895 4.6224 10.7682C3.62413 8.64149 3.125 6.45833 3.125 4.21875C3.125 3.90625 3.22917 3.64583 3.4375 3.4375C3.64583 3.22917 3.90625 3.125 4.21875 3.125H8.4375C8.68056 3.125 8.89757 3.20312 9.08854 3.35938C9.27951 3.51562 9.39236 3.71528 9.42708 3.95833L10.1042 7.60417C10.1389 7.84722 10.1345 8.06858 10.0911 8.26823C10.0477 8.46788 9.94792 8.64583 9.79167 8.80208L7.29167 11.3542C8.02083 12.6042 8.93229 13.776 10.026 14.8698C11.1198 15.9635 12.3264 16.9097 13.6458 17.7083L16.0937 15.2604C16.25 15.1042 16.454 14.987 16.7057 14.9089C16.9575 14.8307 17.2049 14.809 17.4479 14.8438L21.0417 15.5729C21.2847 15.625 21.4844 15.7422 21.6406 15.9245C21.7969 16.1068 21.875 16.3194 21.875 16.5625V20.7812C21.875 21.0938 21.7708 21.3542 21.5625 21.5625C21.3542 21.7708 21.0938 21.875 20.7812 21.875Z"
                      fill="#FCFCFC"
                    />
                  </g>
                </svg>
              </div>
              <div className="text">
                <h5>Call Us</h5>
                <p>+254 020 315-8538</p>
              </div>
            </div>
            <div className="side-contact">
              <div className="icon two">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_477_114"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="25"
                    height="25"
                  >
                    <rect width="25" height="25" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_477_114)">
                    <path
                      d="M4.16732 20.8334C3.5944 20.8334 3.10395 20.6294 2.69596 20.2214C2.28798 19.8134 2.08398 19.323 2.08398 18.7501V6.25008C2.08398 5.67716 2.28798 5.18671 2.69596 4.77873C3.10395 4.37074 3.5944 4.16675 4.16732 4.16675H20.834C21.4069 4.16675 21.8974 4.37074 22.3053 4.77873C22.7133 5.18671 22.9173 5.67716 22.9173 6.25008V18.7501C22.9173 19.323 22.7133 19.8134 22.3053 20.2214C21.8974 20.6294 21.4069 20.8334 20.834 20.8334H4.16732ZM12.5007 13.5417L20.834 8.33341V6.25008L12.5007 11.4584L4.16732 6.25008V8.33341L12.5007 13.5417Z"
                      fill="#FCFCFC"
                    />
                  </g>
                </svg>
              </div>
              <div className="text">
                <h5>Call Us</h5>
                <p>+254 020 315-8538</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

}
export default NewsSidebar