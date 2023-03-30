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
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
}

const Team = ({ loading, staff }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  return (
    <section class="team">
      <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
        <h1>Modal Title</h1>
        <p>Modal content goes here</p>
      </Modal>
      <div class="team-container container">
        <div class="team-head">
          <p>Staff</p>
          <h1>Our Team</h1>
        </div>
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
                <p>{i.acf.description}</p>
                <a onClick={handleOpenModal}>
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
