import { Route, Routes } from "react-router-dom";                                             // Imports the Route and Routes from the react-router-dom library
import "./App.css";                                                                           // Imports the App.css file 

/* All the different components imported from their respective directories */
import Navbar from  "./Components/RepeatedComponents/Navbar/Navbar.jsx";                                             // Imports the Navbar component as variable Navbar
import ExternalResources from "./Components/Pages/HomePage/ExternalResources/ExternalResources.jsx";             // Imports the RedirectButtons componenent as variable ExternalResources
import Carousel from "./Components/Pages/HomePage/Carousel/Carousel.jsx";                                        // Imports the Carousel component as variable Carousel
import News from "./Components/Pages/HomePage/Featured/Featured.jsx"                                   // Imports the News component as varaible News
import QuickLinks from "./Components/Pages/HomePage/QuickLinks/QuickLinks.jsx";                              // Imports the Quicklinks componet as variable QuickLinks
import Footer from "./Components/RepeatedComponents/Footer/Footer.jsx";                                          // Imports footer component as variable Footer
import Video from "./Components/Pages/HomePage/Video/Video.jsx";                      // Imports the video component as variable Video       
import AboutSection from "./Components/Pages/HomePage/IntroCTA/IntroCTA.jsx";
import Contact from "./Components/Pages/HomePage/ContactUs/ContactUs.jsx";   
import Intro from "./Components/Pages/AboutPage/Intro/Intro.jsx";
import Team from "./Components/Pages/AboutPage/MeetTeam/MeetTeam.jsx";
import Why from "./Components/Pages/AboutPage/OurMission/OurMission.jsx";
import RSFexample from "./Components/Pages/FocusAreasPage/RSF/RSFexample.jsx";
import RSFHeader from "./Components/Pages/FocusAreasPage/RSF/RSFHeader.jsx"
import AboutCTA from "./Components/Pages/HomePage/CTAs/AboutCTA.jsx";
import CaseStudyCTA from "./Components/Pages/HomePage/CTAs/CaseStudyCTA.jsx";
import ContactCTA from "./Components/Pages/HomePage/CTAs/ContactCTA.jsx";
import CordHubCTA from "./Components/Pages/HomePage/CTAs/CordHubCTA.jsx";
import FocusAreaCTA from "./Components/Pages/HomePage/CTAs/FocusAreaCTA.jsx";
import NavPanels from "./Components/Pages/HomePage/NavPanels/NavPanels.jsx";
import AboutContent from "./Components/Pages/AboutPage/Content/AboutContent.jsx";
import TeamIntro from "./Components/Pages/AboutPage/MeetTeam/TeamIntro.jsx";
import HRW from "./Components/Pages/HomePage/HowRecovery/HRW.jsx";
import UnderConstruction from "./Components/RepeatedComponents/UnderConstruction/UnderConstruction.jsx";
import NavShowcase from "./Components/Pages/HomePage/NavShowcase/NavShowcase.jsx";
import Approach from "./Components/Pages/AboutPage/OurApproach/Approach.jsx";
import NCCaseHero from "./Components/Pages/CaseStudiesPage/NorthCarolina/HeroSection/NCHeroSection.jsx";
import NCCaseRecovery from "./Components/Pages/CaseStudiesPage/NorthCarolina/RecoveryPortfolio/NCRecoveryPortfolio.jsx";
import NCCaseImpact from "./Components/Pages/CaseStudiesPage/NorthCarolina/ImpactSection/NCImpactSection.jsx";
import ScrollToTop from "./Components/RepeatedComponents/ScrollToTop/ScrollToTop.jsx";
import Chub from "./Components/Pages/AboutPage/CHub/CHub.jsx";
import CHubCapabilities from "./Components/Pages/AboutPage/CHub/CHubCapabilities.jsx";
import CHWork from "./Components/Pages/AboutPage/OurApproach/CHWorks.jsx";
import CC from "./Components/Pages/CrisisCommunicationPage/CC.jsx";
import FAT from "./Components/Pages/HomePage/FocusAreasTeaser/FAT.jsx";
import EPHero from "./Components/Pages/CaseStudiesPage/EastPalestine/HeroSection/EPHeroSection.jsx";
import EPImpact from "./Components/Pages/CaseStudiesPage/EastPalestine/ImpactSection/EPImpactSection.jsx";
import DebrisManagement from "./Components/Pages/FocusAreasPage/DebrisMan/Debris.jsx";
import DWHero from "./Components/Pages/CaseStudiesPage/DeepWaterHorizon/HeroSection/DWHeroSection.jsx";
import DWImpact from "./Components/Pages/CaseStudiesPage/DeepWaterHorizon/ImpactSection/DWImpactSection.jsx";
import WildFire from "./Components/Pages/FocusAreasPage/WildFire/WildFire.jsx";

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
      <Route path="/" element={<><AboutSection /><HRW /> <NavPanels /><FAT /><NavShowcase /></>} />  {/* This is a route that displays information on the home page only */}
        {/* Sets up route for the login button */}
        <Route path="/contact" element={<><Contact /></>} />
        <Route path="/about/AboutUs" element={<><Intro /><Why />  <Chub /> <CHubCapabilities /> </>} />
        <Route path="/about/ourApproach" element={<> <CHWork /> </>} />
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