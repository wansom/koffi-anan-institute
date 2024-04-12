import {  useContext } from "react";
import EventsCard from "../events/events-card";
import { WordPressContext } from "../../services/WordpressContext";

const EventSection=()=>{
    

  const {news,loading,events} = useContext(WordPressContext);

  if (!news) {
    return <div>Loading...</div>;
  }
    return(
        <section className="upcoming-events">
        <div className="upcoming-container container">
            <div className="up-left">
                <div className="top">
                    <h1>Upcoming Events</h1>
                </div>
                <div className="bottom">
                    {loading?<p>Loading...</p>:<div className=" grid grid-cols-1 md:grid-cols-2">
                    {events.map((event)=>(
                     <EventsCard event={event} key={event.id}/>
                  ))}
                        </div>}
                    
                    
                   
                </div>
                <div className="bottom-more">
                   <a href="allevents"> <button>All Events</button></a>
                </div>
            </div>
            <div className="up-right">
                <div className="top">
                    <span>News | </span>
                    <a href="allnews">All News</a>
                </div>
                <div className="bottom">
                    {news.map((i)=>(
                        <a href={`news/${i.slug}`} key={i.id}>
                        <div className="news">
                        <div className="top">
                            <div className="left"><span>Weekly updates</span></div>
                            <div className="right"><span>{new Date(i.date).toDateString()} </span></div>
                        </div>
                        <div className="bottom">
                            <h4 dangerouslySetInnerHTML={{ __html: i.title.rendered }}></h4>
                            <p className=" text-justify" dangerouslySetInnerHTML={{ __html: i.content.rendered }}></p>
                            
                        </div>
                    </div></a>
                    ))}
                </div>
            </div>
        </div>
    </section>
    )
}
export default EventSection