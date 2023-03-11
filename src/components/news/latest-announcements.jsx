const LatestAnnouncement=()=>{
    return (
        <div className="news-content">
        <div className="news-feeds">
            <div className="slider-feeds">
               <div className="feed">
                    <img src="images/news/speaker.png" alt=""/>
                    <div className="feed-mask">
                        <div className="text">
                            <h3>Impact Showcase highlights institute's many research</h3>
                            <a href="#">Read More
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.00033 11.3334L5.05033 10.4001L8.78366 6.66675H0.666992V5.33342H8.78366L5.05033 1.60008L6.00033 0.666748L11.3337 6.00008L6.00033 11.3334Z"
                                        fill="#FCFCFC" />
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
    </div>
    )

}
export default LatestAnnouncement