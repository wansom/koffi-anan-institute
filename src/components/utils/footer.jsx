const Footer = () => {
  return (
    <footer>
      <div className="footer-container container">
        <div className="col one">
          <h4>Kofi Annan Institute for Conflict Transformation</h4>
          <p>
            {" "}
            The Kofi Annan Institute for Conflict Transformation’s aim is to
            produce a new generation of leaders who are dedicated to building a
            more peaceful world. By providing the knowledge and skills necessary
            for effective conflict transformation, the Institute is helping to
            create a more just and equitable society.
          </p>
        </div>
        <div className="col two">
          <h4>Support</h4>
          <ul>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Help & Support</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="col three">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Code of Conduct</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-footer container">
        <p>
          Kofi Annan Institute for Conflict Transformation. Rights Reserved.
          Copyright 2022.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
