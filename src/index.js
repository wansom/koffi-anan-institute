import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutRoute from "./pages/about";
import ContactUsRoute from "./pages/contact-us";
import AllNews from "./pages/all-news";
// import SingleNews from "./pages/single-news";
import AllEvents from "./pages/all-events";
import SingleEvent from "./pages/single-event";
import SingleService from "./pages/single-service";
import ProgramDetails from "./pages/program-details";
import Library from "./pages/library";
import ComingSoon from "./pages/coming-soon";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aboutus" element={<AboutRoute/>}/>
      <Route path="/contactus" element={<ContactUsRoute/>}/>
      <Route path="/allnews" element={<AllNews/>}/>
      {/* <Route path="/articles" element={<SingleNews/>}/> */}
      <Route path="/allevents" element={<AllEvents/>}/>
      <Route path="/event" element={<SingleEvent/>}/>
      <Route path="/teachingandtraining" element={<SingleService/>}/>
      <Route path="/programdetails" element={<ProgramDetails/>}/>
      <Route path="/library" element={<Library/>}/>
      <Route path="/comingsoon" element={<ComingSoon/>}/>
      <Route path="*" element={<ComingSoon/>} />

    </Routes>
  </BrowserRouter>
);
reportWebVitals();
