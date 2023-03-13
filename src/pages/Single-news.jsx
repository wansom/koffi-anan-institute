import AboutHero from "../components/about/hero";
import LatestAnnouncement from "../components/news/latest-announcements";
import Footer from "../components/utils/footer";
import Navbar from "../components/utils/navbar";
import backgound from "../hero/about.png";

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
                <div class="right">
                    <div class="news-list">
                        <div class="news top">
                            <div class="head-new">
                                <h4>All Categories</h4>
                            </div>
                            <ul>
                                <li><a href="#"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_477_49" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse"
                                                x="0" y="0" width="14" height="14">
                                                <rect width="14" height="14" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_477_49)">
                                                <path
                                                    d="M5.48366 10.5L4.66699 9.68333L7.35033 7L4.66699 4.31667L5.48366 3.5L8.98366 7L5.48366 10.5Z"
                                                    fill="#25518C" />
                                            </g>
                                        </svg>
                                        Student</a></li>
                                <li><a href="#"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_477_49" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse"
                                                x="0" y="0" width="14" height="14">
                                                <rect width="14" height="14" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_477_49)">
                                                <path
                                                    d="M5.48366 10.5L4.66699 9.68333L7.35033 7L4.66699 4.31667L5.48366 3.5L8.98366 7L5.48366 10.5Z"
                                                    fill="#25518C" />
                                            </g>
                                        </svg>
                                        Seminars</a></li>
                                <li><a href="#"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_477_49" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse"
                                                x="0" y="0" width="14" height="14">
                                                <rect width="14" height="14" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_477_49)">
                                                <path
                                                    d="M5.48366 10.5L4.66699 9.68333L7.35033 7L4.66699 4.31667L5.48366 3.5L8.98366 7L5.48366 10.5Z"
                                                    fill="#25518C" />
                                            </g>
                                        </svg>
                                        Research</a></li>
                                <li><a href="#"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_477_49" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse"
                                                x="0" y="0" width="14" height="14">
                                                <rect width="14" height="14" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_477_49)">
                                                <path
                                                    d="M5.48366 10.5L4.66699 9.68333L7.35033 7L4.66699 4.31667L5.48366 3.5L8.98366 7L5.48366 10.5Z"
                                                    fill="#25518C" />
                                            </g>
                                        </svg>
                                        Events</a></li>
                                <li><a href="#"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_477_49" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse"
                                                x="0" y="0" width="14" height="14">
                                                <rect width="14" height="14" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_477_49)">
                                                <path
                                                    d="M5.48366 10.5L4.66699 9.68333L7.35033 7L4.66699 4.31667L5.48366 3.5L8.98366 7L5.48366 10.5Z"
                                                    fill="#25518C" />
                                            </g>
                                        </svg>
                                        Admissions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="news-list">
                        <div class="news">
                            <div class="top">
                                <div class="left-tag"><span>Weekly updates</span></div>
                                <div class="right-tag"><span>AUGUST 13, 2021 </span></div>
                            </div>
                            <div class="bottom">
                                <h4>International Women’s Day</h4>
                                <p>The students of the third cohort of the Kofi Annan Living Memorial (KALM)
                                    celebrate...</p>
                            </div>
                        </div>
                        <div class="news">
                            <div class="top">
                                <div class="left-tag"><span>Weekly updates</span></div>
                                <div class="right-tag"><span>AUGUST 13, 2021 </span></div>
                            </div>
                            <div class="bottom">
                                <h4>International Women’s Day</h4>
                                <p>The students of the third cohort of the Kofi Annan Living Memorial (KALM)
                                    celebrate...</p>
                            </div>
                        </div>
                        <div class="news">
                            <div class="top">
                                <div class="left-tag"><span>Weekly updates</span></div>
                                <div class="right-tag"><span>AUGUST 13, 2021 </span></div>
                            </div>
                            <div class="bottom">
                                <h4>International Women’s Day</h4>
                                <p>The students of the third cohort of the Kofi Annan Living Memorial (KALM)
                                    celebrate...</p>
                            </div>
                        </div>
                    </div>
                    <div class="side-socials">
                        <img src="images/news/side-social.png" alt=""/>
                        <div class="side-info">
                            <div class="side-contact">
                                <div class="icon one"><svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_477_107" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse"
                                            x="0" y="0" width="25" height="25">
                                            <rect width="25" height="25" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_477_107)">
                                            <path
                                                d="M20.7812 21.875C18.5417 21.875 16.3585 21.3759 14.2318 20.3776C12.105 19.3793 10.2214 18.0599 8.58073 16.4193C6.9401 14.7786 5.62066 12.895 4.6224 10.7682C3.62413 8.64149 3.125 6.45833 3.125 4.21875C3.125 3.90625 3.22917 3.64583 3.4375 3.4375C3.64583 3.22917 3.90625 3.125 4.21875 3.125H8.4375C8.68056 3.125 8.89757 3.20312 9.08854 3.35938C9.27951 3.51562 9.39236 3.71528 9.42708 3.95833L10.1042 7.60417C10.1389 7.84722 10.1345 8.06858 10.0911 8.26823C10.0477 8.46788 9.94792 8.64583 9.79167 8.80208L7.29167 11.3542C8.02083 12.6042 8.93229 13.776 10.026 14.8698C11.1198 15.9635 12.3264 16.9097 13.6458 17.7083L16.0937 15.2604C16.25 15.1042 16.454 14.987 16.7057 14.9089C16.9575 14.8307 17.2049 14.809 17.4479 14.8438L21.0417 15.5729C21.2847 15.625 21.4844 15.7422 21.6406 15.9245C21.7969 16.1068 21.875 16.3194 21.875 16.5625V20.7812C21.875 21.0938 21.7708 21.3542 21.5625 21.5625C21.3542 21.7708 21.0938 21.875 20.7812 21.875Z"
                                                fill="#FCFCFC" />
                                        </g>
                                    </svg>
                                </div>
                                <div class="text">
                                    <h5>Call Us</h5>
                                    <p>+254 020 315-8538</p>
                                </div>
                            </div>
                            <div class="side-contact">
                                <div class="icon two"><svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_477_114" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse"
                                            x="0" y="0" width="25" height="25">
                                            <rect width="25" height="25" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_477_114)">
                                            <path
                                                d="M4.16732 20.8334C3.5944 20.8334 3.10395 20.6294 2.69596 20.2214C2.28798 19.8134 2.08398 19.323 2.08398 18.7501V6.25008C2.08398 5.67716 2.28798 5.18671 2.69596 4.77873C3.10395 4.37074 3.5944 4.16675 4.16732 4.16675H20.834C21.4069 4.16675 21.8974 4.37074 22.3053 4.77873C22.7133 5.18671 22.9173 5.67716 22.9173 6.25008V18.7501C22.9173 19.323 22.7133 19.8134 22.3053 20.2214C21.8974 20.6294 21.4069 20.8334 20.834 20.8334H4.16732ZM12.5007 13.5417L20.834 8.33341V6.25008L12.5007 11.4584L4.16732 6.25008V8.33341L12.5007 13.5417Z"
                                                fill="#FCFCFC" />
                                        </g>
                                    </svg>
                                </div>
                                <div class="text">
                                    <h5>Call Us</h5>
                                    <p>+254 020 315-8538</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="side-socials">
                        <div class="side-info">
                            <div class="social-side-icons">
                                <a href="#"><svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_477_641)">
                                            <path
                                                d="M30 15C30 6.71572 23.2843 0 15 0C6.71572 0 0 6.71572 0 15C0 22.4868 5.48525 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85937 18.322 5.85937C19.9626 5.85937 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.925 9.84375 17.3438 11.0001 17.3438 12.1875V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.4868 30 15Z"
                                                fill="#25518C" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_477_641">
                                                <rect width="30" height="30" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                <a href="#"><svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_477_639)">
                                            <path
                                                d="M9.4377 27.1875C20.7557 27.1875 26.9479 17.8084 26.9479 9.67739C26.9479 9.41372 26.942 9.14418 26.9303 8.88051C28.1348 8.00939 29.1744 6.93038 30 5.69418C28.8782 6.19331 27.6871 6.51929 26.4674 6.66098C27.7516 5.8912 28.7132 4.6819 29.1738 3.25727C27.9657 3.97326 26.6445 4.47833 25.2668 4.75082C24.3385 3.76451 23.1112 3.11146 21.7746 2.89262C20.438 2.67379 19.0665 2.90137 17.8722 3.54018C16.6779 4.17899 15.7273 5.19344 15.1673 6.4267C14.6074 7.65996 14.4693 9.04333 14.7744 10.3629C12.3281 10.2402 9.93492 9.60469 7.74998 8.49768C5.56503 7.39068 3.63712 5.83686 2.09121 3.93696C1.3055 5.29162 1.06507 6.89462 1.41879 8.42018C1.77251 9.94573 2.69383 11.2794 3.99551 12.15C3.01829 12.119 2.06247 11.8559 1.20703 11.3825V11.4586C1.20616 12.8802 1.69762 14.2583 2.59789 15.3585C3.49815 16.4588 4.75165 17.2133 6.14531 17.4938C5.24007 17.7415 4.28998 17.7776 3.36855 17.5993C3.76182 18.8219 4.52697 19.8912 5.55721 20.658C6.58746 21.4248 7.8314 21.8508 9.11543 21.8766C6.93553 23.5889 4.24272 24.5177 1.4707 24.5133C0.979109 24.5126 0.487999 24.4824 0 24.4231C2.81607 26.2297 6.09191 27.1893 9.4377 27.1875Z"
                                                fill="#25518C" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_477_639">
                                                <rect width="30" height="30" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                <a href="#"><svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_477_634)">
                                            <path
                                                d="M15 2.70117C19.0078 2.70117 19.4824 2.71875 21.0586 2.78906C22.5234 2.85352 23.3145 3.09961 23.8418 3.30469C24.5391 3.57422 25.043 3.90234 25.5645 4.42383C26.0918 4.95117 26.4141 5.44922 26.6836 6.14648C26.8887 6.67383 27.1348 7.4707 27.1992 8.92969C27.2695 10.5117 27.2871 10.9863 27.2871 14.9883C27.2871 18.9961 27.2695 19.4707 27.1992 21.0469C27.1348 22.5117 26.8887 23.3027 26.6836 23.8301C26.4141 24.5273 26.0859 25.0312 25.5645 25.5527C25.0371 26.0801 24.5391 26.4023 23.8418 26.6719C23.3145 26.877 22.5176 27.123 21.0586 27.1875C19.4766 27.2578 19.002 27.2754 15 27.2754C10.9922 27.2754 10.5176 27.2578 8.94141 27.1875C7.47656 27.123 6.68555 26.877 6.1582 26.6719C5.46094 26.4023 4.95703 26.0742 4.43555 25.5527C3.9082 25.0254 3.58594 24.5273 3.31641 23.8301C3.11133 23.3027 2.86523 22.5059 2.80078 21.0469C2.73047 19.4648 2.71289 18.9902 2.71289 14.9883C2.71289 10.9805 2.73047 10.5059 2.80078 8.92969C2.86523 7.46484 3.11133 6.67383 3.31641 6.14648C3.58594 5.44922 3.91406 4.94531 4.43555 4.42383C4.96289 3.89648 5.46094 3.57422 6.1582 3.30469C6.68555 3.09961 7.48242 2.85352 8.94141 2.78906C10.5176 2.71875 10.9922 2.70117 15 2.70117ZM15 0C10.9277 0 10.418 0.0175781 8.81836 0.0878906C7.22461 0.158203 6.12891 0.416016 5.17969 0.785156C4.18945 1.17187 3.35156 1.68164 2.51953 2.51953C1.68164 3.35156 1.17187 4.18945 0.785156 5.17383C0.416016 6.12891 0.158203 7.21875 0.0878906 8.8125C0.0175781 10.418 0 10.9277 0 15C0 19.0723 0.0175781 19.582 0.0878906 21.1816C0.158203 22.7754 0.416016 23.8711 0.785156 24.8203C1.17187 25.8105 1.68164 26.6484 2.51953 27.4805C3.35156 28.3125 4.18945 28.8281 5.17383 29.209C6.12891 29.5781 7.21875 29.8359 8.8125 29.9062C10.4121 29.9766 10.9219 29.9941 14.9941 29.9941C19.0664 29.9941 19.5762 29.9766 21.1758 29.9062C22.7695 29.8359 23.8652 29.5781 24.8145 29.209C25.7988 28.8281 26.6367 28.3125 27.4687 27.4805C28.3008 26.6484 28.8164 25.8105 29.1973 24.8262C29.5664 23.8711 29.8242 22.7812 29.8945 21.1875C29.9648 19.5879 29.9824 19.0781 29.9824 15.0059C29.9824 10.9336 29.9648 10.4238 29.8945 8.82422C29.8242 7.23047 29.5664 6.13477 29.1973 5.18555C28.8281 4.18945 28.3184 3.35156 27.4805 2.51953C26.6484 1.6875 25.8105 1.17187 24.8262 0.791016C23.8711 0.421875 22.7812 0.164062 21.1875 0.09375C19.582 0.0175781 19.0723 0 15 0Z"
                                                fill="#25518C" />
                                            <path
                                                d="M15 7.29492C10.7461 7.29492 7.29492 10.7461 7.29492 15C7.29492 19.2539 10.7461 22.7051 15 22.7051C19.2539 22.7051 22.7051 19.2539 22.7051 15C22.7051 10.7461 19.2539 7.29492 15 7.29492ZM15 19.998C12.2402 19.998 10.002 17.7598 10.002 15C10.002 12.2402 12.2402 10.002 15 10.002C17.7598 10.002 19.998 12.2402 19.998 15C19.998 17.7598 17.7598 19.998 15 19.998Z"
                                                fill="#25518C" />
                                            <path
                                                d="M24.8086 6.99011C24.8086 7.98621 24 8.78894 23.0098 8.78894C22.0137 8.78894 21.2109 7.98035 21.2109 6.99011C21.2109 5.99402 22.0195 5.19128 23.0098 5.19128C24 5.19128 24.8086 5.99988 24.8086 6.99011Z"
                                                fill="#25518C" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_477_634">
                                                <rect width="30" height="30" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                <a href="#"><svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_477_632)">
                                            <path
                                                d="M27.7793 0H2.21484C0.990234 0 0 0.966797 0 2.16211V27.832C0 29.0273 0.990234 30 2.21484 30H27.7793C29.0039 30 30 29.0273 30 27.8379V2.16211C30 0.966797 29.0039 0 27.7793 0ZM8.90039 25.5645H4.44727V11.2441H8.90039V25.5645ZM6.67383 9.29297C5.24414 9.29297 4.08984 8.13867 4.08984 6.71484C4.08984 5.29102 5.24414 4.13672 6.67383 4.13672C8.09766 4.13672 9.25195 5.29102 9.25195 6.71484C9.25195 8.13281 8.09766 9.29297 6.67383 9.29297ZM25.5645 25.5645H21.1172V18.6035C21.1172 16.9453 21.0879 14.8066 18.8027 14.8066C16.4883 14.8066 16.1367 16.6172 16.1367 18.4863V25.5645H11.6953V11.2441H15.9609V13.2012H16.0195C16.6113 12.0762 18.0645 10.8867 20.2266 10.8867C24.7324 10.8867 25.5645 13.8516 25.5645 17.707V25.5645Z"
                                                fill="#25518C" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_477_632">
                                                <rect width="30" height="30" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
export default SingleNews;
