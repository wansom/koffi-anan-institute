const Programs = () => {
  return (
    <div
      className="container mx-auto h-fit"
      style={{ paddingTop: "80px", paddingBottom: "39px" }}
    >
      <div className="grid grid-cols-1 grid-cols-3">
        <div className="outreach-card space-y-4 pb-4">
          <img src="/images/outreach-program/p-3.png" alt="" />
          <div className="flex flex-col gap-4 items-center justify-center px-6">
            <h3>Community Engagement</h3>
            <p>
              The community engagement program offers a range of services and
              activities designed to foster dialogue and understanding among
              individuals and groups with diverse perspectives and experiences.
            </p>
            <button>Explore Program</button>
          </div>
        </div>
        <div className="outreach-card space-y-4 pb-4">
          <img src="/images/outreach-program/p-1.png" alt="" />
          <div className="flex flex-col gap-4 items-center justify-center px-6">
            <h3>Capacity Building</h3>
            <p>
              Through its capacity building program, the institute provides
              training, resources, and support to individuals and organizations
              working in the field of conflict transformation and
              peacebuilding.
            </p>
            <button>Explore Program</button>
          </div>
        </div>
        <div className="outreach-card space-y-4 pb-4">
          <img src="/images/outreach-program/p-2.png" alt="" />
          <div className="flex flex-col gap-7 items-center justify-center px-6">
            <h3>Field Trips</h3>
            <p>
              These field trips are designed to complement the academic
              curriculum and provide opportunities for students to learn from
              real-world examples of conflict and peacebuilding initiatives.
            </p>
            <button>Explore Program</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Programs;
