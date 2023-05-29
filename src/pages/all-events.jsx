import AboutHero from "../components/about/hero";
import EventsCard from "../components/events/events-card";
import Navbar from "../components/utils/navbar";
import backgound from "../hero/events-banner.png";
import { useState, useEffect } from "react";
import { getData } from "../services";
import Footer from "../components/utils/footer";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [activetab, setactivetab] = useState(0);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filter, setFilter] = useState('all');
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const switchTab=(index)=>{
    setactivetab(index)
  }
  const tabs=[
"All",
"Upcoming Events",
"Past Events"
  ]
  useEffect(() => {
    getData("https://kacit.twafwane.com/wp-json/tribe/events/v1/events/?start_date=2023-02-01").then(
      (data) => {
        setEvents(data.events);
        setFilteredEvents(data.events);
        console.log("daily events",data)
      }
    );
  }, []);
  const handleFilter= (filter,tab) => {
    setFilter(filter);
    setactivetab(tab);
    // Filter events based on filter value
    switch (filter) {
      case 'Upcoming Events':

        setFilteredEvents(events.filter(event => new Date(event.start_date) > new Date()));
        break;
      case 'Past Events':
        setFilteredEvents(events.filter(event => new Date(event.start_date) < new Date()));
        break;
      default:
        setFilteredEvents(events);
        break;
    }
  };
  return (
    <div>
      <Navbar />
      <main>
        <AboutHero
          title={"Events"}
          subtitle={"Let’s Network"}
          background={backgound}
        />
        <section class="filter">
          <div class="filter-container container">
            <div class="filter-top">
              {/* <div class="head">
                        <h2>Filters</h2>
                    </div>
                    <div class="filter-form">
                        <form action="">
                            <div class="form-group">
                                <input type="text" placeholder="Date"  onfocus="(this.type='date')"/>
                            </div>
                            <div class="form-group">
                                <select name="location" id="locations">
                                    <option value="location">Location</option>
                                    <option value="sa">South Africa</option>
                                    <option value="congo">Congo</option>
                                    <option value="zimbabwe">Zimbabwe</option>
                                    <option value="zambia">Zambia</option>
                                    <option value="burkina">Burkina Faso</option>
                                    <option value="egypt">Egypt</option>
                                  </select>
                            </div>
                            <div class="form-group">
                                <select name="location" id="locations">
                                    <option value="location">Price</option>
                                    <option value="sa">South Africa</option>
                                    <option value="congo">Congo</option>
                                    <option value="zimbabwe">Zimbabwe</option>
                                    <option value="zambia">Zambia</option>
                                    <option value="burkina">Burkina Faso</option>
                                    <option value="egypt">Egypt</option>
                                  </select>
                            </div>
                            <div class="form-group">
                                <select name="location" id="locations">
                                    <option value="location">Category</option>
                                    <option value="sa">South Africa</option>
                                    <option value="congo">Congo</option>
                                    <option value="zimbabwe">Zimbabwe</option>
                                    <option value="zambia">Zambia</option>
                                    <option value="burkina">Burkina Faso</option>
                                    <option value="egypt">Egypt</option>
                                  </select>
                            </div>
                            <div class="form-group">
                                <select name="location" id="locations">
                                    <option value="location">Format</option>
                                    <option value="sa">South Africa</option>
                                    <option value="congo">Congo</option>
                                    <option value="zimbabwe">Zimbabwe</option>
                                    <option value="zambia">Zambia</option>
                                    <option value="burkina">Burkina Faso</option>
                                    <option value="egypt">Egypt</option>
                                  </select>
                            </div>
                            <div class="form-group">
                               <button type="submit">Filter</button>
                            </div>
                        </form>
                    </div> */}
              <div class="tab-btns">
                {tabs.map((i,index)=>(
                <button class={index==activetab?"tab active":"tab"} onClick={() => handleFilter(i,index)}>
                <span>{i}</span>
              </button>
                ))}
              </div>
              <div class="tab-slider">
                <div class="flex items-center justify-start">
                  {filteredEvents.map((i) => (
                    <EventsCard  event={i}/>
                  ))}
                </div>
              </div>
              {events.length>=6&&(
                <div class="pagination">
                <div class="page">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_477_39"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    >
                      <rect width="20" height="20" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_477_39)">
                      <path
                        d="M13.3333 18.3333L5 9.99996L13.3333 1.66663L14.8125 3.14579L7.95833 9.99996L14.8125 16.8541L13.3333 18.3333Z"
                        fill="#1C1B1F"
                      />
                    </g>
                  </svg>
                </div>
                <div class="page">
                  <span>1</span>
                </div>
                <div class="page">
                  <span>2</span>
                </div>
                <div class="page">
                  <span>3</span>
                </div>
                <div class="page">
                  <span>4</span>
                </div>
                <div class="page">
                  <span>5</span>
                </div>
                <div class="page">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_477_34"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    >
                      <rect width="20" height="20" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_477_34)">
                      <path
                        d="M6.68717 18.3333L5.20801 16.8541L12.0622 9.99996L5.20801 3.14579L6.68717 1.66663L15.0205 9.99996L6.68717 18.3333Z"
                        fill="#1C1B1F"
                      />
                    </g>
                  </svg>
                </div>
                <div class="page more">
                  <span>More</span>
                </div>
              </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};
export default AllEvents;
