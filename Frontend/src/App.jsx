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
import CaseStudies from "./Components/Pages/CaseStudiesPage/caseStudies.jsx";
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
import CaseHero from "./Components/Pages/CaseStudiesPage/NorthCarolina/HeroSection/HeroSection.jsx";
import CaseRecovery from "./Components/Pages/CaseStudiesPage/NorthCarolina/RecoveryPortfolio/RecoveryPortfolio.jsx";
import CaseImpact from "./Components/Pages/CaseStudiesPage/NorthCarolina/ImpactSection/ImpactSection.jsx";
import ScrollToTop from "./Components/RepeatedComponents/ScrollToTop/ScrollToTop.jsx";
import CHub from "./Components/Pages/Platform/CoordinationHub/CHub.jsx";
import CHubCapabilities from "./Components/Pages/Platform/CoordinationHub/CHubCapabilities.jsx";
import CHWork from "./Components/Pages/Platform/CoordinationHub/CHWorks.jsx"
import CC from "./Components/Pages/CrisisCommunicationPage/CC.jsx"
function App() {
  return (
     
    // Fetch data when the component loads from mongo db database
  /*useEffect(() => {
    fetch("http://localhost:5000/api/disasters")
      .then((res) => res.json())
      .then((data) => setDisasters(data))
      .catch((err) => console.error("Error fetching disasters:", err));
  }, []); */
    // Wrapper for all the information on the App.jsx file styled by the app-container class located in the App.css file (Everything within here is displayed on the main page through the main.jsx file)
    <div>
      <ScrollToTop />
      <Navbar />                                                           {/* Displays the navbar component */} 
      {/* Wrapper container for everything else on the page styled by the main-content class */}
      <div>
      {/* This is another wrapper container for all defined Routes (Put all the Route tags here. Your telling the program what to display when the url equals the path) */}
      <Routes>
      <Route path="/" element={<><AboutSection /><HRW /> <NavPanels /> <NavShowcase /></>} />  {/* This is a route that displays information on the home page only */}
        {/* Sets up route for the login button */}
        <Route path="/contact" element={<><Contact /></>} />
        <Route path="/about/AboutUs" element={<><Intro /><Why /></>} />
        <Route path="/about/ourApproach" element={<><Approach /></>} />
        <Route path="/about/Team" element={<><TeamIntro/><Team /></>} />
        <Route path="/caseStudies" element={<><CaseStudies /></>} />
        <Route path="/focusArea/interagencyRecovery" element={<><RSFHeader/><RSFexample/> </>}/>
        <Route path="/caseStudies/northCarolina" element={<><CaseHero /><CaseRecovery /><CaseImpact /></>} />
        <Route path="/focusArea/debrisManagement" element={<><UnderConstruction /></>} />
        <Route path="/focusArea/mitigation" element={<><UnderConstruction /></>} />
        <Route path="/focusArea/crisisCommunication" element={<><CC /></>} />
        <Route path="/focusArea/wildfire" element={<><UnderConstruction /></>} />
        <Route path="/platform/coordinationHubOverview" element={<><CHub/><CHubCapabilities/> <CHWork /> </>} />
      </Routes>
      </div>
      <Footer />
    </div>
    
  );
} 
export default App;         // Export the whole App component for later use within the main.jsx file which is the file that displays everything on the page for you to see!