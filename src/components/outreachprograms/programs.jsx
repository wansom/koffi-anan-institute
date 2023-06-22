import ProgramsGrid from "./programs-grid";

const Programs = () => {
  return (
    <div
      className="container mx-auto h-fit space-y-10"
      style={{ paddingTop: "80px", paddingBottom: "39px" }}
    >
      {" "}
      <ProgramsGrid/>
      <div className="flex flex-col lg:flex-row justify-start">
        <div className="basis-1/3 pr-[30px]">
          <div className="outreach-card overflow-hidden flex flex-col">
            <img
              src="/images/outreach-program/p-2.png"
              alt="Image 1"
              className="w-full object-contain"
            />
            <div className="p-4 flex-1 flex flex-col items-center space-y-6">
              <h2>Field Trips</h2>
              <p>
                {" "}
                These field trips are designed to complement the academic
                curriculum and provide opportunities for students to learn from
                real-world examples of conflict and peacebuilding initiatives.
              </p>
            </div>
            <div className="flex items-end px-6 pb-6">
              <button className="py-2 px-4">Explore Program</button>
            </div>
          </div>
        </div>

        <div className="basis-2/3 program-form ml-[30px]">
          <h2>Support our programs</h2>
          <form action="" className=" space-y-6">
            <div className="control-group">
              <label for="company">Outreach Programs</label>
              <br></br>
              <select
                type="text"
                name="company"
                placeholder="EXample Limited "
                
              >
                <option>Community engagement</option>
                <option>Capacity Building</option>
                <option>Field Trips</option>
              </select>
            </div>
            <div className="control-group">
              <label for="company">Amount</label>
              <br></br>
              <select
                type="text"
                name="company"
                placeholder="5.0"
                
              >
                <option>5.0</option>
                <option>Capacity Building</option>
                <option>Field Trips</option>
              </select>
            
            </div>
            <div className=" control-group flex gap-[20px]">
                <input type="checkbox" />
                <p>By clicking on “Apply Now” you agree to our Terms & Conditions and Privacy Statement.</p>
              </div>
              <button>Donate</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Programs;
