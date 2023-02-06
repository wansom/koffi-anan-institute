const Navbar = () => {
  return (
    <section>
      <div
        className="container-fluid mx-auto w-screen"
      >
        <div className="w-full h-[170px] bg-[#FCFCFC]"></div>
      </div>
      <div className="w-full h-[50px] primary-color pl-[360px] flex gap-[50px] items-center">
        <a className="nav-active" href="#">Home</a>
        <a className="nav-link"  href="#">About Us</a>
        <a className="nav-link"  href="#">Research</a>
        <a className="nav-link"  href="#">Outreach Programs</a>
        <a className="nav-link"  href="#">Think Tanks</a>
        <a className="nav-link"  href="#">Publications</a>
        <a className="nav-link"  href="#">Library</a>
      </div>
    </section>
  );
};
export default Navbar