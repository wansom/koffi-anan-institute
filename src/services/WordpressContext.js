import { createContext, useState, useEffect } from 'react';
import { getData } from '.';

const WordPressContext = createContext();

const WordPressProvider = ({ children }) => {
  const [news, setNews] = useState(null);
  const[loading,setLoading]=useState(false)
  const [events,setEvents]=useState([])
  useEffect(() => {
    // Fetch data from WordPress API
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
      setLoading(false);
    })
    .catch((error) => console.error(error));
    //fetch events
    getData('https://kacit.twafwane.com/wp-json/tribe/events/v1/events/?start_date=2023-02-01').then((data)=>{
        setEvents(data.events?.slice(-2))
        setLoading(false)
      })
  }, []);

  return (
    <WordPressContext.Provider value={{news,loading,events}}>
      {children}
    </WordPressContext.Provider>
  );
};

export { WordPressProvider, WordPressContext };
