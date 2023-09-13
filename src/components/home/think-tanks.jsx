import { useState, useEffect } from "react"
import { getData } from '../../services';
const ThinkTanks = () => {
  const [posts, setPosts] = useState([]);
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
    <section className="think-tanks px-1 md:px-10">
      <div className="think-tanks-container container">
        <div className="think-head">
          <h1>Policy Engagement</h1>
        </div>
        <div className="think-tank-content">
          {posts.map((post, index) => (
            <div  key={index}>
              {index % 2 === 0 ?
                <div className="grid gird-cols-1 md:grid-cols-2 gap-10 mb-6">
                  <img src={post.featured_image_url} alt="Kofi Annan Institute for Conflict Transformation Think Tanks" className="h-full object-cover md:h-[310px] w-full"></img>
                  <div className="think-tank-info">
                    <h2 dangerouslySetInnerHTML={{ __html: post.acf.title }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: post.acf.overview }}></p>
                    <a href={post.acf.link}> <button>Learn More</button></a>
                  </div>
                </div> :
                <div className="grid gird-cols-1 md:grid-cols-2 gap-10 mb-6">
                  <div className="think-tank-info">
                    <h2 dangerouslySetInnerHTML={{ __html: post.acf.title }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: post.acf.overview }}></p>
                    <a href={post.acf.link}> <button>Learn More</button></a>
                  </div>
                  <img src={post.featured_image_url} alt="Kofi Annan Institute for Conflict Transformation Think Tanks" className="h-full object-cover md:h-[310px] w-full "></img>

                </div>}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThinkTanks;
