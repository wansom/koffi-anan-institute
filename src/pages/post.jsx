import AboutHero from "../components/about/hero";
import NewsSidebar from "../components/news/sidebar";
import Footer from "../components/utils/footer";
import Navbar from "../components/utils/navbar";
import backgound from "../hero/single-news.png";
import { useState, useEffect } from "react";
import { getData } from "../services";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [post, setpost] = useState(null);
  const [previousItem, setPreviousItem] = useState(null);
  const [nextItem, setNextItem] = useState(null);
  const id = useParams();
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
        setNews(posts);
        const currentIndex = posts.findIndex((item) => item.slug === id.id);

        if (currentIndex !== -1) {
          const currentItem = posts[currentIndex];
          const previousItem =
            currentIndex > 0 ? posts[currentIndex - 1] : null;
          const nextItem =
            currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

          setpost(currentItem);
          setPreviousItem(previousItem);
          setNextItem(nextItem);
        }
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <Navbar />
      <main>
        <section
          className="about"
          style={{
            backgroundImage: `url('../images/news/single-banner.png')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="banner-mask">
            <div className="banner-container container">
              <div className="banner-text">
                <p>News & Announcements</p>
                {loading ? (
                  <h1></h1>
                ) : (
                  <h1
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    className="uppercase"
                  ></h1>
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="news">
          <div className="news-container container">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className="left">
                <div className="single-news">
                  <div className="news-thumbnail">
                    <img src={post.featured_image_url} alt="" />
                    <div className="news-thumbnail-info">
                      <div className="sub-items">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_477_217"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="18"
                            height="18"
                          >
                            <rect width="18" height="18" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_477_217)">
                            <path
                              d="M7.33125 9C6.88125 9 6.50625 8.83125 6.20625 8.49375C5.90625 8.15625 5.7875 7.7625 5.85 7.3125L6.09375 5.475C6.19375 4.7625 6.51875 4.172 7.06875 3.7035C7.61875 3.2345 8.2625 3 9 3C9.7375 3 10.3812 3.2345 10.9312 3.7035C11.4812 4.172 11.8062 4.7625 11.9062 5.475L12.15 7.3125C12.2125 7.7625 12.0938 8.15625 11.7938 8.49375C11.4938 8.83125 11.1188 9 10.6688 9H7.33125ZM7.33125 7.5H10.6688L10.425 5.7C10.375 5.35 10.2157 5.0625 9.94725 4.8375C9.67825 4.6125 9.3625 4.5 9 4.5C8.6375 4.5 8.322 4.6125 8.0535 4.8375C7.7845 5.0625 7.625 5.35 7.575 5.7L7.33125 7.5ZM3 15V12.9C3 12.475 3.1095 12.0843 3.3285 11.7277C3.547 11.3717 3.8375 11.1 4.2 10.9125C4.975 10.525 5.7625 10.2343 6.5625 10.0402C7.3625 9.84675 8.175 9.75 9 9.75C9.825 9.75 10.6375 9.84675 11.4375 10.0402C12.2375 10.2343 13.025 10.525 13.8 10.9125C14.1625 11.1 14.453 11.3717 14.6715 11.7277C14.8905 12.0843 15 12.475 15 12.9V15H3ZM4.5 13.5H13.5V12.9C13.5 12.7625 13.4658 12.6375 13.3973 12.525C13.3283 12.4125 13.2375 12.325 13.125 12.2625C12.45 11.925 11.7688 11.6718 11.0812 11.5028C10.3937 11.3342 9.7 11.25 9 11.25C8.3 11.25 7.60625 11.3342 6.91875 11.5028C6.23125 11.6718 5.55 11.925 4.875 12.2625C4.7625 12.325 4.672 12.4125 4.6035 12.525C4.5345 12.6375 4.5 12.7625 4.5 12.9V13.5Z"
                              fill="#1C1B1F"
                            />
                          </g>
                        </svg>
                        <a href="#">Sanjeev Khagram</a>
                      </div>
                      <div className="sub-items">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_477_220"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="18"
                            height="18"
                          >
                            <rect width="18" height="18" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_477_220)">
                            <path
                              d="M3.75 16.5C3.3375 16.5 2.98425 16.3533 2.69025 16.0597C2.39675 15.7657 2.25 15.4125 2.25 15V4.5C2.25 4.0875 2.39675 3.7345 2.69025 3.441C2.98425 3.147 3.3375 3 3.75 3H4.5V1.5H6V3H12V1.5H13.5V3H14.25C14.6625 3 15.0157 3.147 15.3097 3.441C15.6033 3.7345 15.75 4.0875 15.75 4.5V15C15.75 15.4125 15.6033 15.7657 15.3097 16.0597C15.0157 16.3533 14.6625 16.5 14.25 16.5H3.75ZM3.75 15H14.25V7.5H3.75V15ZM3.75 6H14.25V4.5H3.75V6ZM9 10.5C8.7875 10.5 8.6095 10.428 8.466 10.284C8.322 10.1405 8.25 9.9625 8.25 9.75C8.25 9.5375 8.322 9.35925 8.466 9.21525C8.6095 9.07175 8.7875 9 9 9C9.2125 9 9.39075 9.07175 9.53475 9.21525C9.67825 9.35925 9.75 9.5375 9.75 9.75C9.75 9.9625 9.67825 10.1405 9.53475 10.284C9.39075 10.428 9.2125 10.5 9 10.5ZM6 10.5C5.7875 10.5 5.60925 10.428 5.46525 10.284C5.32175 10.1405 5.25 9.9625 5.25 9.75C5.25 9.5375 5.32175 9.35925 5.46525 9.21525C5.60925 9.07175 5.7875 9 6 9C6.2125 9 6.39075 9.07175 6.53475 9.21525C6.67825 9.35925 6.75 9.5375 6.75 9.75C6.75 9.9625 6.67825 10.1405 6.53475 10.284C6.39075 10.428 6.2125 10.5 6 10.5ZM12 10.5C11.7875 10.5 11.6095 10.428 11.466 10.284C11.322 10.1405 11.25 9.9625 11.25 9.75C11.25 9.5375 11.322 9.35925 11.466 9.21525C11.6095 9.07175 11.7875 9 12 9C12.2125 9 12.3905 9.07175 12.534 9.21525C12.678 9.35925 12.75 9.5375 12.75 9.75C12.75 9.9625 12.678 10.1405 12.534 10.284C12.3905 10.428 12.2125 10.5 12 10.5ZM9 13.5C8.7875 13.5 8.6095 13.428 8.466 13.284C8.322 13.1405 8.25 12.9625 8.25 12.75C8.25 12.5375 8.322 12.3595 8.466 12.216C8.6095 12.072 8.7875 12 9 12C9.2125 12 9.39075 12.072 9.53475 12.216C9.67825 12.3595 9.75 12.5375 9.75 12.75C9.75 12.9625 9.67825 13.1405 9.53475 13.284C9.39075 13.428 9.2125 13.5 9 13.5ZM6 13.5C5.7875 13.5 5.60925 13.428 5.46525 13.284C5.32175 13.1405 5.25 12.9625 5.25 12.75C5.25 12.5375 5.32175 12.3595 5.46525 12.216C5.60925 12.072 5.7875 12 6 12C6.2125 12 6.39075 12.072 6.53475 12.216C6.67825 12.3595 6.75 12.5375 6.75 12.75C6.75 12.9625 6.67825 13.1405 6.53475 13.284C6.39075 13.428 6.2125 13.5 6 13.5ZM12 13.5C11.7875 13.5 11.6095 13.428 11.466 13.284C11.322 13.1405 11.25 12.9625 11.25 12.75C11.25 12.5375 11.322 12.3595 11.466 12.216C11.6095 12.072 11.7875 12 12 12C12.2125 12 12.3905 12.072 12.534 12.216C12.678 12.3595 12.75 12.5375 12.75 12.75C12.75 12.9625 12.678 13.1405 12.534 13.284C12.3905 13.428 12.2125 13.5 12 13.5Z"
                              fill="#1C1B1F"
                            />
                          </g>
                        </svg>
                        <span>{new Date(post.date).toDateString()}</span>
                      </div>
                      <div className="sub-items">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_477_223"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="18"
                            height="18"
                          >
                            <rect width="18" height="18" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_477_223)">
                            <path
                              d="M15.75 9L12.4875 13.6125C12.35 13.8125 12.172 13.9688 11.9535 14.0812C11.7345 14.1937 11.5 14.25 11.25 14.25H3.75C3.3375 14.25 2.98425 14.1033 2.69025 13.8097C2.39675 13.5157 2.25 13.1625 2.25 12.75V5.25C2.25 4.8375 2.39675 4.4845 2.69025 4.191C2.98425 3.897 3.3375 3.75 3.75 3.75H11.25C11.5 3.75 11.7345 3.80625 11.9535 3.91875C12.172 4.03125 12.35 4.1875 12.4875 4.3875L15.75 9ZM13.9125 9L11.25 5.25H3.75V12.75H11.25L13.9125 9Z"
                              fill="#1C1B1F"
                            />
                          </g>
                        </svg>
                        <a href="#">Admission</a>,<a href="#">Event</a>,
                        <a href="#">Student</a>
                      </div>
                    </div>
                  </div>
                  <div className="single-news-content">
                    <h1
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    ></h1>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.content.rendered,
                      }}
                    ></p>

                    {/* <div className="news-caption">
                                <img src={post.featured_image_url} alt=""/>
                                <div className="news-caption-info">
                                    <p>The image of an armed terrorist was part of a winning design created by the ASU
                                        team Malindo during a design challenge for the Homeland Security Department.
                                        Photo by Dolores Tropiano</p>
                                </div>
                            </div> */}
                    <div className="posts">
                      <div className="posts-tags">
                        <span>Tags: </span>
                        <a href="#">Admission</a>,<a href="#">Events</a>,
                        <a href="#">Students</a>
                      </div>
                      <div className="posts-slider">
                        <div className="arrow">
                          {previousItem && (
                            <a href={`/news/${previousItem.slug}`}>
                              <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <mask
                                  id="mask0_477_236"
                                  style={{ maskType: "alpha" }}
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                  width="30"
                                  height="30"
                                >
                                  <rect width="30" height="30" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_477_236)">
                                  <path
                                    d="M15 25L5 15L15 5L16.7812 6.75L9.78125 13.75H25V16.25H9.78125L16.7812 23.25L15 25Z"
                                    fill="#1C1B1F"
                                  />
                                </g>
                              </svg>
                            </a>
                          )}
                        </div>
                        <div className="post-slides">
                          <div className="post-slide">
                            <div className="slide-top">
                              {previousItem&&(<span>Previous Post</span>)}
                              {nextItem&&(<span>Next Post</span>)}
                            </div>
                            <div className="slide-content">
                              <div className="post text-left">
                                {previousItem && (
                                  <a
                                    href={`/news/${previousItem.slug}`}
                                    className="one text-left"
                                    dangerouslySetInnerHTML={{
                                      __html: previousItem.title.rendered,
                                    }}
                                  ></a>
                                )}
                              </div>
                              <div className="post text-right">
                                {nextItem && (
                                  <a
                                    href={`/news/${nextItem.slug}`}
                                    className="two text-right"
                                    dangerouslySetInnerHTML={{
                                      __html: nextItem.title.rendered,
                                    }}
                                  ></a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="arrow">
                          {nextItem && (
                            <a href={`/news/${nextItem.slug}`}>
                              <svg
                                style={{ transform: "rotate(-180deg)" }}
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <mask
                                  id="mask0_477_236"
                                  style={{ maskType: "alpha" }}
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                  width="30"
                                  height="30"
                                >
                                  <rect width="30" height="30" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_477_236)">
                                  <path
                                    d="M15 25L5 15L15 5L16.7812 6.75L9.78125 13.75H25V16.25H9.78125L16.7812 23.25L15 25Z"
                                    fill="#1C1B1F"
                                  />
                                </g>
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="commenting">
                      <div className="comments-head">
                        <h1>Leave a Reply</h1>
                      </div>
                      <div className="comment-form">
                        <form action="">
                          <div className="control-group">
                            <label for="name">Name</label>
                            <br></br>
                            <input
                              className="comment-input"
                              type="text"
                              placeholder="Sanjeev Khagram"
                            ></input>
                          </div>
                          <div className="control-group">
                            <label for="email">Email Address</label>
                            <br />
                            <input
                              className="comment-input"
                              type="email"
                              name="email"
                              placeholder="sanjeevk@gmail.com"
                            />
                          </div>
                          <div className="control-group">
                            <label for="">Comment?</label>
                            <br />
                            <textarea
                              name="message"
                              id=""
                              cols="30"
                              rows="10"
                              placeholder="Type your comment here..."
                            ></textarea>
                          </div>
                          <div className="control-group checkbox">
                            <input type="checkbox" id="checkboxed" />
                            <label for="">
                              By clicking on “Send Message” you agree to our
                              Terms & Conditions and Privacy Statement.
                            </label>
                          </div>
                          <div className="control-group">
                            <button type="submit">Comment</button>
                          </div>
                        </form>
                      </div>
                      {/* <div className="comments">
                                    <div className="comments-head">
                                        <span>Comments</span>
                                        <span>4 Comments</span>
                                    </div>
                                    <div className="persons-comments">
                                        <div className="comment">
                                            <div className="top-comment">
                                                <span>Sanjeev Khagram</span>
                                                <span>May 12 2022</span>
                                            </div>
                                            <div className="comment-msg">
                                                <p>Do you want to become a UI/UX designer but you don’t know where to
                                                    start? This course will allow you to develop your user interface
                                                    design skills and you can add UI designer.</p>
                                            </div>
                                            <div className="commented-reply">
                                                <div className="arrow">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <mask id="mask0_477_336" style={{ maskType: "alpha" }}
                                                            maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                                                            height="24">
                                                            <rect width="24" height="24" fill="#D9D9D9" />
                                                        </mask>
                                                        <g mask="url(#mask0_477_336)">
                                                            <path
                                                                d="M14 21L12.6 19.575L16.175 16H5V4H7V14H16.175L12.575 10.4L14 8.975L20 15L14 21Z"
                                                                fill="#1C1B1F" />
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div className="reply-msgs">
                                                    <div className="comment">
                                                        <div className="top-comment">
                                                            <span>Sanjeev Khagram</span>
                                                            <span>May 12 2022</span>
                                                        </div>
                                                        <div className="comment-msg">
                                                            <p>Do you want to become a UI/UX designer but you don’t know
                                                                where to start? This course will allow you to develop
                                                                your user interface design skills and you can add UI
                                                                designer.</p>
                                                        </div>
                                                    </div>
                                                    <div className="comment">
                                                        <div className="top-comment">
                                                            <span>Sanjeev Khagram</span>
                                                            <span>May 12 2022</span>
                                                        </div>
                                                        <div className="comment-msg">
                                                            <p>Do you want to become a UI/UX designer but you don’t know
                                                                where to start? This course will allow you to develop
                                                                your user interface design skills and you can add UI
                                                                designer.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment">
                                            <div className="top-comment">
                                                <span>Sanjeev Khagram</span>
                                                <span>May 12 2022</span>
                                            </div>
                                            <div className="comment-msg">
                                                <p>Do you want to become a UI/UX designer but you don’t know where to
                                                    start? This course will allow you to develop your user interface
                                                    design skills and you can add UI designer.</p>
                                            </div>
                                        </div>
                                        <div className="comment">
                                            <div className="top-comment">
                                                <span>Sanjeev Khagram</span>
                                                <span>May 12 2022</span>
                                            </div>
                                            <div className="comment-msg">
                                                <p>Do you want to become a UI/UX designer but you don’t know where to
                                                    start? This course will allow you to develop your user interface
                                                    design skills and you can add UI designer.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                    </div>
                  </div>
                </div>
              </div>
            )}
            <NewsSidebar news={news} loading={loading} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default SinglePost;
