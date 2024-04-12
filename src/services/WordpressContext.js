import { createContext, useState, useEffect } from 'react';
import { getData } from '.';
import axios from "axios";

const WordPressContext = createContext();

const WordPressProvider = ({ children }) => {
  const [news, setNews] = useState(null);
  const[loading,setLoading]=useState(false)
  const [events,setEvents]=useState([])
  const generateToken = async () => {
    const username = "admin";
    const password = "w5JuGaDmaXa@D$KFQ8";
  
    try {
      const response = await axios.post(
        "https://kacit.twafwane.com/wp-json/jwt-auth/v1/token",
        {
          username,
          password,
        }
      );
      const token = response.data.data.token;
      
      localStorage.setItem("jwtToken", token);
      return token;
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error to handle it in the calling code
    }
  };
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

      //generate token
      generateToken()
      let token = localStorage.getItem("jwtToken");
      fetch("https://kacit.twafwane.com/wp-json/tribe/events/v1/events/?start_date=2023-02-01",{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.json())
      .then((data) => {
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
