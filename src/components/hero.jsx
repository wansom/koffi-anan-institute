const Hero = () => {
  return (
    <section className="hero container-fluid bg-[url('/public/images/home/hero.png')] bg-center bg-cover  h-[945px] md:h-[945px] relative">
        <div className=" bg-[#1C1B1F] absolute left-0 top-0 w-full h-full opacity-[0.45]"></div>
      <div className="container mx-auto h-full flex flex-col items-center justify-center gap-[30px] relative px-[30px] md:px-[120px]">
      
        <p className="hero-title  z-10 text-[45px] md:text-[60px]">
          Welcome to the Kofi Annan Institute for Conflict Transformation
        </p>
        <p className="hero-sub-title z-10">
          {" "}
          The Kofi Annan Institute for Conflict Transformation celebrated
          International Women's Day with the KAICT family, members of the
          University of Liberia, representatives of government, NGOs, CSOs and
          many more.
        </p>
        <button className="hero-btn hero-btn-text z-10 w-[320px] md:w-[384px] ">Learn More</button>
      </div>
    </section>
  );
};
export default Hero;
