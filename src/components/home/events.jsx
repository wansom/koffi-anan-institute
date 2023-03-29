import { useState, useEffect } from "react";
import { getData } from '../../services';
import EventsCard from "../events/events-card";

const EventSection=()=>{
    const [news,setNews]=useState([])
    const [events,setEvents]=useState([])
    const [loading, setloading] = useState(true);
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    useEffect(() => {
        fetch("https://kacit.twafwane.com/wp-json/wp/v2/news")
        .then((response) => response.json())
        .then((posts) => {
          const promises = posts.map((post) => {
            return fetch(
              `https://kacit.twafwane.com/wp-json/wp/v2/media/${post.featured_media}`
            )
              .then((response) => response.json())
              .then((media) => {
                post.featured_image_url = media.source_url;
                return post;
              });
          });
          return Promise.all(promises);
        })
        .then((posts) => {
          setNews(posts.slice(-2));
          setloading(false);
          console.log(posts);
        })
        .catch((error) => console.error(error));
        getData('https://kacit.twafwane.com/wp-json/tribe/events/v1/events').then((data)=>{
          setEvents(data.events.slice(-2))
          setloading(false)
        })
      }, []);
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
                     <EventsCard event={event}/>
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
                        <a href={`post/${i.slug}`}>
                        <div className="news">
                        <div className="top">
                            <div className="left"><span>Weekly updates</span></div>
                            <div className="right"><span>{new Date(i.date).toDateString()} </span></div>
                        </div>
                        <div className="bottom">
                            <h4 dangerouslySetInnerHTML={{ __html: i.title.rendered }}></h4>
                            <p dangerouslySetInnerHTML={{ __html: i.content.rendered }}></p>
                            
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