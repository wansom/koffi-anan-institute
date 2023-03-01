import { services, researchProjects } from "../Data/home";
const Services = () => {
  return (
    <section className="container  mx-auto relative bg-[#FCFCFC]  py-[50px] px-0 lg:px-[30px]">
      <div className="flex flex-col lg:flex-row  justify-between gap-[50px]">
        <div className="flex flex-col gap-[50px] px-[30px]">
          <p className="title text-center mt-[50px] md:mt-[100px] mb-[50px]">
            What We Offer
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-[30px]
          "
          >
            {services.map((service, index) => (
              <div
                className="h-[300px] w-[335px] rounded-[5px] relative mb-[230px] lg:mb-[273px]"
                style={{ backgroundImage: `url(${service.image_url})` }}
              >
                <div className="service-card absolute top-[235px] left-[20px] w-[295px] h-[263px] space-y-[21px] justify-center items-center">
                  <p className="text-center card-title">{index}</p>
                  <p className="text-center card-title">{service.title}</p>
                  <p className="subtitle">{service.subtitle}</p>
                 
                </div>
                <div className="rounded-full absolute top-[467px] left-[137px] w-[50px] h-[50px] bg-[#25518C]  flex justify-center text-center items-center">
                  <img src="images/icons/arrow_forward.svg" alt="learn more" />
                </div>
              </div>
            ))}
          </div>
          <div className="pt-[50px]">
            <p className="section-title text-center mb-[50px]">Research Projects</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
              {researchProjects.map((project) => (
                <div className="w-[335px] h-[838px] flex flex-col gap-[20px] border-[#E0E2F1] border-solid border-[1px] rounded-[5px]">
                  <img src="images/home/Monument.png" alt="" />
                  <p className="blog-title mx-[20px]">{project.title}</p>
                  <p className="blog-subtitle mx-[20px]">{project.subtitle}</p>
                  <button className="research-btn text-[#FCFCFC] mx-[20px]">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <div className="bg-[#EFF1FB] py-[50px] justify-items-center px-[30px] mb-[20px]">
            <p className="section-title text-center mb-[50px]">Upcoming Events</p>
            <div className="relative post-card w-[360px] h-[362px] flex flex-col pt-[20px] mb-[30px] items-center justify-center">
              <div className="relative w-[320px] h-[240px] bg-[url('/public/images/home/event-1.png')] rounded-[5px]">
                <div className="price-tag flex items-center justify-center">
                  <p className="price">$12.00</p>
                </div>
                <div className="absolute top-[20px] left-[204px] rounded-full w-[50px] h-[50px] bg-[#fcfcfc] flex items-center justify-center ">
                  <img src="images/icons/Share.svg" alt="" srcset="" />
                </div>
                <div className="absolute top-[20px] left-[260px] rounded-full w-[50px] h-[50px] bg-[#fcfcfc] flex items-center justify-center  ">
                  <img src="images/icons/love.svg" alt="" srcset="" />
                </div>
              </div>
              <div>
                <div className="flex gap-[23px]">
                  <div className="flex flex-col">
                    <p className="month-text">SEP</p>
                    <p className="title">20</p>
                  </div>
                  <div>
                    <p className="text-blue ">Black History Month</p>
                    <span className="flex gap-[2px]">
                      <img src="images/icons/location.svg" alt="" /> Monrovia,
                      Liberia
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative post-card w-[360px] h-[362px] flex flex-col pt-[20px] px-[20px] gap-[20px] mb-[30px]">
              <div className="relative w-[320px] h-[240px] bg-[url('/public/images/home/event-2.png')] rounded-[5px]">
                <div className="price-tag flex items-center justify-center">
                  <p className="price">$10.00</p>
                </div>
                <div className="absolute top-[20px] left-[204px] rounded-full w-[50px] h-[50px] bg-[#fcfcfc] flex items-center justify-center ">
                  <img src="images/icons/Share.svg" alt="" srcset="" />
                </div>
                <div className="absolute top-[20px] left-[260px] rounded-full w-[50px] h-[50px] bg-[#fcfcfc] flex items-center justify-center  ">
                  <img src="images/icons/love.svg" alt="" srcset="" />
                </div>
              </div>
              <div>
                <div className="flex gap-[23px]">
                  <div className="flex flex-col">
                    <p className="month-text">SEP</p>
                    <p className="title">22</p>
                  </div>
                  <div>
                    <p className="text-blue ">Black History Month</p>
                    <span className="flex gap-[2px]">
                      <img src="images/icons/location.svg" alt="" /> Monrovia,
                      Liberia
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative post-card w-[360px] h-[362px] flex flex-col pt-[20px] px-[20px] gap-[20px] mb-[30px]">
              <div className="relative w-[320px] h-[240px] bg-[url('/public/images/home/event-3.png')] rounded-[5px]">
                <div className="price-tag flex items-center justify-center">
                  <p className="price">$14.00</p>
                </div>
                <div className="absolute top-[20px] left-[204px] rounded-full w-[50px] h-[50px] bg-[#fcfcfc] flex items-center justify-center ">
                  <img src="images/icons/Share.svg" alt="" srcset="" />
                </div>
                <div className="absolute top-[20px] left-[260px] rounded-full w-[50px] h-[50px] bg-[#fcfcfc] flex items-center justify-center  ">
                  <img src="images/icons/love.svg" alt="" srcset="" />
                </div>
              </div>
              <div>
                <div className="flex gap-[23px]">
                  <div className="flex flex-col">
                    <p className="month-text">SEP</p>
                    <p className="title">24</p>
                  </div>
                  <div>
                    <p className="text-blue ">Black History Month</p>
                    <span className="flex gap-[2px]">
                      <img src="images/icons/location.svg" alt="" /> Monrovia,
                      Liberia
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#FCFCFC] h-[50px] w-[360px] rounded-[5px] flex justify-center items-center">
              <p className="events-btn-text ">Events</p>
            </div>
          </div>
          <div className="bg-[#EFF1FB] py-[50px] px-[30px] flex flex-col items-center justify-center w-[427px] container">
            <p className="section-title text-center mb-[50px]">News & <br /> Announcements</p>
            <img src="images/home/post-thumbnail.svg" className="w-[360px]"></img>
            <div className="flex gap-0 mt-[20px]">
              <button className="post-blue-btn post-btn-text text-[#FCFCFC]">
                Weekly updates
              </button>
              <button className="post-white-btn post-btn-text text-[#1C1B1F]">
                AUGust 13, 2021
              </button>
            </div>
            <p className="blog-title mt-[24px] mb-[20px]">
              Kofi Annan Institute for Conflict Transformation - KAICT - News &
              Announcements
            </p>
            <p className="blog-subtitle">
              The students of the third cohort of the Kofi Annan Living Memorial
              (KALM) celebrate Black History on February 23, 2022.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
