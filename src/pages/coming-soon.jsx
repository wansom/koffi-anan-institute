import ComingSoonFooter from "../components/utils/coming-soon-footer";
import Footer from "../components/utils/footer";
import Navbar from "../components/utils/navbar";

const ComingSoon = () => {
  return (
    <>
      <Navbar />
      <div className="coming-soon relative flex items-center justify-center">
        <a href="/">
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_357_1605"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_357_1605)">
                <path
                  d="M8 17L2 11L8 5L9.425 6.4L4.825 11L9.425 15.6L8 17ZM20 19V15C20 14.1667 19.7083 13.4583 19.125 12.875C18.5417 12.2917 17.8333 12 17 12H10.825L14.425 15.6L13 17L7 11L13 5L14.425 6.4L10.825 10H17C18.3833 10 19.5625 10.4875 20.5375 11.4625C21.5125 12.4375 22 13.6167 22 15V19H20Z"
                  fill="#FCFCFC"
                />
              </g>
            </svg>{" "}
            Go back home
          </button>
        </a>
        <ComingSoonFooter/>
      </div>
      
    </>
  );
};
export default ComingSoon;
