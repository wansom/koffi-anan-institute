const ProgramsGrid=()=>{
    return (
        <div class="grid gird-cols-1  lg:grid-cols-3 gap-[50px]">
        <div class="outreach-card overflow-hidden flex flex-col">
          <img
            src="/images/outreach-program/p-3.png"
            alt="Image 1"
            class="w-full object-contain"
          />
          <div class="p-4 flex-1 flex flex-col items-center space-y-6">
            <h2>Community Engagement</h2>
            <p>
              {" "}
              The community engagement program offers a range of services and
              activities designed to foster dialogue and understanding among
              individuals and groups with diverse perspectives and experiences.
            </p>
          </div>
          <div class="flex items-end px-6 pb-6">
            <button class="py-2 px-4">Explore Program</button>
          </div>
        </div>
        <div class="outreach-card overflow-hidden flex flex-col">
          <img
            src="/images/outreach-program/p-1.png"
            alt="Image 1"
            class="w-full object-contain"
          />
          <div class="p-4 flex-1 flex flex-col items-center space-y-6">
            <h2>Capacity Building</h2>
            <p>
              {" "}
              Through its capacity building program, the institute provides
              training, resources, and support to individuals and organizations
              working in the field of conflict transformation and peacebuilding.
            </p>
          </div>
          <div class="flex items-end px-6 pb-6">
            <button class="py-2 px-4">Explore Program</button>
          </div>
        </div>
        <div class="outreach-card overflow-hidden flex flex-col">
          <img
            src="/images/outreach-program/p-2.png"
            alt="Image 1"
            class="w-full object-contain"
          />
          <div class="p-4 flex-1 flex flex-col items-center space-y-6">
            <h2>Field Trips</h2>
            <p>
              {" "}
              These field trips are designed to complement the academic
              curriculum and provide opportunities for students to learn from
              real-world examples of conflict and peacebuilding initiatives.
            </p>
          </div>
          <div class="flex items-end px-6 pb-6">
            <button class="py-2 px-4">Explore Program</button>
          </div>
        </div>
      </div>
    )

}
export default ProgramsGrid