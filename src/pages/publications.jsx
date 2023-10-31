import { useEffect, useState } from "react";
import AboutHero from "../components/about/hero";
import Footer from "../components/utils/footer";
import Navbar from "../components/utils/navbar";
import backgound from "../hero/publications.png";

function Modal({ isOpen, onClose, children }) {
  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      // ESC key
      onClose();
    }
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const modalStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(37, 81, 140, 0.9)",
    display: isOpen ? "block" : "none",
    zIndex: 1,
  };

  const modalContentStyles = {
    position: "absolute",
    top: "65%",
    left: "50%",
    width: "1240px",
    height: "500px",
    transform: "translate(-50%, -50%)",
    background:
      "linear-gradient(0deg, #FCFCFC, #FCFCFC), url(background-nairobi.png)",
    padding: "2rem",
    zIndex: 20,
  };

  return (
    <div
      className="modal"
      style={modalStyles}
      onKeyDown={handleKeyDown}
      onClick={handleOverlayClick}
    >
      <div className="modal-content" style={modalContentStyles}>
        <div className="w-full flex items-end justify-end mb-5">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClose}
          >
            <path
              d="M6.74967 15.7083L10.4997 11.9583L14.2497 15.7083L15.708 14.2499L11.958 10.4999L15.708 6.74992L14.2497 5.29159L10.4997 9.04159L6.74967 5.29159L5.29134 6.74992L9.04134 10.4999L5.29134 14.2499L6.74967 15.7083ZM10.4997 20.9166C9.0587 20.9166 7.70454 20.643 6.43718 20.0958C5.16981 19.5492 4.06738 18.8072 3.12988 17.8697C2.19238 16.9322 1.45037 15.8298 0.903841 14.5624C0.356619 13.2951 0.0830078 11.9409 0.0830078 10.4999C0.0830078 9.05895 0.356619 7.70478 0.903841 6.43742C1.45037 5.17006 2.19238 4.06763 3.12988 3.13013C4.06738 2.19263 5.16981 1.45027 6.43718 0.903044C7.70454 0.356516 9.0587 0.083252 10.4997 0.083252C11.9406 0.083252 13.2948 0.356516 14.5622 0.903044C15.8295 1.45027 16.932 2.19263 17.8695 3.13013C18.807 4.06763 19.549 5.17006 20.0955 6.43742C20.6427 7.70478 20.9163 9.05895 20.9163 10.4999C20.9163 11.9409 20.6427 13.2951 20.0955 14.5624C19.549 15.8298 18.807 16.9322 17.8695 17.8697C16.932 18.8072 15.8295 19.5492 14.5622 20.0958C13.2948 20.643 11.9406 20.9166 10.4997 20.9166ZM10.4997 18.8333C12.8261 18.8333 14.7965 18.026 16.4111 16.4114C18.0257 14.7968 18.833 12.8263 18.833 10.4999C18.833 8.17353 18.0257 6.20304 16.4111 4.58846C14.7965 2.97388 12.8261 2.16659 10.4997 2.16659C8.17329 2.16659 6.2028 2.97388 4.58822 4.58846C2.97363 6.20304 2.16634 8.17353 2.16634 10.4999C2.16634 12.8263 2.97363 14.7968 4.58822 16.4114C6.2028 18.026 8.17329 18.8333 10.4997 18.8333Z"
              fill="#1C1B1F"
            />
          </svg>
        </div>

        {children}
      </div>
    </div>
  );
}

const Publications = () => {

const [publications,setPublications]=useState([])
const [policy, setPolicy]=useState([])
const [reports,setReports]=useState([])
const [newsletter,setNewsLetter] =useState([])
const [books, setBooks]=useState([])
const [chapter,setChapters]=useState([])
const [articles,setArticles]=useState([])

const [modalIsOpen, setModalIsOpen] = useState(false);
const [activeMember, setactiveMember] = useState(null);
const handleOpenModal = (member) => {
  setactiveMember(member);
  setModalIsOpen(true);
};

const handleCloseModal = () => {
  setModalIsOpen(false);
};

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
          <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
        <div className="flex items-start modal-member gap-5">
        <h3 className="mx-10">{activeMember?.acf.citation}</h3>
        </div>
      </Modal>
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
                    <div className="flex gap-2 items-center">
                      <button className="border-solid border-2 border-[#25518c] rounded-lg px-4 h-10 flex items-center"  onClick={() => {
                        handleOpenModal(i);
                      }}>Cite</button>
                    <a href={i.document} className="border-solid border-2 border-red-500 rounded-lg px-2 h-10 flex items-center" target="blank">Download</a>
                    </div>
                    
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
                    <div className="flex gap-2 items-center">
                      <button className="border-solid border-2 border-[#25518c] rounded-lg px-4 h-10 flex items-center"  onClick={() => {
                        handleOpenModal(i);
                      }}>Cite</button>
                    <a href={i.document} className="border-solid border-2 border-red-500 rounded-lg px-2 h-10 flex items-center" target="blank">Download</a>
                    </div>
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
                    <div className="flex gap-2 items-center">
                      <button className="border-solid border-2 border-[#25518c] rounded-lg px-4 h-10 flex items-center"  onClick={() => {
                        handleOpenModal(i);
                      }}>Cite</button>
                    <a href={i.document} className="border-solid border-2 border-red-500 rounded-lg px-2 h-10 flex items-center" target="blank">Download</a>
                    </div>
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
                    <div className="flex gap-2 items-center">
                      <button className="border-solid border-2 border-[#25518c] rounded-lg px-4 h-10 flex items-center"  onClick={() => {
                        handleOpenModal(i);
                      }}>Cite</button>
                    <a href={i.document} className="border-solid border-2 border-red-500 rounded-lg px-2 h-10 flex items-center" target="blank">Download</a>
                    </div>
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
                    <div className="flex gap-2 items-center">
                      <button className="border-solid border-2 border-[#25518c] rounded-lg px-4 h-10 flex items-center"  onClick={() => {
                        handleOpenModal(i);
                      }}>Cite</button>
                    <a href={i.document} className="border-solid border-2 border-red-500 rounded-lg px-2 h-10 flex items-center" target="blank">Download</a>
                    </div>
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
                    <div className="flex gap-2 items-center">
                      <button className="border-solid border-2 border-[#25518c] rounded-lg px-4 h-10 flex items-center"  onClick={() => {
                        handleOpenModal(i);
                      }}>Cite</button>
                    <a href={i.document} className="border-solid border-2 border-red-500 rounded-lg px-2 h-10 flex items-center" target="blank">Download</a>
                    </div>
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
                    <a href={i.document} className="border-solid border-2 border-red-500 rounded-lg px-2 h-10 flex items-center" target="blank">Download</a>
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
