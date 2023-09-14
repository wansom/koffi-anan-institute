import AboutHero from "../components/about/hero";
import Footer from "../components/utils/footer";
import Navbar from "../components/utils/navbar";
import backgound from "../hero/publications.png";

const Publications = () => {
  const academic=[
    {
      title:"A Prescription for Prolonged Fragility in Liberia, In Bangura, Ibrahim (eds.) Disarmament, Demobilisation and Reintegration of Ex-Combatants in Africa, Routledge.",
      author:"Kormoll, Raphaela T. & Sayndee, T. Debey (2023). Incomplete DDRR"
    },
    {
      title:"“The Task of Rebuilding Liberia.” In Kenneth Omeje (ed.), Peacebuilding in Contemporary Africa – In Search of Alternative Strategies, Routledge: Oxford: 111-124.",
      author:"Sayndee, T. Debey (2019)."
    },
    {
      title:"“Social Mobilization and the Ebola Virus Disease in Liberia.” Lanham: Lexington Books.   ",
      author:"Perry, John and Sayndee T. Debey (2017). "
    },
    {
      title:"“African Truth Commissions and Transitional Justice.” Lanham: Lexington Books. ",
      author:"Perry, John and Sayndee T. Debey (2015). "
    },
    {
      title:"“The Role of Civil Society in Post-Conflict Reconstruction of Liberia – A Policy Approach.” In Kenneth Omeje (ed.), War to Peace Transition: Conflict Intervention and Peacebuilding in Liberia, University Press of America",
      author:"Sayndee, T. Debey (2009)."
    },
    {
      title:"Sayndee, T. Debey (2009). ",
      author:"“Liberia: Long and Rocky Journey to Peace.” In Consolidating the Democracy Project in Africa: Cases from South Africa, Nigeria, Liberia, Sierra Leone and Somalia, African Renaissance 4 (3&4): 51-61."
    },
    {
      title:"Sayndee, T. Debey (2009). ",
      author:"“Thugs’ Paradise, Agencies’ Guinea Pig and the Natural Resources Intrigue.” In Kenneth Omeje (ed.), Extractive Economies and Conflicts in the Global South: Multi-Regional Perspectives on Rentier Politics, Ashgate: Aldershot: 149-160."
    },



  ]
  const policyPapers=[
    {
      title:"“Security Sector and Trust in Community Relations.” In Engendering Collective Action for Advancing Liberia’s Development, Liberia Development Conference Anthology, 372-392. ",
      author:"Sayndee, T. Debey (2018). "
    },
    {
      title:"“Security Sector Governance in West Africa – Learning from Experience (Case Study of Liberia: Developments in Norms of Legislative Oversight)” DCAF.",
      author:"Sayndee, T. Debey (2016). "
    },
    {
      title:"Legacy of The Slave Trade in Sierra Leone and Liberia.” Occasional Papers, Centre for Democracy and Development (CDD), London.",
      author:"Centre for Democracy and Development (2007). "
    },
    {
      title:"“Mainstreaming Conflict Transformation Strategies in Development Programming and Planning.” UNDP Development Dialogue Series, unpublished.",
      author:"UNDP Development Dialogue Series (2007)"
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
                     <h3>
                     {i.title}
                     </h3>
                     <span>
                       by <u>{i.author} </u>
                     </span>
                     <hr className="w-full h-[1px] bg-black"/>
                   </div>
                   ))}
              
                  </div>
                  
                  <div className="prog-head ">
                    <h2>OTHER PUBLICATIONS</h2>
                   {policyPapers.map((i)=>(
                     <div className="pub-info">
                     <h3>
                     {i.title}
                     </h3>
                     <span>
                       by <u>{i.author} </u>
                     </span>
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
