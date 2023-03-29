import ProgramAppForm from "../outreachprograms/program-app-form";
import ProgramsGrid from "../outreachprograms/programs-grid";

const ResearchOne = () => {
  return (
    <section>
      <div
        className="container mx-auto research-one"
        style={{ paddingTop: "80px", paddingBottom: "39px" }}
      >
        <p>
          The Kofi Annan Institute for Conflict Transformation at the University
          of Liberia is committed to engaging with the community to promote
          peace and reconciliation. Through its outreach programs, the institute
          works with local communities to develop sustainable solutions to
          conflict and build lasting peace. <br /> <br />
          The community engagement program offers a range of services and
          activities designed to foster dialogue and understanding among
          individuals and groups with diverse perspectives and experiences.
          These include workshops, seminars, and training sessions on conflict
          resolution, peacebuilding, and related topics.
        </p>
        <div className="grid gird-cols-1 md:grid-cols-3 my-12">
          <div className="stats space-y-2 flex flex-col justify-center items-center">
            <span>60+</span>
            <p>Seminars per year</p>
          </div>
          <div className="stats space-y-2 flex flex-col justify-center items-center">
            <span>711</span>
            <p>Desks donated to schools</p>
          </div>
          <div className="stats space-y-2 flex flex-col justify-center items-center">
            <span>25+</span>
            <p>Workshops per year</p>
          </div>
        </div>
        <p>
          The program also partners with local organizations and community
          leaders to address specific challenges related to conflict and
          violence in the community. This includes working with youth groups,
          women's organizations, and other community-based organizations to
          promote greater participation and inclusion in peacebuilding
          initiatives.
          <br />
          <br />
          Through its community engagement program, the Kofi Annan Institute for
          Conflict Transformation University of Liberia seeks to empower
          individuals and communities to take an active role in building peace
          and promoting reconciliation. By working together with local partners
          and stakeholders, the institute hopes to create a more peaceful and
          inclusive society in Liberia and beyond.
        </p>
        <div className="mt-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 px-12">
            <img src="/images/outreach-program/p-3.png" alt="" />
            <img src="/images/outreach-program/p-3.png" alt="" />
            <img src="/images/outreach-program/p-3.png" alt="" />
          </div>
          <div className="flex items-center justify-center mt-4 gap-4">
            <div className="dots-active rounded-full"></div>
            <div className="dots-not rounded-full"></div>
          </div>
        </div>
        <ProgramAppForm />
        <div className="space-y-6">
          <h1>Outreach Programs</h1>
          <ProgramsGrid />
        </div>
      </div>
    </section>
  );
};
export default ResearchOne;
