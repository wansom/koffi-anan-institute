import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getData } from "../../services";
const Navbar = () => {
  const [navitems, setNavItems] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [click, setClick] = useState(true);
  const [loading, setLoading] = useState(true);
  const [childItems, setchildItems] = useState([]);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const handleNavClick = (items) =>{
    setchildItems(items)
    setClick(!click)
  };
 const closeMenu=()=>{
    setClick(!click)
 }
  const handleClick = (item) => {

    if(item.child_items){
      setchildItems(item.child_items)
        setClick(!click)
    }
  };
  const closeSubMenu = (item) => {

    if(item.child_items){
      setchildItems([])
        setClick(!click)
    }
  };
  useEffect(() => {
    getData("https://kacit.twafwane.com/wp-json/menus/v1/menus/main-menu").then(
      (data) => {
        setNavItems(data.items);
        setLoading(false);
        console.log(data.items)
      }
    );
  }, []);

  return (
    <section>
      <header>
        <div className="header-container container">
          <div className="logo lg:ml-8">
            <img
              src="/images/home/logo.png"
              alt="Kofi Annan  Annan Institute for Conflict Transformation Logo"
            ></img>
          </div>
          <div className="header-contacts">
            <div className="contact contact-one">
              <div className="left pad">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.0938 26.625C21.9583 26.625 18.9022 25.926 15.9252 24.5279C12.9473 23.1308 10.3101 21.2836 8.01375 18.9862C5.71639 16.6899 3.86917 14.0527 2.47208 11.0748C1.07403 8.09785 0.375 5.04167 0.375 1.90625C0.375 1.46875 0.520833 1.10417 0.8125 0.8125C1.10417 0.520833 1.46875 0.375 1.90625 0.375H7.8125C8.15278 0.375 8.4566 0.484375 8.72396 0.703125C8.99132 0.921875 9.14931 1.20139 9.19792 1.54167L10.1458 6.64583C10.1944 6.98611 10.1886 7.29576 10.1283 7.57479C10.0671 7.85479 9.92708 8.10417 9.70833 8.32292L6.20833 11.8958C7.22917 13.6458 8.50521 15.2865 10.0365 16.8177C11.5677 18.349 13.2569 19.6736 15.1042 20.7917L18.5312 17.3646C18.75 17.1458 19.0358 16.9815 19.3888 16.8717C19.7407 16.7628 20.0868 16.7326 20.4271 16.7812L25.4583 17.8021C25.7986 17.875 26.0781 18.0388 26.2969 18.2935C26.5156 18.5492 26.625 18.8472 26.625 19.1875V25.0938C26.625 25.5313 26.4792 25.8958 26.1875 26.1875C25.8958 26.4792 25.5313 26.625 25.0938 26.625Z"
                    fill="#25518C"
                  />
                </svg>
              </div>
              <div className="right pad">
                <p>Call Us:</p>
                <p>+231 77 627 7932 |+231 88 617 1990</p>
              </div>
            </div>
            <div className="contact contact-one">
              <div className="left pad">
                <svg
                  width="31"
                  height="25"
                  viewBox="0 0 31 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.83341 24.1667C3.03133 24.1667 2.34494 23.8813 1.77425 23.3106C1.20258 22.739 0.916748 22.0521 0.916748 21.25V3.74999C0.916748 2.94791 1.20258 2.26152 1.77425 1.69083C2.34494 1.11916 3.03133 0.833328 3.83341 0.833328H27.1667C27.9688 0.833328 28.6557 1.11916 29.2274 1.69083C29.7981 2.26152 30.0834 2.94791 30.0834 3.74999V21.25C30.0834 22.0521 29.7981 22.739 29.2274 23.3106C28.6557 23.8813 27.9688 24.1667 27.1667 24.1667H3.83341ZM15.5001 13.9583L27.1667 6.66666V3.74999L15.5001 11.0417L3.83341 3.74999V6.66666L15.5001 13.9583Z"
                    fill="#25518C"
                  />
                </svg>
              </div>
              <div className="right pad">
                <p>Email Us:</p>
                <p>kofiannaninstitute.ul@gmail.com</p>
              </div>
            </div>
            <div className="contact contact-one">
              <div className="left pad">
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.3126 22.3542L22.3542 20.3125L16.9584 14.9167V8.20834H14.0417V16.0833L20.3126 22.3542ZM15.5001 30.0833C13.4827 30.0833 11.5869 29.7003 9.81258 28.9342C8.03828 28.169 6.49487 27.1302 5.18237 25.8177C3.86987 24.5052 2.83105 22.9618 2.06591 21.1875C1.2998 19.4132 0.916748 17.5174 0.916748 15.5C0.916748 13.4826 1.2998 11.5868 2.06591 9.8125C2.83105 8.0382 3.86987 6.4948 5.18237 5.1823C6.49487 3.8698 8.03828 2.83049 9.81258 2.06438C11.5869 1.29924 13.4827 0.916672 15.5001 0.916672C17.5174 0.916672 19.4133 1.29924 21.1876 2.06438C22.9619 2.83049 24.5053 3.8698 25.8178 5.1823C27.1303 6.4948 28.1691 8.0382 28.9342 9.8125C29.7004 11.5868 30.0834 13.4826 30.0834 15.5C30.0834 17.5174 29.7004 19.4132 28.9342 21.1875C28.1691 22.9618 27.1303 24.5052 25.8178 25.8177C24.5053 27.1302 22.9619 28.169 21.1876 28.9342C19.4133 29.7003 17.5174 30.0833 15.5001 30.0833Z"
                    fill="#25518C"
                  />
                </svg>
              </div>
              <div className="right pad lg:mr-8">
                <p>Time:</p>
                <p>Monday to Friday: 08:00 - 20:00</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav>
        <div className="nav-container container">
          <div className="nav logo">
            <a href="index.html" className="nav-logo">
              <img
                src="images/home/logo.png"
                alt="Kofi Annan  Annan Institute for Conflict Transformation Logo"
                width="80px"
              ></img>{" "}
              K.A.I.C.T
            </a>
          </div>
          <div className={isOpen ? "active links" : "hide links"} id="links">
            <div className="cancel">
              <span
                className={isOpen ? "cancel-btn active" : "cancel-btn hide"}
                onClick={() => setOpen(false)}
              >
                <i className="fas fa-times"></i>
              </span>
            </div>
            {navitems.map((item, index) => (
              <a href={item.url} className="active" key={index} onMouseEnter={()=>{handleClick(item)}} >
                {item.title}{" "}
                {item.child_items && (
                  <i
                    className="fa-solid fa-angle-down"
                    onClick={()=>{
                      handleNavClick(item.child_items)
                    }}
                  ></i>
                )}

              </a>
            ))}
          </div>
          <div className="menu-bar">
            <span
              className={isOpen ? "menu-btn hide" : "menu-btn active"}
              onClick={() => setOpen(true)}
            >
              <i className="fas fa-bars"></i>
            </span>
          </div>
        </div>
        <div
          className={classNames(click ? "hidden" : "block dropdown")}
          onMouseLeave={closeMenu}
        >
         <div> {loading?<p>Loading...</p>:<div className="flex flex-col gap-5">
            {childItems?.map((i,index) => (
            <NavLink
              exact
              to={i.url}
              className=" transition-colors duration-300 transform rounded-md lg:mt-0  dropdown-link"
              key={index}
            >
             {i.title}
            </NavLink>
          ))}</div>}</div>
        </div>
      </nav>
    </section>
  );
};
export default Navbar;
