const WeeklyUpdates=({news,loading})=>{
 return (
    <div className="news-list">
    {news.map((i)=>(
      <div>
        {loading?<p>Loading....</p>:
                  <div className="news">
                     <a href={`/news/${i.slug}`}>
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
                    <p dangerouslySetInnerHTML={{ __html: i.content.rendered.slice(0,200) }}>
                    </p>
                  </div>
                  </a>
                </div>
        }
      </div>

    ))}

  </div>
 )
}

export default WeeklyUpdates