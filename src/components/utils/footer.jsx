const Footer = () => {
  return (
    <section className="container-fluid mx-auto h-[341px] primary-color pl-[354px] pt-[50px]">
      <div className="flex gap-[160px]">
        <div className="flex flex-col gap-[20px]">
          <p className="footer-title">
            Kofi Annan Institute for Conflict Transformation
          </p>
          <p className="footer-sub-title w-[620px]">
            On March 8, 2022, the Kofi Annan Institute for Conflict
            Transformation celebrated International Women's Day with the KAICT
            family, members of the University of Liberia, representatives of
            government, NGOs, CSOs and many more. We also launched the Mary
            Antoinette Brown Sherman Think Tank, which will strengthen the
            position of girls and women in society through leadership and
            governance training programs, by providing a platform for discussion
            and through research.
          </p>
          <p className="footer-sub-title">
            Kofi Annan Institute for Conflict Transformation. Rights Reserved.
            Copyright 2022.
          </p>
        </div>
        <div className="flex flex-col gap-[20px]">
            <p className="footer-title">Support</p>
            <p className="footer-sub-title">My Account</p>
            <p className="footer-sub-title">Help & Support</p>
            <p className="footer-sub-title">Contact Us</p>
        </div>
        <div className="flex flex-col gap-[20px]">
            <p className="footer-title">Company</p>
            <p className="footer-sub-title">Privacy Policy</p>
            <p className="footer-sub-title">Terms of Service</p>
            <p className="footer-sub-title">Code of Conduct</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
