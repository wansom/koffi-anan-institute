
import { useState, useEffect } from "react"
import { getData } from '../../services';
import {services} from "../../Data/home"
const Services = () => {
  const utl='http://kacit.twafwane.com/wp-json/wp/v2/media/52'
  // const [services,setServices]= useState([]);
  // useEffect(() => {
  //   getData('https://kacit.twafwane.com/wp-json/wp/v2/posts/?categories=8&_embed').then((data)=>{
  //     setServices(data)
  //   })
  // }, []);
  return (
    <section className="offers">
    <div className="offers-container container">
        <div className="offer-head">
            <h1>What We Offer</h1>
        </div>
        <div className="offer-content">
          {services.map((service,index)=>(
            <div className="offer-card">
             <img src={service.image_url}/>
            <div className="offer-info">
               <div className="flex justify-center items-center">
               <img src={service.icon} alt="icon"  className="icon"/>
               </div>
                <h3>{service.title}</h3>
                <p>{service.subtitle}</p>
                <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_69_173" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0"
                            y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_69_173)">
                            <path d="M12 20L10.575 18.6L16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20Z"
                                fill="#FCFCFC" />
                        </g>
                    </svg>
                </button>
            </div>
        </div>
          ))}

        </div>
    </div>
</section>
  );
};
export default Services;
