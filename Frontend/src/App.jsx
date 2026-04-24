import { Route, Routes } from "react-router-dom";                                             // Imports the Route and Routes from the react-router-dom library
import "./App.css";                                                                           // Imports the App.css file 

/* All the different components imported from their respective directories */
/* --------------------------------- Home Page Components ----------------- */
import AboutSection from "./Components/Pages/HomePage/IntroCTA/IntroCTA.jsx";
import Contact from "./Components/Pages/AboutPages/ContactUs/ContactUs.jsx";   
import NavPanels from "./Components/Pages/HomePage/NavPanels/NavPanels.jsx";
import HRW from "./Components/Pages/HomePage/HowRecovery/HRW.jsx";
import NavShowcase from "./Components/Pages/HomePage/NavShowcase/NavShowcase.jsx";
import FAT from "./Components/Pages/HomePage/FocusAreasTeaser/FAT.jsx";
import ContactAHHH from "./Components/Pages/HomePage/NavShowcase/ContactAHHH.jsx";

/* --------------------------------- About Us Components ------------------------------------ */
import Intro from "./Components/Pages/AboutPages/Intro/Intro.jsx";
import Chub from "./Components/Pages/AboutPages/CHub/Intro/CHub.jsx";
import CHubCapabilities from "./Components/Pages/AboutPages/CHub/Capabilities/CHubCapabilities.jsx";
import CHWork from "./Components/Pages/AboutPages/OurApproach/CoordinationHub/CHWorks.jsx";
import Team from "./Components/Pages/AboutPages/MeetTeam/Members/MeetTeam.jsx";
import Why from "./Components/Pages/AboutPages/OurMission/OurMission.jsx";
import AboutContent from "./Components/Pages/AboutPages/Content/AboutContent.jsx";
import TeamIntro from "./Components/Pages/AboutPages/MeetTeam/Intro/TeamIntro.jsx";

/* ---------------------------------- Case Studies Components ------------------------- */
import NCCaseHero from "./Components/Pages/CaseStudiesPages/NorthCarolina/HeroSection/NCHeroSection.jsx";
import NCCaseRecovery from "./Components/Pages/CaseStudiesPages/NorthCarolina/RecoveryPortfolio/NCRecoveryPortfolio.jsx";
import NCCaseImpact from "./Components/Pages/CaseStudiesPages/NorthCarolina/ImpactSection/NCImpactSection.jsx";
import DWHero from "./Components/Pages/CaseStudiesPages/DeepWaterHorizon/HeroSection/DWHeroSection.jsx";
import DWImpact from "./Components/Pages/CaseStudiesPages/DeepWaterHorizon/ImpactSection/DWImpactSection.jsx";
import EPHero from "./Components/Pages/CaseStudiesPages/EastPalestine/HeroSection/EPHeroSection.jsx";
import EPImpact from "./Components/Pages/CaseStudiesPages/EastPalestine/ImpactSection/EPImpactSection.jsx";

/* --------------------------------- Focus Areas Components ------------------------------- */
import RSFexample from "./Components/Pages/FocusAreasPages/RSF/Cards/RSFexample.jsx";
import RSFHeader from "./Components/Pages/FocusAreasPages/RSF/Header/RSFHeader.jsx";
import CC from "./Components/Pages/FocusAreasPages/CrisisCommunication/CC.jsx";
import DebrisManagement from "./Components/Pages/FocusAreasPages/DebrisMan/Debris.jsx";
import WildFire from "./Components/Pages/FocusAreasPages/WildFire/WildFire.jsx";

/* --------------------------------- Repeated Components ---------------------------------- */
import Navbar from  "./Components/RepeatedComponents/Navbar/Navbar.jsx";                                             // Imports the Navbar component as variable Navbar
import Footer from "./Components/RepeatedComponents/Footer/Footer.jsx";                                          // Imports footer component as variable Footer      
import UnderConstruction from "./Components/RepeatedComponents/UnderConstruction/UnderConstruction.jsx";
import ScrollToTop from "./Components/RepeatedComponents/ScrollToTop/ScrollToTop.jsx";




function App() {
  return (
    // Wrapper for all the information on the App.jsx file styled by the app-container class located in the App.css file (Everything within here is displayed on the main page through the main.jsx file)
    <div>
      <ScrollToTop />
      <Navbar />                                                           {/* Displays the navbar component */} 
      {/* Wrapper container for everything else on the page styled by the main-content class */}
      <div>
      {/* This is another wrapper container for all defined Routes (Put all the Route tags here. Your telling the program what to display when the url equals the path) */}
      <Routes>
      <Route path="/" element={<><AboutSection /><HRW /><NavPanels /><FAT /><NavShowcase /> <ContactAHHH /> </>} />  {/* This is a route that displays information on the home page only */}
        <Route path="/contact" element={<><Contact /></>} />
        <Route path="/about/AboutUs" element={<><Intro /><Why /><Chub /> <CHubCapabilities /> </>} />
        <Route path="/about/ourApproach" element={<><CHWork /></>} />
        <Route path="/about/Team" element={<><TeamIntro/><Team /></>} />
        {/* Case Studies */}
        <Route path="/caseStudies/eastPalestine" element={<><EPHero /><EPImpact /></>} />
        <Route path="/caseStudies/deepwaterHorizon" element={<><DWHero /><DWImpact /></>} />
        <Route path="/caseStudies/northCarolina" element={<><NCCaseHero /><NCCaseRecovery /><NCCaseImpact /></>} />
        {/* Focus Areas */}
        <Route path="/focusArea/interagencyRecovery" element={<><RSFHeader/><RSFexample/></>}/>
        
        <Route path="/focusArea/DebrisManagement" element={<><DebrisManagement /></>} />
        <Route path="/focusArea/crisisCommunication" element={<><CC /></>} />
        <Route path="/focusArea/wildfire" element={<><WildFire /></>} />
        {/* Platform */}
        
      </Routes>
      </div>
      <Footer />
    </div>
    
  );
} 
export default App;         // Export the whole App component for later use within the main.jsx file which is the file that displays everything on the page for you to see!