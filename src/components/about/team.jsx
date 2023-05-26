import React, { useState } from "react";
function Modal({ isOpen, onClose, children }) {
  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      // ESC key
      onClose();
    }
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const modalStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(37, 81, 140, 0.9)",
    display: isOpen ? "block" : "none",
    zIndex: 1,
  };

  const modalContentStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "1240px",
    height: "697px",
    transform: "translate(-50%, -50%)",
    background:
      "linear-gradient(0deg, #FCFCFC, #FCFCFC), url(background-nairobi.png)",
    padding: "2rem",
    zIndex: 2,
  };

  return (
    <div
      className="modal"
      style={modalStyles}
      onKeyDown={handleKeyDown}
      onClick={handleOverlayClick}
    >
      <div className="modal-content" style={modalContentStyles}>
        <div className="w-full flex items-end justify-end mb-5">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClose}
          >
            <path
              d="M6.74967 15.7083L10.4997 11.9583L14.2497 15.7083L15.708 14.2499L11.958 10.4999L15.708 6.74992L14.2497 5.29159L10.4997 9.04159L6.74967 5.29159L5.29134 6.74992L9.04134 10.4999L5.29134 14.2499L6.74967 15.7083ZM10.4997 20.9166C9.0587 20.9166 7.70454 20.643 6.43718 20.0958C5.16981 19.5492 4.06738 18.8072 3.12988 17.8697C2.19238 16.9322 1.45037 15.8298 0.903841 14.5624C0.356619 13.2951 0.0830078 11.9409 0.0830078 10.4999C0.0830078 9.05895 0.356619 7.70478 0.903841 6.43742C1.45037 5.17006 2.19238 4.06763 3.12988 3.13013C4.06738 2.19263 5.16981 1.45027 6.43718 0.903044C7.70454 0.356516 9.0587 0.083252 10.4997 0.083252C11.9406 0.083252 13.2948 0.356516 14.5622 0.903044C15.8295 1.45027 16.932 2.19263 17.8695 3.13013C18.807 4.06763 19.549 5.17006 20.0955 6.43742C20.6427 7.70478 20.9163 9.05895 20.9163 10.4999C20.9163 11.9409 20.6427 13.2951 20.0955 14.5624C19.549 15.8298 18.807 16.9322 17.8695 17.8697C16.932 18.8072 15.8295 19.5492 14.5622 20.0958C13.2948 20.643 11.9406 20.9166 10.4997 20.9166ZM10.4997 18.8333C12.8261 18.8333 14.7965 18.026 16.4111 16.4114C18.0257 14.7968 18.833 12.8263 18.833 10.4999C18.833 8.17353 18.0257 6.20304 16.4111 4.58846C14.7965 2.97388 12.8261 2.16659 10.4997 2.16659C8.17329 2.16659 6.2028 2.97388 4.58822 4.58846C2.97363 6.20304 2.16634 8.17353 2.16634 10.4999C2.16634 12.8263 2.97363 14.7968 4.58822 16.4114C6.2028 18.026 8.17329 18.8333 10.4997 18.8333Z"
              fill="#1C1B1F"
            />
          </svg>
        </div>

        {children}
      </div>
    </div>
  );
}

const Team = ({ loading, staff }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeMember, setactiveMember] = useState(null);

  const handleOpenModal = (member) => {
    setactiveMember(member);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  return (
    <section class="team">
      <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
        <div className="flex items-start modal-member gap-5">
          <div className="flex flex-col justify-center items-center space-y-5 basis-1/3">
            <img
              src={activeMember?.featured_image_url}
              alt=""
              className=" w-full object-cover"
            />
            <h3 className="mx-10">{activeMember?.acf.fullname}</h3>
            <span>{activeMember?.acf.position}</span>
          </div>
          <div className="flex flex-col team-modal basis-2/3">
            <div className="bg-[#25518C] mb-5 py-5">
              <h2>Expertise Areas</h2>
            </div>
            <p>{activeMember?.acf.description}</p>
          </div>
        </div>
      </Modal>
      <div class="team-container container">
        <div class="team-head">
          <p>Staff</p>
          <h1>Our Team</h1>
        </div>
        {/* <div className="flex items-center flex-col justify-center psace-y-10">
          <div className="card py-6">
            <h5>Director</h5>
            <p>Prof. T. Debey Sayndee</p>
          </div>
          <hr className="vertical-hr" />
        </div>
        <div className="flex items-center justify-center gap-0">
          <div className="card py-6">
            <h5>Record Officer</h5>
            <p>Ms. Josephine W. Capehart</p>
          </div>
          <hr className="horizontal-hr" />
          <div className="card py-6">
            <h5>Administrative Assistant</h5>
            <p>Mr. Felesu F. Swaray</p>
          </div>
          <hr className="horizontal-hr" />
          <div className="card py-6">
            <h5>Secretary</h5>
            <p>Mr. Arthur K. Johnson</p>
          </div>
        </div>
        <div className="flex items-center flex-col justify-center psace-y-10">
          <hr className="vertical-hr" />
          <div className="card py-6">
            <h5>Finance Administrator</h5>
            <p>Vacant</p>
          </div>
          <hr className="vertical-hr" />
        </div>
        <div className="flex items-center justify-center gap-0">
        <div className="flex">
          <div className="flex flex-col items-center justify-center">
          <div className="card py-4">
            <h5>Deputy Director for Policy Dialoguue & Special Projects</h5>
            <p>Dr. Anthony L. Hena</p>
          </div> 
          <hr className="vertical-hr" />
          <div className="card py-6">
            <h5>Deputy Director for Research</h5>
            <p>Dr. Raphaela T. Kormoll</p>
          </div> 
          <hr className="vertical-hr" />
          <div className="card py-6">
            <h5>Deputy Director for Teaching</h5>
            <p>Vacant</p>
          </div> 
          </div>
          <hr className="horizontal-hr mt-12" />
          </div>
          <div className="flex">
          <div className="flex flex-col items-center justify-center">
          <div className="card py-4">
            <h5>Deputy Director for Research</h5>
            <p>Dr. Raphaela T. Kormoll</p>
          </div> 
          <hr className="vertical-hr" />
          <div className="card py-6">
            <h5>Research Faculty</h5>
            <p>Permanent & Visiting</p>
          </div> 
          <hr className="vertical-hr" />
          <div className="card py-6">
            <h5>Research Assistants</h5>
            <p>Temporary</p>
          </div> 
          </div>
          <hr className="horizontal-hr mt-12" />
          </div>
        

          <div className="flex flex-col items-center justify-center">
          <div className="card py-4">
            <h5>Deputy Director for Teaching</h5>
            <p>Vacant</p>
          </div> 
          <hr className="vertical-hr" />
          <div className="card py-6">
            <h5>Part- Time Faculty</h5>
            <p>Vacant</p>
          </div> 
          <hr className="vertical-hr" />
          <div className="card py-6">
            <h5>Librarian</h5>
            <p>Vacant</p>
          </div> 
          </div>
        </div> */}
        <div class="team-content">
          {staff.map((i) => (
            <div class="member">
              <img
                src={i.featured_image_url}
                alt="Kofi Annan  Annan Institute for Conflict Transformation Team Member"
              />
              <div class="member-info">
                <span>{i.acf.position}</span>
                <h3>{i.acf.fullname}</h3>
                <p>{i.acf.description.slice(0, 100)}...</p>
                <a
                  onClick={() => {
                    handleOpenModal(i);
                  }}
                >
                  Read More{" "}
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.4 12L0 10.6L4.6 6L0 1.4L1.4 0L7.4 6L1.4 12Z"
                      fill="#25518C"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}

          <div class="member"></div>
        </div>
      </div>
    </section>
  );
};
export default Team;
