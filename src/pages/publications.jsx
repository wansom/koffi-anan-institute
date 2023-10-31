import { useEffect, useState } from "react";
import AboutHero from "../components/about/hero";
import Footer from "../components/utils/footer";
import Navbar from "../components/utils/navbar";
import backgound from "../hero/publications.png";
import { getData } from "../services";

const Publications = () => {

const [publications,setPublications]=useState([])
const [policy, setPolicy]=useState([])
const [reports,setReports]=useState([])
const [newsletter,setNewsLetter] =useState([])
const [books, setBooks]=useState([])
const [chapter,setChapters]=useState([])
const [articles,setArticles]=useState([])

useEffect(() => {
  fetch("https://kacit.twafwane.com/wp-json/wp/v2/publications")
    .then((response) => response.json())
    .then((posts) => {
      const promises = posts.map((post) => {
        return fetch(
          `https://kacit.twafwane.com/wp-json/wp/v2/media/${post.acf.document}`
        )
          .then((response) => response.json())
          .then((media) => {
            post.document = media.source_url;
            return post;
          });
      });
      return Promise.all(promises);
    })
    .then((posts) => {
      let policy = posts.filter((i)=>i.acf.type=='KAICT Policy Brief')
      setPolicy(policy)
      let reports = posts.filter((i)=>i.acf.type=='KAICT Reports')
      let newsletter = posts.filter((i)=>i.acf.type=='KAICT Liberian Security Sector Reform Newsletter')
      let books = posts.filter((i)=>i.acf.type=='Books')
      let chapters=posts.filter((i)=>i.acf.type=='Book Chapters')
      let articles=posts.filter((i)=>i.acf.type=='Articles')
      let others=posts.filter((i)=>i.acf.type=='Other Publications')
      setReports(reports)
      setPublications(others);
      setNewsLetter(newsletter);
      setBooks(books);
      setChapters(chapters)
      setArticles(articles)
  
    })
    .catch((error) => console.error(error));
}, []);
  return (
    <>
      <Navbar />
      <AboutHero
        title={"Publications"}
        subtitle={"Learn about our research"}
        background={backgound}
      />
      <main>

        <section>
          <div className="published-container container mx-auto px-5 md:px-10">
          <div className="prog-head ">
          <h2>KAICT Reports</h2> 
                   {reports.map((i)=>(
                     <>
                    
                     <div className="pub-info">
                     <div className="flex justify-between gap-3">
                    <div>
                    <h3>
                     {i.acf.title}
                     </h3>
                     <span>
                       {i.acf.author&&(<>by <u>{i.acf.author} </u></>)}
                     </span>
                    </div>
                    <a href={i.acf.document} className="border-solid border-2 border-red-500 rounded-lg px-2 h-10 flex items-center">Download</a>
                     </div>
                     <hr className="w-full h-[1px] bg-black"/>
                   </div>
                     </>
                   ))}
              
                  </div>  
                  <div className="prog-head ">
          <h2>KAICT Policy Brief</h2> 
                   {policy.map((i)=>(
                     <>
                    
                     <div className="pub-info">
                     <div className="flex justify-between gap-3">
                    <div>
                    <h3>
                     {i.acf.title}
                     </h3>
                     <span>
                       {i.acf.author&&(<>by <u>{i.acf.author} </u></>)}
                     </span>
                    </div>
                    <a href={i.acf.document} className="border-solid border-2 border-red-500 rounded-lg px-2 h-10 flex items-center">Download</a>
                     </div>
                     <hr className="w-full h-[1px] bg-black"/>
                   </div>
                     </>
                   ))}
              
                  </div>  
                  <div className="prog-head ">
          <h2>KAICT Liberian Security Sector Reform Newsletter</h2> 
                   {newsletter.map((i)=>(
                     <>
                    
                     <div className="pub-info">
                     <div className="flex justify-between gap-3">
                    <div>
                    <h3>
                     {i.acf.title}
                     </h3>
                     <span>
                       {i.acf.author&&(<>by <u>{i.acf.author} </u></>)}
                     </span>
                    </div>
                    <a href={i.acf.document} className="border-solid border-2 border-red-500 rounded-lg px-2 h-10 flex items-center">Download</a>
                     </div>
                     <hr className="w-full h-[1px] bg-black"/>
                   </div>
                     </>
                   ))}
              
                  </div>  
                  <div className="prog-head ">
          <h2>Books</h2> 
                   {books.map((i)=>(
                     <>
                    
                     <div className="pub-info">
                     <div className="flex justify-between gap-3">
                    <div>
                    <h3>
                     {i.acf.title}
                     </h3>
                     <span>
                       {i.acf.author&&(<>by <u>{i.acf.author} </u></>)}
                     </span>
                    </div>
                    <a href={i.acf.document} className="border-solid border-2 border-red-500 rounded-lg px-2 h-10 flex items-center">Download</a>
                     </div>
                     <hr className="w-full h-[1px] bg-black"/>
                   </div>
                     </>
                   ))}
              
                  </div>
                  <div className="prog-head ">
          <h2>Book Chapters</h2> 
                   {chapter.map((i)=>(
                     <>
                    
                     <div className="pub-info">
                     <div className="flex justify-between gap-3">
                    <div>
                    <h3>
                     {i.acf.title}
                     </h3>
                     <span>
                       {i.acf.author&&(<>by <u>{i.acf.author} </u></>)}
                     </span>
                    </div>
                    <a href={i.acf.document} className="border-solid border-2 border-red-500 rounded-lg px-2 h-10 flex items-center">Download</a>
                     </div>
                     <hr className="w-full h-[1px] bg-black"/>
                   </div>
                     </>
                   ))}
              
                  </div> 
                  <div className="prog-head ">
          <h2>Articles</h2> 
                   {articles.map((i)=>(
                     <>
                    
                     <div className="pub-info">
                     <div className="flex justify-between gap-3">
                    <div>
                    <h3>
                     {i.acf.title}
                     </h3>
                     <span>
                       {i.acf.author&&(<>by <u>{i.acf.author} </u></>)}
                     </span>
                    </div>
                    <a href={i.acf.document} className="border-solid border-2 border-red-500 rounded-lg px-2 h-10 flex items-center">Download</a>
                     </div>
                     <hr className="w-full h-[1px] bg-black"/>
                   </div>
                     </>
                   ))}
              
                  </div>  
                  <div className="prog-head ">
          <h2>Other Publications</h2> 
                   {publications.map((i)=>(
                     <>
                    
                     <div className="pub-info">
                     <div className="flex justify-between gap-3">
                    <div>
                    <h3>
                     {i.acf.title}
                     </h3>
                     <span>
                       {i.acf.author&&(<>by <u>{i.acf.author} </u></>)}
                     </span>
                    </div>
                    <a href={i.acf.document} className="border-solid border-2 border-red-500 rounded-lg px-2 h-10 flex items-center">Download</a>
                     </div>
                     <hr className="w-full h-[1px] bg-black"/>
                   </div>
                     </>
                   ))}
              
                  </div>                                                                                    
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Publications;
