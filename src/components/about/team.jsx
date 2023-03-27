const Team = ({loading,staff})=>{
    return (
        <section class="team">
            <div class="team-container container">
                <div class="team-head">
                    <p>Staff</p>
                    <h1>Our Team</h1>
                </div>
                <div class="team-content">
                    {staff.map((i)=>(
                         <div class="member">
                         <img src={i.featured_image_url} alt="Kofi Annan  Annan Institute for Conflict Transformation Team Member"/>
                         <div class="member-info">
                             <span >{i.acf.position}</span>
                             <h3 >{i.acf.fullname}</h3>
                             <p>{i.acf.description}</p>
                             <a href="comingsoon">Read More <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1.4 12L0 10.6L4.6 6L0 1.4L1.4 0L7.4 6L1.4 12Z" fill="#25518C"/>
                                 </svg>
                                 </a>
                         </div>
                     </div>
                    ))}
                   
                    <div class="member">

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Team