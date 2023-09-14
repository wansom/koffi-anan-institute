import { useState, useEffect } from "react";
import AboutHero from "../components/about/hero";
import Footer from "../components/utils/footer";
import Navbar from "../components/utils/navbar";
import background from "../hero/teaching.jpg";
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
        console.log(courses)
        setcourses(courses);
        setloading(false);
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
        <section className="courses">
          <div className="px-5 md:px-10 pb-5">
          <p>There is a need to strengthen training and education around conflict, peace, security, gender, and development in Liberia to develop the human capital in the country and to contribute to Liberia’s recovery. To achieve this critically important objective, KAICT launched a 3-month certificate and a 6-month diploma program in Peace Studies and Conflict Transformation in September 2007, followed by a Master’s degree course in Peace Studies and Conflict Transformation in September 2009.
            KAICT accomplishes student success by developing well-informed and creative scholars capable of contributing research-based knowledge to social progress. The institution is committed to fostering a learning-centered community that celebrates diversity and inclusion by empowering and engaging students, faculty, and staff.
          </p>
          </div>
         
          <div className="training-courses-container container mx-auto px-5 md:px-10">
            {courses.map((course, index) => (
              <div className={index % 2 === 0 ? 'train-course flex  flex-col md:flex-row items-center justify-evenly relative' : ' train-course relative flex flex-col md:flex-row-reverse items-center justify-evenly px-0 py-5'} key={index}>
                <div className="right">
                  <div className={index % 2 === 0 ? 'train-course-card w-full lg:w-[640px] md:-mr-[80px]' : 'train-course-card w-full lg:w-[640px] md:-ml-[80px]'}>
                    <h2>{course.acf.course_name}</h2>
                    <p>
                      {course.acf.course_details?.slice(0, 320)}...
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
                <div className="left">
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
