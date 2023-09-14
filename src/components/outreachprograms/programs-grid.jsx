const ProgramsGrid = () => {
  return (
    <section className="outreach-card-sec  container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-10">
        <div className="outreach-card">
          <img src="/images/outreach-program/p-8.jpeg" alt="" />
          <div className="outreach-info">
            <h2 className="capitalize">Community Engagement</h2>
            <p className="h-[210px] overflow-y-scroll">
              Dialogues, trainings and workshops with women and youth are a
              key part of the Kofi Annan Institute’s activities. We strongly
              believe that youth and women are crucial for Liberia’s
              reconstruction and development. To focus specifically on these
              two population groups is essential in a country where older
              men often take the front seat when it comes to public
              decision-making, thereby frequently underrepresenting the
              needs of women and future generations. The youth of today will
              be the leaders of tomorrow. Therefore, we need to make
              particular efforts to strengthen the skills of young people in
              the country. We do so through women’s community engagements
              and youth leadership trainings.{" "}
            </p>
            <a href="/outreachprogram/community-engagement">
              <button>Explore Program</button>
            </a>
          </div>
        </div>
        <div className="outreach-card">
          <img src="/images/outreach-program/p-1.jpg" alt="" />
          <div className="outreach-info">
            <h2 className="capitalize">Kofi Annan Dialogues – Wednesday Seminars</h2>
            <p className="h-[210px] overflow-y-scroll">
              The Wednesday Seminar on Peace, Politics and Society takes place weekly during the lecture period. It is an extra-curricular information and discussion event for the student population and the interested public. It is flexible in format and can accommodate a broad range of topics on politics, economics and society. By regularly organizing the seminar, we aim to provide a space for informed and reasoned debate on issues and trends in Liberia and beyond. The event is open to diverse styles of knowledge transfer. Often, external experts or KAICT faculty present on current events or academic debates and discuss their insights with the audience. Panel discussions or student model debates are among the alternative formats. Screening and discussion of documentaries, movies or online lectures by third parties also take place within the seminar framework. The Wednesday Seminar takes place in the cozy atmosphere of the Graduate School’s grand lecture hall and attracts approximately 30 to 60 visitors from the student population and the public.
            </p>
            <a href="/outreachprogram/kofi-annan-dialogues">
              {" "}
              <button>Explore Program</button>
            </a>
          </div>
        </div>
        <div className="outreach-card">
          <img src="/images/outreach-program/p-6.jpeg" alt="" />
          <div className="outreach-info">
            <h2 className=" capitalize">Kofi Annan Living Memorial (KALM)</h2>
            <p className="h-[210px] overflow-y-scroll">
              The Kofi Annan Living Memorial (KALM) is a pan-African
              initiative to commemorate and sustain the legacy of the late
              UN Secretary-General. Rather than erecting a monument, the
              memorial consists in education initiatives seeking to promote
              peace and the Sustainable Development Goals. KAICT
              participates in the initiative through a course for Kofi Annan
              Young Diplomats for Conflict Prevention and the realization of
              the Sustainable Development Goals (SDGs). This consists in a
              46-hours certificate program. It targets an educated
              population segment, i.e. senior high school students,
              university students, professionals in the security sector,
              civil society, NGO, Government and private sector.
            </p>
            <a href="/outreachprogram/KALM">
              <button>Explore Program</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )

}
export default ProgramsGrid