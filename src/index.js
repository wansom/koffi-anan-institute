import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutRoute from "./pages/about";
import ContactUsRoute from "./pages/contact-us";
import AllNews from "./pages/all-news";
import AllEvents from "./pages/all-events";
import SingleEvent from "./pages/single-event";
import SingleService from "./pages/single-service";
import ProgramDetails from "./pages/program-details";
import Library from "./pages/library";
import ComingSoon from "./pages/coming-soon";
import SinglePost from "./pages/post";
import OutreachProgram from "./pages/outreach-program";
import SingleOutreachProgram from "./pages/single-outreach-program";
import ResearchProjects from "./pages/research";
import SingleResearchProject from "./pages/single-research-projects";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aboutus" element={<AboutRoute/>}/>
      <Route path="/contactus" element={<ContactUsRoute/>}/>
      <Route path="/allnews" element={<AllNews/>}/>
      <Route path="/post/:id" element={<SinglePost/>}/>
      <Route path="/allevents" element={<AllEvents/>}/>
      <Route path="/event/:id" element={<SingleEvent/>}/>
      <Route path="/teachingandtraining" element={<SingleService/>}/>
      <Route path="/programdetails" element={<ProgramDetails/>}/>
      <Route path="/library" element={<Library/>}/>
      <Route path="/comingsoon" element={<ComingSoon/>}/>
      <Route path="/outreachprograms" element={<OutreachProgram/>}/>
      <Route path="/singleoutreachprogram" element={<SingleOutreachProgram/>}/>
      <Route path="/research" element={<ResearchProjects/>}/>
      <Route path="/singleresearchproject" element={<SingleResearchProject/>}/>     
      <Route path="*" element={<ComingSoon/>} />
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
