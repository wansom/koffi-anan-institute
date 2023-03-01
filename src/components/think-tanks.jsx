const ThinkTanks = () => {
  return (
    <section className="container-fluid relative bg-[rgb(239,241,251)] py-[100px]">
      <div className="container mx-auto px-[30px]">
        <p className="title text-center">Think Tanks</p>
        <div className="flex flex-col lg:flex-row justify-between items-center mt-[50px] md:gap-[120px]">
          <img src="images/home/think-tanks.svg" className=""></img>
          <div className="flex flex-col gap-[20px] items-start justify-start">
            <p className="blog-title">Security Sector Reform Think Tank</p>
            <p className="blog-subtitle">
              We also launched the Mary Antoinette Brown Sherman Think Tank,
              which will strengthen the position of girls and women in society
              through leadership and governance training programs, by providing
              a platform for discussion and through research.
            </p>
            <button className="th-btn text-[#FCFCFC]">Learn More</button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center mt-[50px] md:gap-[120px]">
        <img
            src="images/home/mary-antionette.png"
            className="block lg:hidden"
          ></img>
          <div className=" flex flex-col gap-[20px]">
            <p className="blog-title">
              Mary Antoinette Brown Sherman Think Tank
            </p>
            <p className="blog-subtitle">
              We also launched the Mary Antoinette Brown Sherman Think Tank,
              which will strengthen the position of girls and women in society
              through leadership and governance training programs, by providing
              a platform for discussion and through research.
            </p>
            <button className="th-btn text-[#FCFCFC]">Learn More</button>
          </div>
          <img
            src="images/home/mary-antionette.png"
            className="hidden lg:block"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default ThinkTanks;
