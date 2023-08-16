const Footer = () => {
  return (
    <footer>
      <div className="footer-container container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="col one">
          <h4>Kofi Annan Institute for Conflict Transformation</h4>
          <p>
            {" "}
            The Kofi Annan Institute for Conflict Transformation aims to produce a new generation of leaders who are dedicated to building a more peaceful world. By providing the knowledge and skills necessary for effective conflict transformation, the Institute is helping to create a more just and equitable society.
          </p>
        </div>
        <div className="col two">
          <h4>Programs</h4>
          <ul>
            <li>
              <a href="/research">Research</a>
            </li>
            <li>
              <a href="/outreachprograms">Outreach Programs</a>
            </li>
            <li>
              <a href="/securitySectorReforms">Policy Engagement</a>
            </li>
          </ul>
        </div>
        <div className="col three">
          <h4>Organization</h4>
          <ul>
            <li>
              <a href="/aboutus">About us</a>
            </li>
            <li>
              <a href="/organogram">Team</a>
            </li>
            <li>
              <a href="/allevents">Events</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-footer container mx-auto flex justify-between items-center">
        <p>
          Kofi Annan Institute for Conflict Transformation. Rights Reserved.
          Copyright {new Date().getFullYear()}
        </p>
        <p>
        Designed & Developed by <a href=" https://twafwane.com" className=" underline">Twafwane Innovations</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
