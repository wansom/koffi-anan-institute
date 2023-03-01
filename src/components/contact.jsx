const ContactUs=()=>{
    return(
        <section className="container-fluid mx-auto relative py-[100px] bg-[#FCFCFC]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-[80px] px-[30px]">
            <div className="flex flex-col gap-[20px] items-start">
                <p className="title">Contact Us</p>
                <p className="form-sub-title md:w-[610px]">
                Share your idea. Introduce your company. Reach out to partner.
                </p>
                
                <div className="contact-div w-[219px] h-[48px]">
                    <img src="images/icons/phone.svg" alt=""/>
                    <p className="placeholder">+231 794 342 159</p>
                </div>
                <div className="contact-div  h-[48px] w-[238.55px]">
                    <img src="images/icons/mail.svg" alt=""/>
                    <p className="placeholder">kaict@gmail.com</p>
                </div>
                <div className="contact-div w-[346px] md:w-[431.36px] mb-[50px]">
               
                    <img src="images/icons/location-blue.svg" alt=""/>
                    <p className="placeholder">University of Liberia, Monrovia, Liberia</p>
                </div>
                <img src="images/home/google-maps.png" alt="" />
                

            </div>
         
            <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-col gap-[10px]">
                <label className="form-label">First Name</label>
                <input type="text" className="form-input h-[50px]" placeholder="John" />
                </div>
                <div className="flex flex-col gap-[10px]">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-input h-[50px]" placeholder="Kamara" />
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <label className="form-label">Email</label>
                <input type="text" className="form-input h-[50px]" placeholder="johnkamara@gmail.com" />
                </div>
                <div className="flex flex-col gap-[10px]">
                <label className="form-label">Company Name</label>
                <input type="text" className="form-input h-[50px]" placeholder="Adanian Labs Limited" />
                </div>
                <div className="flex flex-col gap-[10px]">
                <label className="form-label">How did you hear about us?</label>
                <input type="text" className="form-input h-[50px]" placeholder="LinkedIn" />
                </div>
                <div className="flex flex-col gap-[10px]">
                <label className="form-label">Leave a message</label>
                <textarea type="text" className="form-input h-[150px]" placeholder="Type your message here..." ></textarea>
                </div>
                <div className="flex  gap-[10px]">
               <input type="checkbox"/>
                <p className="tc">By clicking on “Send Message” you agree to our Terms & Conditions and Privacy Statement.</p>
                </div>
                <button className="form-btn text-[#FCFCFC]">Send Message</button>
            </div>
            </div>
           

        </section>
    )

}

export default ContactUs