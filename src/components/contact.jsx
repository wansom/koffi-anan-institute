const ContactUs=()=>{
    return(
        <section class="contact">
        <div class="contact-container container">
            <div class="contact-details">
                <div class="title">
                    <h1>Contact Us</h1>
                    <p>Share your idea. Introduce your company. Reach out to partner.</p>
                </div>
                <div class="details">
                    <div class="detail">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.27013 3.71L10.3401 2.87C11.1501 2.54 12.0801 2.93 12.4101 3.75L13.0401 5.29C13.3701 6.1 12.9801 7.03 12.1601 7.37L9.87013 8.3C10.1101 9.45 10.4801 10.8 11.0601 12.26C11.7101 13.91 12.4601 15.27 13.1401 16.36L15.4301 15.43C16.2501 15.1 17.1801 15.49 17.5101 16.31L18.1401 17.85C18.4701 18.67 18.0801 19.6 17.2601 19.93L15.1901 20.77L15.1501 20.79C12.9201 21.69 10.3501 20.82 9.19013 18.72C8.41013 17.31 7.64013 15.73 6.93013 13.96C6.29013 12.36 5.79013 10.83 5.41013 9.41C4.78013 7.08 6.00013 4.65 8.23013 3.74L8.27013 3.71Z"
                                stroke="#25518C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <span>+231 794 342 159</span>
                    </div>
                    <div class="detail">
                        <svg width="19" height="15" viewBox="0 0 19 15" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.09 14.21H3.5C2.4 14.21 1.5 13.31 1.5 12.21V2.5C1.5 1.95 1.95 1.5 2.5 1.5H17.09C17.64 1.5 18.09 1.95 18.09 2.5V12.21C18.09 13.31 17.19 14.21 16.09 14.21Z"
                                stroke="#25518C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M1.8501 2.13L9.2401 7.27C9.5701 7.5 10.0201 7.5 10.3501 7.27L17.7401 2.13"
                                stroke="#25518C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <span>kaict@gmail.com</span>
                    </div>
                    <div class="detail">
                        <svg width="16" height="21" viewBox="0 0 16 21" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.39 7.98998C14.39 12.14 10.34 17.13 8.68999 18.99C8.31999 19.4 7.67999 19.4 7.30999 18.99C5.65999 17.13 1.60999 12.14 1.60999 7.98998C1.60999 4.45998 4.46999 1.59998 7.99999 1.59998C11.53 1.59998 14.39 4.45998 14.39 7.98998Z"
                                stroke="#25518C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M7.98993 10.5499C9.40378 10.5499 10.5499 9.40378 10.5499 7.98993C10.5499 6.57608 9.40378 5.42993 7.98993 5.42993C6.57608 5.42993 5.42993 6.57608 5.42993 7.98993C5.42993 9.40378 6.57608 10.5499 7.98993 10.5499Z"
                                stroke="#25518C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <span>University of Liberia, Monrovia, Liberia</span>
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.947743630271!2d-0.11531335006738244!3d5.574744634991961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf8576332cca93%3A0x2a28dcfb5bf71117!2sKAIPTC%20-%20Kofi%20Annan%20International%20Peacekeeping%20Training%20Centre!5e0!3m2!1sen!2ske!4v1678126207460!5m2!1sen!2ske"
                    style={{border:0}} allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="contact-form">
                <form action="">
                    <div class="names">
                        <div class="control-group name">
                            <label for="name">First Name</label><br></br>
                            <input type="text" placeholder="John"/>
                        </div>
                        <div class="control-group name">
                            <label for="name">Last Name</label><br></br>
                            <input type="text" name="email" placeholder="Kamana"/>
                        </div>
                    </div>
                    <div class="control-group">
                        <label for="email">Email Address</label><br></br>
                        <input type="email" name="email" placeholder="johnkamara@gmail.com"/>
                    </div>
                    <div class="control-group">
                        <label for="company">Company Name</label><br></br>
                        <input type="text" name="company" placeholder="Adanian Labs Limited"/>
                    </div>
                    <div class="control-group">
                        <label for="how">How Did You Hear About Us?</label><br></br>
                        <input type="text" name="how" placeholder="Linkedin"/>
                    </div>
                    <div class="control-group">
                        <label for="">Leave a Message?</label><br></br>
                        <textarea name="message" id="" cols="30" rows="10"
                            placeholder="Type Your Message Here..."></textarea>
                    </div>
                    <div class="control-group checkbox">
                        <input type="checkbox" id="checkboxed"/>
                        <label for="">By clicking on “Send Message” you agree to our Terms & Conditions and Privacy
                            Statement.</label>
                    </div>
                    <div class="control-group">
                        <button type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    )

}

export default ContactUs