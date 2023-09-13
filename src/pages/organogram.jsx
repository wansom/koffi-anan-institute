import AboutHero from "../components/about/hero";
import Footer from "../components/utils/footer";
import Navbar from "../components/utils/navbar"
import backgound from "../hero/about.png";

const Organogram=()=>{
    return (
        <div className="team-container ">
            <Navbar/>
            <AboutHero
        subtitle={"Know Us Better"}
        title={"About Us"}
        background={backgound}
      />
      <div className="bg-[#EFF1FB] lg:py-8">

      <div className="container mx-auto ">
        <div className="flex items-center flex-col justify-center psace-y-10 mt-10">
          <div className="card py-6">
            <h5>Director</h5>
            <p>Prof. T. Debey Sayndee</p>
          </div>
          <hr className="vertical-hr" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-0">
          <div className="card py-6">
            <h5>Record Officer</h5>
            <p> Mr. Titus A. Padmore</p>
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-0 mb-10">
        <div className="flex">
          <div className="flex flex-col items-center justify-center">
          <div className="card py-4">
            <h5>Deputy Director for Policy Dialogue & Special Projects</h5>
            <p>Dr. Anthony L. Hena</p>
          </div>
          <hr className="vertical-hr" />
          <div className="card py-6">
            <h5>Outreach Coordinator</h5>
            <p>Ms. Lusu K. T. Bernard</p>
          </div>
          <hr className="vertical-hr" />
          <div className="card py-6 mb-4 md:mb-0">
            <h5>Logistician</h5>
            <p>Vacant</p>
          </div>
          </div>
          <hr className="horizontal-hr mt-12 hidden md:block" />
          </div>
          <div className="flex flex-col md:flex-row">
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
          <div className="card py-6 mb-4 md:mb-0">
            <h5>Research Assistants</h5>
            <p>Mrs. Josephine W. Capehart</p>
          </div>
          </div>
          <hr className="horizontal-hr hidden md:block md:mt-12" />
          <div className="flex  justify-center items-center md:hidden">
          <hr className="  vertical-hr  " />
          </div>
          
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
        </div>
      </div>
      </div>
      <Footer/>

        </div>
    )
}

export default Organogram