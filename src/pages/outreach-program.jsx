import AboutHero from "../components/about/hero"
import Programs from "../components/outreachprograms/programs"
import Footer from "../components/utils/footer"
import Navbar from "../components/utils/navbar"
import background from '../hero/outreach-programs.png'

const OutreachProgram=()=>{
    return (
        <div>
            <Navbar/>
            <main>
                <AboutHero title={'Outreach Programs'} subtitle='Building Peaceful Communities Together.' background={background}/>
                <section class="outreach-card-sec">
            <div class="outreach-card-container container">
                <div class="outreach-card">
                    <img src="/images/outreach-program/p-3.png" alt=""/>
                    <div class="outreach-info">
                        <h2>Community Engagement</h2>
                        <p>The community engagement program offers a range of services and activities designed to foster dialogue and understanding among individuals and groups with diverse perspectives and experiences.</p>
                        <a href="singleoutreachprogram"><button>Explore Program</button></a>
                    </div>
                </div>
                <div class="outreach-card">
                    <img src="/images/outreach-program/p-1.png" alt=""/>
                    <div class="outreach-info">
                        <h2>Capacity Building</h2>
                        <p>Through its capacity building program, the institute provides training, resources, and support to individuals and organizations working in the field of conflict transformation and peacebuilding.</p>
                        <a href="singleoutreachprogram"> <button>Explore Program</button></a>
                    </div>
                </div>
                <div class="outreach-card">
                    <img src="/images/outreach-program/p-2.png" alt=""/>
                    <div class="outreach-info">
                        <h2>Field Trips</h2>
                        <p>These field trips are designed to complement the academic curriculum and provide opportunities for students to learn from real-world examples of conflict and peacebuilding initiatives.</p>
                        <a href="singleoutreachprogram"><button>Explore Program</button></a>
                    </div>
                </div>
            </div>
        </section>
        <section class="outreach-card-sec">
            <div class="outreach-card-container form container">
                <div class="outreach-card">
                    <img src="/images/outreach-program/p-4.png" alt=""/>
                    <div class="outreach-info">
                        <h2>The Kofi Annan Dialogues</h2>
                        <p>The program aims to foster dialogue and exchange of ideas among individuals and groups with diverse perspectives and experiences on issues related to conflict transformation and peacebuilding.</p>
                        <a href="singleoutreachprogram"><button>Explore Program</button></a>
                    </div>
                </div>
                <div class="outreach-form">
                    <form  class="outreach" action="">
                        <h2 class="out-title">Support our programs</h2>
                        <div class="control-group">
                            <label for="intake">Outreach Programs</label><br/>
                            <select id="intake" name="intake">
                                <option value="intake1">Community Engagement</option>
                                <option value="intake2">September 2023</option>
                                <option value="intake3">Intake 3</option>
                                <option value="intake4">Intake 4</option>
                            </select>
                        </div>
                        <div class="control-group">
                            <label for="company">Amount</label><br/>
                            <input type="number" name="company" placeholder="USD 5.00"/>
                        </div>
                        <div class="control-group checkbox">
                            <label class="container-check">
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                            </label>
                            <label for="">By clicking on “Send Message” you agree to our Terms & Conditions and Privacy
                                Statement.</label>
                        </div>
                        <div class="control-group">
                            <button type="submit">Attend Event</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
            </main>
            <Footer/>
        </div>
    )
}
export default OutreachProgram