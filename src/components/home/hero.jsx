import { useState, useEffect } from "react"
import { getData } from '../../services';
const Hero = () => {
    const [posts,setPosts]= useState([]);
    useEffect(() => {
      getData('https://kacit.twafwane.com/wp-json/wp/v2/posts/?categories=11&_embed').then((data)=>{
        setPosts(data)
      })
    }, []);
  return (
    <section className="banner">
    <div className="banner-mask">
        <div className="banner-container container">
            {posts.length>0&&(<div className="banner-text">
                <h1 dangerouslySetInnerHTML={{ __html: posts[0].title.rendered }}></h1>
                <p dangerouslySetInnerHTML={{ __html: posts[0].content.rendered }}></p>
                <a href="aboutus"><button >Learn More</button></a>
            </div>)}
            
        </div>
    </div>
</section>
  );
};
export default Hero;
