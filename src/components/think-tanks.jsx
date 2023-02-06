const ThinkTanks = () => {
  return (
    <section className="container-fluid relative h-[1068px] bg-[#EFF1FB] pt-[100px]">
      <p className="title text-center">Think Tanks</p>
      <img
        src="images/home/think-tanks.svg"
        className="absolute top-[220px] left-[310px]"
      ></img>
      <div className="absolute top-[279px] left-[1050px] flex flex-col gap-[20px]">
        <p className="blog-title">Security Sector Reform Think Tank</p>
        <p className="blog-subtitle w-[560px]">
          We also launched the Mary Antoinette Brown Sherman Think Tank, which
          will strengthen the position of girls and women in society through
          leadership and governance training programs, by providing a platform
          for discussion and through research.
        </p>
        <button className="th-btn text-[#FCFCFC]">Learn More</button>
      </div>
      <img
        src="images/home/mary-antionette.png"
        className="absolute top-[618px] left-[1000px]"
      ></img>
      <div className="absolute top-[677px] left-[310px] flex flex-col gap-[20px]">
        <p className="blog-title">Mary Antoinette Brown Sherman Think Tank</p>
        <p className="blog-subtitle w-[560px]">
          We also launched the Mary Antoinette Brown Sherman Think Tank, which
          will strengthen the position of girls and women in society through
          leadership and governance training programs, by providing a platform
          for discussion and through research.
        </p>
        <button className="th-btn text-[#FCFCFC]">Learn More</button>
      </div>
    </section>
  );
};

export default ThinkTanks;
