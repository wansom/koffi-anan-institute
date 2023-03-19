import AboutHero from "../components/about/hero";
import LatestAnnouncement from "../components/news/latest-announcements";
import NewsSidebar from "../components/news/sidebar";
import Footer from "../components/utils/footer";
import Navbar from "../components/utils/navbar";
import backgound from "../hero/single-news.png";

const SingleNews = () => {
  return (
    <div>
      <Navbar />
      <main>
        <AboutHero
          title={"News & Announcements"}
          subtitle={"ASU students win $10K prize in 30-hour hackathon - Event looked at tackling terrorist threats to homeland security"}
          background={backgound}
        />
       <section class="news">
            <div class="news-container container">
                <div class="left">
                    <div class="single-news">
                        <div class="news-thumbnail">
                            <img src="images/news/single-news.png" alt=""/>
                            <div class="news-thumbnail-info">
                                <div class="sub-items">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_477_217" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse"
                                            x="0" y="0" width="18" height="18">
                                            <rect width="18" height="18" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_477_217)">
                                            <path
                                                d="M7.33125 9C6.88125 9 6.50625 8.83125 6.20625 8.49375C5.90625 8.15625 5.7875 7.7625 5.85 7.3125L6.09375 5.475C6.19375 4.7625 6.51875 4.172 7.06875 3.7035C7.61875 3.2345 8.2625 3 9 3C9.7375 3 10.3812 3.2345 10.9312 3.7035C11.4812 4.172 11.8062 4.7625 11.9062 5.475L12.15 7.3125C12.2125 7.7625 12.0938 8.15625 11.7938 8.49375C11.4938 8.83125 11.1188 9 10.6688 9H7.33125ZM7.33125 7.5H10.6688L10.425 5.7C10.375 5.35 10.2157 5.0625 9.94725 4.8375C9.67825 4.6125 9.3625 4.5 9 4.5C8.6375 4.5 8.322 4.6125 8.0535 4.8375C7.7845 5.0625 7.625 5.35 7.575 5.7L7.33125 7.5ZM3 15V12.9C3 12.475 3.1095 12.0843 3.3285 11.7277C3.547 11.3717 3.8375 11.1 4.2 10.9125C4.975 10.525 5.7625 10.2343 6.5625 10.0402C7.3625 9.84675 8.175 9.75 9 9.75C9.825 9.75 10.6375 9.84675 11.4375 10.0402C12.2375 10.2343 13.025 10.525 13.8 10.9125C14.1625 11.1 14.453 11.3717 14.6715 11.7277C14.8905 12.0843 15 12.475 15 12.9V15H3ZM4.5 13.5H13.5V12.9C13.5 12.7625 13.4658 12.6375 13.3973 12.525C13.3283 12.4125 13.2375 12.325 13.125 12.2625C12.45 11.925 11.7688 11.6718 11.0812 11.5028C10.3937 11.3342 9.7 11.25 9 11.25C8.3 11.25 7.60625 11.3342 6.91875 11.5028C6.23125 11.6718 5.55 11.925 4.875 12.2625C4.7625 12.325 4.672 12.4125 4.6035 12.525C4.5345 12.6375 4.5 12.7625 4.5 12.9V13.5Z"
                                                fill="#1C1B1F" />
                                        </g>
                                    </svg>
                                    <a href="#">Sanjeev Khagram</a>
                                </div>
                                <div class="sub-items">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_477_220" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse"
                                            x="0" y="0" width="18" height="18">
                                            <rect width="18" height="18" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_477_220)">
                                            <path
                                                d="M3.75 16.5C3.3375 16.5 2.98425 16.3533 2.69025 16.0597C2.39675 15.7657 2.25 15.4125 2.25 15V4.5C2.25 4.0875 2.39675 3.7345 2.69025 3.441C2.98425 3.147 3.3375 3 3.75 3H4.5V1.5H6V3H12V1.5H13.5V3H14.25C14.6625 3 15.0157 3.147 15.3097 3.441C15.6033 3.7345 15.75 4.0875 15.75 4.5V15C15.75 15.4125 15.6033 15.7657 15.3097 16.0597C15.0157 16.3533 14.6625 16.5 14.25 16.5H3.75ZM3.75 15H14.25V7.5H3.75V15ZM3.75 6H14.25V4.5H3.75V6ZM9 10.5C8.7875 10.5 8.6095 10.428 8.466 10.284C8.322 10.1405 8.25 9.9625 8.25 9.75C8.25 9.5375 8.322 9.35925 8.466 9.21525C8.6095 9.07175 8.7875 9 9 9C9.2125 9 9.39075 9.07175 9.53475 9.21525C9.67825 9.35925 9.75 9.5375 9.75 9.75C9.75 9.9625 9.67825 10.1405 9.53475 10.284C9.39075 10.428 9.2125 10.5 9 10.5ZM6 10.5C5.7875 10.5 5.60925 10.428 5.46525 10.284C5.32175 10.1405 5.25 9.9625 5.25 9.75C5.25 9.5375 5.32175 9.35925 5.46525 9.21525C5.60925 9.07175 5.7875 9 6 9C6.2125 9 6.39075 9.07175 6.53475 9.21525C6.67825 9.35925 6.75 9.5375 6.75 9.75C6.75 9.9625 6.67825 10.1405 6.53475 10.284C6.39075 10.428 6.2125 10.5 6 10.5ZM12 10.5C11.7875 10.5 11.6095 10.428 11.466 10.284C11.322 10.1405 11.25 9.9625 11.25 9.75C11.25 9.5375 11.322 9.35925 11.466 9.21525C11.6095 9.07175 11.7875 9 12 9C12.2125 9 12.3905 9.07175 12.534 9.21525C12.678 9.35925 12.75 9.5375 12.75 9.75C12.75 9.9625 12.678 10.1405 12.534 10.284C12.3905 10.428 12.2125 10.5 12 10.5ZM9 13.5C8.7875 13.5 8.6095 13.428 8.466 13.284C8.322 13.1405 8.25 12.9625 8.25 12.75C8.25 12.5375 8.322 12.3595 8.466 12.216C8.6095 12.072 8.7875 12 9 12C9.2125 12 9.39075 12.072 9.53475 12.216C9.67825 12.3595 9.75 12.5375 9.75 12.75C9.75 12.9625 9.67825 13.1405 9.53475 13.284C9.39075 13.428 9.2125 13.5 9 13.5ZM6 13.5C5.7875 13.5 5.60925 13.428 5.46525 13.284C5.32175 13.1405 5.25 12.9625 5.25 12.75C5.25 12.5375 5.32175 12.3595 5.46525 12.216C5.60925 12.072 5.7875 12 6 12C6.2125 12 6.39075 12.072 6.53475 12.216C6.67825 12.3595 6.75 12.5375 6.75 12.75C6.75 12.9625 6.67825 13.1405 6.53475 13.284C6.39075 13.428 6.2125 13.5 6 13.5ZM12 13.5C11.7875 13.5 11.6095 13.428 11.466 13.284C11.322 13.1405 11.25 12.9625 11.25 12.75C11.25 12.5375 11.322 12.3595 11.466 12.216C11.6095 12.072 11.7875 12 12 12C12.2125 12 12.3905 12.072 12.534 12.216C12.678 12.3595 12.75 12.5375 12.75 12.75C12.75 12.9625 12.678 13.1405 12.534 13.284C12.3905 13.428 12.2125 13.5 12 13.5Z"
                                                fill="#1C1B1F" />
                                        </g>
                                    </svg>
                                    <span>March 5, 2023</span>
                                </div>
                                <div class="sub-items">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_477_223" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse"
                                            x="0" y="0" width="18" height="18">
                                            <rect width="18" height="18" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_477_223)">
                                            <path
                                                d="M15.75 9L12.4875 13.6125C12.35 13.8125 12.172 13.9688 11.9535 14.0812C11.7345 14.1937 11.5 14.25 11.25 14.25H3.75C3.3375 14.25 2.98425 14.1033 2.69025 13.8097C2.39675 13.5157 2.25 13.1625 2.25 12.75V5.25C2.25 4.8375 2.39675 4.4845 2.69025 4.191C2.98425 3.897 3.3375 3.75 3.75 3.75H11.25C11.5 3.75 11.7345 3.80625 11.9535 3.91875C12.172 4.03125 12.35 4.1875 12.4875 4.3875L15.75 9ZM13.9125 9L11.25 5.25H3.75V12.75H11.25L13.9125 9Z"
                                                fill="#1C1B1F" />
                                        </g>
                                    </svg>
                                    <a href="#">Admission</a>,
                                    <a href="#">Event</a>,
                                    <a href="#">Student</a>
                                </div>
                            </div>
                        </div>
                        <div class="single-news-content">
                            <h1>ASU students win $10K prize in 30-hour hackathon - Event looked at tackling terrorist
                                threats to homeland security</h1>
                            <p>There was pure joy, followed by lots of hugs and high-fives on Sunday afternoon when a
                                team of five Arizona State University students won a $10,000 prize for creating a design
                                to divert a domestic terrorist attack.</p>

                            <p>It was all part of a Devils Invent event, which took place Feb. 24–26 in the Engineering
                                Center on the Tempe campus and via Zoom. Devils Invent is a series of design challenges
                                put on by ASU’s Ira A. Fulton Schools of Engineering.</p>

                            <p>The event's theme was “Protecting America’s Public Access Areas” and featured the U.S.
                                Department of Homeland Security.</p>

                            <p>The hackathon brought together 23 teams from 11 colleges across the country, including
                                Northeastern University, San Diego State University, the University of the District of
                                Columbia and California State University, Los Angeles.</p>

                            <p>“Essentially, it is a way for students to design, innovate and build their teamwork and
                                hands-on technical skills,” said Melissa Stine, coordinator senior for student success
                                and engagement at the Fulton Schools.<br></br>
                            The goal of the challenge was to design effective responses to Department of Homeland
                            Security threats in what are described as soft locations — churches, museums, schools,
                            stadiums and other public places. Organizers paired students with academic and industry
                            mentors to solve problem scenarios.</p>

                            <p>Participants were tasked with designing responses to one of the following prompts:
                                How do we guide crowds to good decisions during an attack?
                                How do we enable effective and timely communication among stakeholders and responders to
                                allow for oversight and response to an attack?
                                How can we inform and enable civilians to prepare for a drone attack?</p>

                            <p>The winning team, called Malindo, was made up of five computer science students from the
                                Fulton Schools: Nathan McAvoy, Fawwaz Firdaus, Kalyanam Priyam Dewri, Camelia Ariana
                                Binti Ahmad Nasri and Rui Heng Foo.</p>
                            <div class="news-caption">
                                <img src="images/news/post-image.png" alt=""/>
                                <div class="news-caption-info">
                                    <p>The image of an armed terrorist was part of a winning design created by the ASU
                                        team Malindo during a design challenge for the Homeland Security Department.
                                        Photo by Dolores Tropiano</p>
                                </div>
                            </div>
                            <p>The team spent 30 hours in the Engineering Center working on the project — which turned
                                out to be time well spent.</p>

                            <p>“We can learn more here than we can learn in a classroom,” said team member Firdaus, a
                                second-year student. “I feel more passionate about doing this than I would doing
                                homework. … I would never stay up all night doing homework.”</p>

                            <p>There was more than passion that kept them going.</p>

                            <p>“We had good snacks and a lot of Red Bulls,” said McAvoy, a first-year student on the
                                team.</p>

                            <p>The weekend-long event kicked off with a keynote speaker, George Naccara, a retired
                                admiral in the U.S.</p>

                            <p>Coast Guard and former senior official at the Department of Homeland Security.</p>

                            <p>Naccara described the profile of a domestic terrorist based on multiple government
                                studies.</p>

                            <p>Most attacks occur in public access areas, 71% involve firearms, 90% are male with a
                                criminal history, and the suspect typically has extreme ideologically and hateful views,
                                he said.</p>
                            <div class="posts">
                                <div class="posts-tags">
                                    <span>Tags: </span>
                                    <a href="#">Admission</a>,
                                    <a href="#">Events</a>,
                                    <a href="#">Students</a>
                                </div>
                                <div class="posts-slider">
                                    <div class="arrow">
                                        <button>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_477_236" style={{ maskType: "alpha" }}
                                                    maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
                                                    <rect width="30" height="30" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_477_236)">
                                                    <path
                                                        d="M15 25L5 15L15 5L16.7812 6.75L9.78125 13.75H25V16.25H9.78125L16.7812 23.25L15 25Z"
                                                        fill="#1C1B1F" />
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="post-slides">
                                        <div class="post-slide">
                                            <div class="slide-top">
                                                <span>Previous Post</span>
                                                <span>Next Post</span>
                                            </div>
                                            <div class="slide-content">
                                                <div class="post text-left">
                                                    <a href="#" class="one text-left">Impact Showcase
                                                        highlights institute's many research, education activities</a>
                                                </div>
                                                <div class="post text-right">
                                                    <a href="#" class="two text-right">Shark-saving
                                                        technology makes waves - ASU professor uses tracking
                                                        technology</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="arrow">
                                        <button>
                                            <svg style={{transform: 'rotate(-180deg)'}} width="30" height="30"
                                                viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_477_236" style={{ maskType: "alpha" }}
                                                    maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
                                                    <rect width="30" height="30" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_477_236)">
                                                    <path
                                                        d="M15 25L5 15L15 5L16.7812 6.75L9.78125 13.75H25V16.25H9.78125L16.7812 23.25L15 25Z"
                                                        fill="#1C1B1F" />
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="commenting">
                                <div class="comments-head">
                                    <h1>Leave a Reply</h1>
                                </div>
                                <div class="comment-form">
                                    <form action="">
                                        <div class="control-group">
                                            <label for="name">Name</label><br></br>
                                            <input class="comment-input" type="text" placeholder="Sanjeev Khagram"></input>
                                        </div>
                                        <div class="control-group">
                                            <label for="email">Email Address</label><br/>
                                            <input class="comment-input" type="email" name="email"
                                                placeholder="sanjeevk@gmail.com"/>
                                        </div>
                                        <div class="control-group">
                                            <label for="">Comment?</label><br/>
                                            <textarea name="message" id="" cols="30" rows="10"
                                                placeholder="Type your comment here..."></textarea>
                                        </div>
                                        <div class="control-group checkbox">
                                            <input type="checkbox" id="checkboxed"/>
                                            <label for="">By clicking on “Send Message” you agree to our Terms &
                                                Conditions and Privacy
                                                Statement.</label>
                                        </div>
                                        <div class="control-group">
                                            <button type="submit">Comment</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="comments">
                                    <div class="comments-head">
                                        <span>Comments</span>
                                        <span>4 Comments</span>
                                    </div>
                                    <div class="persons-comments">
                                        <div class="comment">
                                            <div class="top-comment">
                                                <span>Sanjeev Khagram</span>
                                                <span>May 12 2022</span>
                                            </div>
                                            <div class="comment-msg">
                                                <p>Do you want to become a UI/UX designer but you don’t know where to
                                                    start? This course will allow you to develop your user interface
                                                    design skills and you can add UI designer.</p>
                                            </div>
                                            <div class="commented-reply">
                                                <div class="arrow">
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
                                                <div class="reply-msgs">
                                                    <div class="comment">
                                                        <div class="top-comment">
                                                            <span>Sanjeev Khagram</span>
                                                            <span>May 12 2022</span>
                                                        </div>
                                                        <div class="comment-msg">
                                                            <p>Do you want to become a UI/UX designer but you don’t know
                                                                where to start? This course will allow you to develop
                                                                your user interface design skills and you can add UI
                                                                designer.</p>
                                                        </div>
                                                    </div>
                                                    <div class="comment">
                                                        <div class="top-comment">
                                                            <span>Sanjeev Khagram</span>
                                                            <span>May 12 2022</span>
                                                        </div>
                                                        <div class="comment-msg">
                                                            <p>Do you want to become a UI/UX designer but you don’t know
                                                                where to start? This course will allow you to develop
                                                                your user interface design skills and you can add UI
                                                                designer.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="comment">
                                            <div class="top-comment">
                                                <span>Sanjeev Khagram</span>
                                                <span>May 12 2022</span>
                                            </div>
                                            <div class="comment-msg">
                                                <p>Do you want to become a UI/UX designer but you don’t know where to
                                                    start? This course will allow you to develop your user interface
                                                    design skills and you can add UI designer.</p>
                                            </div>
                                        </div>
                                        <div class="comment">
                                            <div class="top-comment">
                                                <span>Sanjeev Khagram</span>
                                                <span>May 12 2022</span>
                                            </div>
                                            <div class="comment-msg">
                                                <p>Do you want to become a UI/UX designer but you don’t know where to
                                                    start? This course will allow you to develop your user interface
                                                    design skills and you can add UI designer.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <NewsSidebar/>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
export default SingleNews;
