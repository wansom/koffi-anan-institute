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
    <section class="banner">
    <div class="banner-mask">
        <div class="banner-container container">
            {posts.length>0&&(<div class="banner-text">
                <h1 dangerouslySetInnerHTML={{ __html: posts[0].title.rendered }}></h1>
                <p dangerouslySetInnerHTML={{ __html: posts[0].content.rendered }}></p>
                <button>Learn More</button>
            </div>)}
            
        </div>
    </div>
</section>
  );
};
export default Hero;
