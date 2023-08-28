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
import ProgramDetails from "./pages/program-details";
import Library from "./pages/library";
import ComingSoon from "./pages/coming-soon";
import SinglePost from "./pages/post";
import OutreachProgram from "./pages/outreach-program";
import SingleOutreachProgram from "./pages/single-outreach-program";
import ResearchProjects from "./pages/research";
import SingleResearchProject from "./pages/single-research-projects";
import Teachingandtraining from "./pages/teaching-and-training";
import SecurityReforms from "./pages/security-sector-reform";
import Organogram from "./pages/organogram";
import Publications from "./pages/publications";
import MaryAntoinnette from "./pages/mary-antionnete";
import PartnershipsCollaborations from "./pages/partnerships-collaborations";
import PolicyEngagement from "./pages/policy-engagement";
import AboutOverview from "./components/about/about-overview";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aboutus" element={<AboutRoute />} />
      <Route path="/organogram" element={<Organogram />} />
      <Route path="/contactus" element={<ContactUsRoute />} />
      <Route path="/allnews" element={<AllNews />} />
      <Route path="/news/:id" element={<SinglePost />} />
      <Route path="/allevents" element={<AllEvents />} />
      <Route path="/event/:id" element={<SingleEvent />} />
      <Route path="/teachingandtraining" element={<Teachingandtraining />} />
      <Route path="/programdetails/:id" element={<ProgramDetails />} />
      <Route path="/library" element={<Library />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/comingsoon" element={<ComingSoon />} />
      <Route path="/outreachprograms" element={<OutreachProgram />} />
      <Route path="/outreachprogram/:id" element={<SingleOutreachProgram />} />
      <Route path="/research" element={<ResearchProjects />} />
      <Route path="/securitySectorReforms" element={<SecurityReforms />} />
      <Route path="/maryAntoinette" element={<MaryAntoinnette />} />
      <Route
        path="/partnershipsandcollaborations"
        element={<PartnershipsCollaborations />}
      />
      <Route path="/researchproject/:id" element={<SingleResearchProject />} />
      <Route path="/policyEngagement" element={<PolicyEngagement />} />
      <Route path="/kacitOverview" element={<AboutOverview />} />
      <Route path="*" element={<ComingSoon />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
