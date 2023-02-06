const ContactUs=()=>{
    return(
        <section className="container-fluid mx-auto relative h-[936px] px-[310px] pt-[100px] bg-[#FCFCFC]">
            <div className="grid grid-cols-2 gap-[80px]">
            <div className="flex flex-col gap-[20px] items-start">
                <p className="title">Contact Us</p>
                <p className="form-sub-title w-[610px]">
                Share your idea. Introduce your company. Reach out to partner.
                </p>
                
                <div className="relative w-[238.55px] h-[48px]">
                <input type="text" className="form-input absolute left-0 top-0 "/>
                    <img src="images/icons/phone.svg" alt="" className="absolute left-[38px] top-[18px]"/>
                    <p className="placeholder absolute left-[74px] top-[18px]">+231 794 342 159</p>
                </div>
                <div className=" relative  h-[48px] w-[238.55px]">
                <input type="text" className=" form-input absolute left-0 top-0 "/>
                    <img src="images/icons/mail.svg" alt="" className="absolute left-[38px] top-[18px]"/>
                    <p className="placeholder absolute left-[74px] top-[18px]">kaict@gmail.com</p>
                </div>
                <div className=" relative w-[431.36px] mb-[50px]">
                <input type="text" className="form-input absolute left-0 top-0 w-[431.36px]"/>
                    <img src="images/icons/location-blue.svg" alt="" className="absolute left-[38px] top-[18px]"/>
                    <p className="placeholder absolute left-[74px] top-[18px]">University of Liberia, Monrovia, Liberia</p>
                </div>
                <img src="images/home/google-maps.png" alt="" />
                

            </div>
         
            <div className="flex flex-col gap-[20px]">
            <div className="flex gap-[43.57px]">
                <div className="flex flex-col gap-[10px]">
                <label className="form-label">First Name</label>
                <input type="text" className="form-input h-[50px] w-[238.55px]" placeholder="John" />
                </div>
                <div className="flex flex-col gap-[10px]">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-input h-[50px] w-[238.55px]" placeholder="Kamara" />
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <label className="form-label">Email</label>
                <input type="text" className="form-input h-[50px] w-[610px]" placeholder="johnkamara@gmail.com" />
                </div>
                <div className="flex flex-col gap-[10px]">
                <label className="form-label">Company Name</label>
                <input type="text" className="form-input h-[50px] w-[610px]" placeholder="Adanian Labs Limited" />
                </div>
                <div className="flex flex-col gap-[10px]">
                <label className="form-label">How did you hear about us?</label>
                <input type="text" className="form-input h-[50px] w-[610px]" placeholder="LinkedIn" />
                </div>
                <div className="flex flex-col gap-[10px]">
                <label className="form-label">Leave a message</label>
                <textarea type="text" className="form-input h-[150px] w-[610px]" placeholder="Type your message here..." ></textarea>
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