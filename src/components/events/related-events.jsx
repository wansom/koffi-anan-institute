import EventsCard from "./events-card";

const RelatedEvents = ({events,loading}) => {
  return (
    <section className="upcoming-black">
      <div className="container upcoming-black-container">
        <div className="head">
          <h2>Upcoming Events</h2>
        </div>
        <div className="black-events">
          <div>
            {loading?<p>Loading...</p>:<div className="grid grid-cols-3">
              {events.map((i)=>(
                <EventsCard event={i}/>
              ))}
              </div>}
          </div>
        </div>
      </div>
    </section>
  );
};
export default RelatedEvents;
