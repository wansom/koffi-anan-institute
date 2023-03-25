import { useState, useEffect } from "react"
import { getData } from '../../services';
const ThinkTanks = () => {
    const [posts,setPosts]= useState([]);
    useEffect(() => {
      getData('https://kacit.twafwane.com/wp-json/wp/v2/posts/?categories=10&_embed').then((data)=>{
        setPosts(data)
      })
    }, []);
  return (
    <section className="think-tanks">
    <div className="think-tanks-container container">
        <div className="think-head">
            <h1>Think Tanks</h1>
        </div>
        <div className="think-tank-content">
            {posts.map((post,index)=>(
            <div className="think-tank-card flex flex-col md:flex-row justify-evenly " key={index}>
            <img src={post._embedded['wp:featuredmedia'][0].source_url}
                alt="Kofi Annan Institute for Conflict Transformation Think Tanks"></img>
            <div className="think-tank-info">
                <h2  dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
                <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
                <button>Learn More</button>
            </div>
        </div>
            ))}
        </div>
    </div>
</section>
  );
};

export default ThinkTanks;
