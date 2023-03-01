const Navbar = () => {
  return (
    <section>
      <div className="container-fluid mx-auto w-screen">
        <div className="container mx-auto md:h-[170px] bg-[#FCFCFC] ">
          <div className="hidden md:flex md:gap-[164px] items-center">
            <img src="images/home/logo.png" alt="" className="hidden md:block"/>
           
            
            <div className="hidden lg:flex gap-[30px] py-[13px]">
              <span className="flex gap-2">
                <img src="images/icons/phone.svg" alt="" />
                <p className="top-nav-text">
                  <span className="top-nav-header">Call Us:</span> <br /> +231
                  973 677 333 | +231 974 606 044
                </p>
              </span>
              <span className="flex gap-2">
                <img src="images/icons/mail.svg" alt="" />
             
                <p className="top-nav-text">
                  <span className="top-nav-header">Email Us:</span> <br />
                  kaict@gmail.com
                </p>
              </span>
              <span className="flex gap-2">
                <img src="images/icons/schedule.svg" alt="" />
                <p className="top-nav-text">
                  <span className="top-nav-header">Time:</span> <br />
                  Monday to Friday: 08:00 - 16:30
                </p>
              </span>
            </div>
          </div>
          <div className="flex md:hidden justify-between py-[13px] px-[30px]">
          <img src="images/home/logo-sm.png" alt="" className="block md:hidden"/>
            <img src="images/icons/menu.svg" alt="" className="block md:hidden"/>
          </div>
        </div>
      </div>
      <div className="w-full h-[50px] primary-color pl-[360px] md:flex gap-[50px] items-center hidden">
        <a className="nav-active" href="#">
          Home
        </a>
        <a className="nav-link" href="#">
          About Us
        </a>
        <a className="nav-link" href="#">
          Research
        </a>
        <a className="nav-link" href="#">
          Outreach Programs
        </a>
        <a className="nav-link flex"  href="#">
          Think Tanks
          <img src="images/icons/expand_more.svg" alt="" loading="lazy" className="ml-[16px]"/>
        </a>
        <a className="nav-link" href="#">
          Publications
        </a>
        <a className="nav-link" href="#">
          Library
        </a>
      </div>
    </section>
  );
};
export default Navbar;
