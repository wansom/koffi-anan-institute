import React, { useState, useEffect } from "react";
const LatestAnnouncement = ({ news }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % news.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, news.length]);
  return (
    <div className="news-content">
      {news.map((i, index) => (
        <div
          className={
            index === activeIndex ? " news-feeds block" : " news-feeds hidden"
          }
          key={index}
        >
          <div className="slider-feeds">
            <div className="feed">
              <img src={i._embedded['wp:featuredmedia'][0].source_url} alt="" />
              <div className="feed-mask">
                <div className="text">
                  <h3 dangerouslySetInnerHTML={{ __html: i.title.rendered }}></h3>
                  <a href="#">
                    Read More
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.00033 11.3334L5.05033 10.4001L8.78366 6.66675H0.666992V5.33342H8.78366L5.05033 1.60008L6.00033 0.666748L11.3337 6.00008L6.00033 11.3334Z"
                        fill="#FCFCFC"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="dots">
            <div className="dot active"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default LatestAnnouncement;
