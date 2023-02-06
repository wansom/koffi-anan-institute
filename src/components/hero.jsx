const Hero = () => {
  return (
    <section className="hero container-fluid bg-[url('/public/images/home/hero.png')] bg-center bg-cover h-[945px]">
        
      <div className="h-full flex flex-col items-center justify-center gap-[30px] relative ">
      <div className=" bg-[#1C1B1F] absolute left-0 top-0 w-full h-full opacity-[0.45]"></div>
        <p className="hero-title w-[1200px] z-10">
          Welcome to the Kofi Annan Institute for Conflict Transformation
        </p>
        <p className="hero-sub-title w-[1200px] z-10">
          {" "}
          The Kofi Annan Institute for Conflict Transformation celebrated
          International Women's Day with the KAICT family, members of the
          University of Liberia, representatives of government, NGOs, CSOs and
          many more.
        </p>
        <button className="hero-btn hero-btn-text z-10">Learn More</button>
      </div>
    </section>
  );
};
export default Hero;
