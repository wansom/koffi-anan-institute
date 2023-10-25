import AboutHero from "../components/about/hero";
import Footer from "../components/utils/footer";
import Navbar from "../components/utils/navbar";
import backgound from "../hero/publications.png";

const Publications = () => {
  const academic=[
    {
      title:"A Prescription for Prolonged Fragility in Liberia, In Bangura, Ibrahim (eds.) Disarmament, Demobilisation and Reintegration of Ex-Combatants in Africa, Routledge.",
      author:"Kormoll, Raphaela T. & Sayndee, T. Debey (2023). Incomplete DDRR",
      doc:"http://kacit.twafwane.com/wp-content/uploads/2023/10/Centre-for-Democracy-Development-2007-Legacy-of-the-Slave-Trade-in-Sierra-Leone-and-Liberia-Summary-of-Discussion.pdf"
    },
    {
      title:"“The Task of Rebuilding Liberia.” In Kenneth Omeje (ed.), Peacebuilding in Contemporary Africa – In Search of Alternative Strategies, Routledge: Oxford: 111-124.",
      author:"Sayndee, T. Debey (2019).",
      doc:"http://kacit.twafwane.com/wp-content/uploads/2023/10/Centre-for-Democracy-Development-2007-Legacy-of-the-Slave-Trade-in-Sierra-Leone-and-Liberia-Summary-of-Discussion.pdf"
    },
    {
      title:"“Social Mobilization and the Ebola Virus Disease in Liberia.” Lanham: Lexington Books.   ",
      author:"Perry, John and Sayndee T. Debey (2017). ",
      doc:"http://kacit.twafwane.com/wp-content/uploads/2023/10/Centre-for-Democracy-Development-2007-Legacy-of-the-Slave-Trade-in-Sierra-Leone-and-Liberia-Summary-of-Discussion.pdf"
    },
    {
      title:"“African Truth Commissions and Transitional Justice.” Lanham: Lexington Books. ",
      author:"Perry, John and Sayndee T. Debey (2015). ",
      doc:"http://kacit.twafwane.com/wp-content/uploads/2023/10/Centre-for-Democracy-Development-2007-Legacy-of-the-Slave-Trade-in-Sierra-Leone-and-Liberia-Summary-of-Discussion.pdf"
    },
    {
      title:"“The Role of Civil Society in Post-Conflict Reconstruction of Liberia – A Policy Approach.” In Kenneth Omeje (ed.), War to Peace Transition: Conflict Intervention and Peacebuilding in Liberia, University Press of America",
      author:"Sayndee, T. Debey (2009).",
      doc:"http://kacit.twafwane.com/wp-content/uploads/2023/10/Centre-for-Democracy-Development-2007-Legacy-of-the-Slave-Trade-in-Sierra-Leone-and-Liberia-Summary-of-Discussion.pdf"
    },
    {
      title:"“Liberia: Long and Rocky Journey to Peace.” In Consolidating the Democracy Project in Africa: Cases from South Africa, Nigeria, Liberia, Sierra Leone and Somalia, African Renaissance 4 (3&4): 51-61.",
      author:"Sayndee, T. Debey (2009).",
      doc:"http://kacit.twafwane.com/wp-content/uploads/2023/10/Centre-for-Democracy-Development-2007-Legacy-of-the-Slave-Trade-in-Sierra-Leone-and-Liberia-Summary-of-Discussion.pdf"
    },
    {
      title:"Thugs’ Paradise, Agencies’ Guinea Pig and the Natural Resources Intrigue.” In Kenneth Omeje (ed.), Extractive Economies and Conflicts in the Global South: Multi-Regional Perspectives on Rentier Politics, Ashgate: Aldershot: 149-160.",
      author:"Sayndee, T. Debey (2009).",
      doc:"http://kacit.twafwane.com/wp-content/uploads/2023/10/Centre-for-Democracy-Development-2007-Legacy-of-the-Slave-Trade-in-Sierra-Leone-and-Liberia-Summary-of-Discussion.pdf"
    },



  ]
  const policyPapers=[
    {
      title:"“Security Sector and Trust in Community Relations.” In Engendering Collective Action for Advancing Liberia’s Development, Liberia Development Conference Anthology, 372-392. ",
      author:"Sayndee, T. Debey (2018). ",
      doc:"http://kacit.twafwane.com/wp-content/uploads/2023/10/Centre-for-Democracy-Development-2007-Legacy-of-the-Slave-Trade-in-Sierra-Leone-and-Liberia-Summary-of-Discussion.pdf"
    },
    {
      title:"“Security Sector Governance in West Africa – Learning from Experience (Case Study of Liberia: Developments in Norms of Legislative Oversight)” DCAF.",
      author:"Sayndee, T. Debey (2016). ",
      doc:"http://kacit.twafwane.com/wp-content/uploads/2023/10/Centre-for-Democracy-Development-2007-Legacy-of-the-Slave-Trade-in-Sierra-Leone-and-Liberia-Summary-of-Discussion.pdf"
    },
    {
      title:"Legacy of The Slave Trade in Sierra Leone and Liberia.” Occasional Papers, Centre for Democracy and Development (CDD), London.",
      author:"Centre for Democracy and Development (2007). ",
      doc:"http://kacit.twafwane.com/wp-content/uploads/2023/10/Centre-for-Democracy-Development-2007-Legacy-of-the-Slave-Trade-in-Sierra-Leone-and-Liberia-Summary-of-Discussion.pdf"
    },
    {
      title:"“Mainstreaming Conflict Transformation Strategies in Development Programming and Planning.” UNDP Development Dialogue Series, unpublished.",
      author:"UNDP Development Dialogue Series (2007)",
      doc:"http://kacit.twafwane.com/wp-content/uploads/2023/10/Centre-for-Democracy-Development-2007-Legacy-of-the-Slave-Trade-in-Sierra-Leone-and-Liberia-Summary-of-Discussion.pdf"
    },
  ]
  const policyBriefs=[
    {
      title:"Liberia between Reconciliation Commission and Roadmap – Steps Forward in a Halted Process?",
      author:"KAICT Policy Brief No. 1 – June 2013",
      doc:"http://kacit.twafwane.com/wp-content/uploads/2023/10/Sayndee-2013-Liberia-between-Reconciliation-Commission-and-Roadmap-–-Steps-Forward-in-a-Halted-Process-1.pdf"
    },
  ]
  return (
    <>
      <Navbar />
      <AboutHero
        title={"Publications"}
        subtitle={"Learn about our research"}
        background={backgound}
      />
      <main>

        <section>
          <div className="published-container container mx-auto px-5 md:px-10">
          <div className="prog-head ">
                    <h2>ACADEMIC PUBLICATIONS</h2>
                   {academic.map((i)=>(
                     <div className="pub-info">
                     <div className="flex justify-between gap-3">
                    <div>
                    <h3>
                     {i.title}
                     </h3>
                     <span>
                       by <u>{i.author} </u>
                     </span>
                    </div>
                    <a href={i.doc} className="border-solid border-2 border-red-500 rounded-lg px-2 h-10 flex items-center">Download</a>
                     </div>
                     <hr className="w-full h-[1px] bg-black"/>
                   </div>
                   ))}
              
                  </div>
                  
                  <div className="prog-head ">
                    <h2>OTHER PUBLICATIONS</h2>
                   {policyPapers.map((i)=>(
                    <div className="pub-info">
                    <div className="flex justify-between gap-3">
                   <div>
                   <h3>
                    {i.title}
                    </h3>
                    <span>
                      by <u>{i.author} </u>
                    </span>
                   </div>
                   <a href={i.doc} className="border-solid border-2 border-red-500 rounded-lg px-2 h-10 flex items-center">Download</a>
                    </div>
                    <hr className="w-full h-[1px] bg-black"/>
                  </div>
                   ))}
              
                  </div>
                  <div className="prog-head ">
                    <h2>POLICY BRIEFS</h2>
                   {policyBriefs.map((i)=>(
                    <div className="pub-info">
                    <div className="flex justify-between gap-3">
                   <div>
                   <h3>
                    {i.title}
                    </h3>
                    <span>
                      by <u>{i.author} </u>
                    </span>
                   </div>
                   <a href={i.doc} className="border-solid border-2 border-red-500 rounded-lg px-2 h-10 flex items-center">Download</a>
                    </div>
                    <hr className="w-full h-[1px] bg-black"/>
                  </div>
                   ))}
              
                  </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Publications;
