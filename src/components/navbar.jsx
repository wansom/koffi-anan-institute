const Navbar = () => {
  return (
    <section>
      <div className="container-fluid mx-auto w-screen">
        <div className="w-full h-[170px] bg-[#FCFCFC] pl-[360px]">
          <div className="flex gap-[164px] items-center">
            <img src="images/home/logo.png" alt="" />
            <div className="flex gap-[30px]">
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
        </div>
      </div>
      <div className="w-full h-[50px] primary-color pl-[360px] flex gap-[50px] items-center">
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
        <a className="nav-link" href="#">
          Think Tanks
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
