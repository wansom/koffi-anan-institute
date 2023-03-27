import AboutHero from "../components/about/hero";
import LatestAnnouncement from "../components/news/latest-announcements";
import NewsSidebar from "../components/news/sidebar";
import Footer from "../components/utils/footer";
import Navbar from "../components/utils/navbar";
import backgound from "../hero/about.png";
import { useState, useEffect } from "react";
import { getData } from "../services";

const AllNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData(
      "https://kacit.twafwane.com/wp-json/wp/v2/posts/?categories=6&_embed"
    ).then((data) => {
      setNews(data);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <main>
        <AboutHero
          title={"News & Announcements"}
          subtitle={"Learn New Things"}
          background={backgound}
        />
        <section className="news">
          <div className="news-container container">
            <div className="left">
              <div className="head">
                <h1>Latest Announcements</h1>
              </div>
              {loading ? <p>Loading..</p> : <LatestAnnouncement news={news} />}
              <div className="head">
                <h1>Latest News</h1>
              </div>
              <div className="news-card-slides">
                <div className="news-cards slide">
                  {news.map((i) => (
                    <div>
                      {loading?<p>Loading..</p>: <div className="card">
                    <img src={i._embedded['wp:featuredmedia'][0].source_url} alt="" />
                    <div className="news-card-info">
                      <h3 dangerouslySetInnerHTML={{ __html: i.title.rendered }}>
                       
                      </h3>
                      <p dangerouslySetInnerHTML={{ __html: i.content.rendered }}>
                       
                      </p>
                      <a href="#">
                        Read More{" "}
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_477_133"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="16"
                            height="16"
                          >
                            <rect width="16" height="16" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_477_133)">
                            <path
                              d="M8.00033 13.3334L7.05033 12.4001L10.7837 8.66675H2.66699V7.33342H10.7837L7.05033 3.60008L8.00033 2.66675L13.3337 8.00008L8.00033 13.3334Z"
                              fill="#25518C"
                            />
                          </g>
                        </svg>
                      </a>
                    </div>
                  </div>}
                    </div>
                  ))}
                </div>
              </div>
              <div className="pagination">
                <div className="page">
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
                <div className="page">
                  <span>1</span>
                </div>
                <div className="page">
                  <span>2</span>
                </div>
                <div className="page">
                  <span>3</span>
                </div>
                <div className="page">
                  <span>4</span>
                </div>
                <div className="page">
                  <span>5</span>
                </div>
                <div className="page">
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
                <div className="page more">
                  <span>More</span>
                </div>
              </div>
            </div>
            <NewsSidebar news={news} loading={loading}/>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AllNews;
