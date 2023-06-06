import { useState, useEffect } from "react"
import { getData } from '../../services';
const ThinkTanks = () => {
    const [posts,setPosts]= useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
      fetch("https://kacit.twafwane.com/wp-json/wp/v2/thinkthanks")
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
        setPosts(posts)
        setloading(false);
      })
      .catch((error) => console.error(error));
    }, []);

  return (
    <section className="think-tanks">
    <div className="think-tanks-container container">
        <div className="think-head">
            <h1>Policy Engagement</h1>
        </div>
        <div className="think-tank-content">
            {posts.map((post,index)=>(
            <div className="think-tank-card flex flex-col md:flex-row justify-evenly " key={index}>
            <img src={post.featured_image_url}
                alt="Kofi Annan Institute for Conflict Transformation Think Tanks"></img>
            <div className="think-tank-info">
                <h2  dangerouslySetInnerHTML={{ __html: post.acf.title }}></h2>
                <p dangerouslySetInnerHTML={{ __html: post.acf.overview }}></p>
               <a href={post.acf.link}> <button>Learn More</button></a>
            </div>
        </div>
            ))}
        </div>
    </div>
</section>
  );
};

export default ThinkTanks;
