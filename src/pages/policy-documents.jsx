import AboutHero from "../components/about/hero";
import Footer from "../components/utils/footer";
import Navbar from "../components/utils/navbar";
import backgound from "../hero/publications.png";

const PolicyDocuments = () => {
    const papers = [
        { title: "GoL (2020). Voices for Consolidation of Peace in Liberia: 15 Counties Consolidated Peace and Reconciliation Plan [ National Reconciliation Plan] . Government of Liberia, - 39",
link: "/gol-2020.pdf"},
{
    title: "GoL (2018).Pro-Poor Agenda for Prosperity and Development (PAPD).Government of Liberia, 1-151",
        link: "/gol-2018.pdf"
},
{
    title: "GoL(2013 [updated 2018]).Towards a Reconciled, Peaceful and Prosperous Liberia: A Strategic Roadmap for National Healing, Peacebuilding, and Reconciliation –2013 -2030.Government of Liberia",
        link: "/gol-2013.pdf"
},
{
    title: "GoL (2013).National Human Rights Action Plan of Liberia (NHRAP)–2013-2018. Government of Liberia,1-32",
        link: "/gol-2014.pdf"
},
{
    title: "GoL (2012).Liberia National Vision 2030. Government of Liberia, 1-40.",
    link: "/gol-2012.pdf"
},
{
    title: "TRC (2009).TRC Final Report of the Truth and Reconciliation Commission of Liberia (TRC) - Volume I:Findings and Determinations. Truth and Reconciliation Commission of Liberia, 1-107",
        link: "/trc-v1.pdf"
},
{
    title: "TRC (2009).TRC Final Report of the Truth and Reconciliation Commission of Liberia (TRC)-Volume II:Consolidated Final Report. Truth and Reconciliation Commission of Liberi a, 1-384",
        link: "/trc-v2.pdf"
},
{title:"UN (2017).Sustaining Peace and Securing Development: Liberia Peacebuilding Plan. United Nations, 1-31",
link:"/un-2017.pdf"}
    ]
return (
    <>
        <Navbar />
        <AboutHero
            title={"Policy Papers"}
            subtitle={""}
            background={backgound}
        />
        <main>

            <section>
                <div className="published-container container mx-auto px-5 md:px-10">
                    <div className="prog-head ">
                        <h2>POLICY PAPERS</h2>
                        {papers.map((i) => (
                            <div className="pub-info">
                                <div className="flex justify-between gap-3">
                                    <div>
                                        <h3>
                                            {i.title}
                                        </h3>
                                        
                                    </div>
                                    <a href={i.link} className="border-solid border-2 border-red-500 rounded-lg px-2 h-10 flex items-center">Download</a>
                                </div>
                                <hr className="w-full h-[1px] bg-black" />
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </>
);
}

export default PolicyDocuments;