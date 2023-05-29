import { useState, useEffect } from "react";
import AboutHero from "../components/about/hero";
import Footer from "../components/utils/footer";
import Navbar from "../components/utils/navbar";
import background from "../hero/teaching-and-training.png";
const Teachingandtraining = () => {
  const [courses, setcourses] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    fetch("https://kacit.twafwane.com/wp-json/wp/v2/teaching?orderby=date&order=asc")
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
      .then((courses) => {
        setcourses(courses);
        setloading(false);
        console.log(courses)
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Navbar />
      <AboutHero
        title={"Teaching & Training"}
        subtitle={"LEARNING"}
        background={background}
      />
      <main>
        <section class="courses">
          <div class="training-courses-container container">
            {courses.map((course,index)=>(
            <div class={index % 2=== 0?'train-course flex items-center justify-evenly relative':' train-course relative flex flex-row-reverse items-center justify-evenly px-0 py-5'} key={index}>
            <div class="right">
              <div class={index %2===0?'train-course-card -mr-[80px]':'train-course-card -ml-[80px]'}>
                <h2>{course.acf.course_name}</h2>
                <p>
                  {course.acf.course_details.slice(0,320)}...
                </p>
                <a href={`/programdetails/${course.slug}`}>
                  Course Details
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_591_387"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    >
                      <rect width="20" height="20" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_591_387)">
                      <path
                        d="M7.83268 15L6.66602 13.8333L10.4993 10L6.66602 6.16667L7.83268 5L12.8327 10L7.83268 15Z"
                        fill="#FCFCFC"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
            <div class="left">
              <img src={course.featured_image_url} alt="" />
            </div>
          </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Teachingandtraining;
