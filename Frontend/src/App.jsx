import { Route, Routes } from "react-router-dom";                                             // Imports the Route and Routes from the react-router-dom library
import "./App.css";                                                                           // Imports the App.css file 
import Navbar from  "./Components/Navbar/Navbar";                                             // Imports the Navbar component as variable Navbar
import ExternalResources from "./Components/Home/RedirectButtons/RedirectButtons.jsx";             // Imports the RedirectButtons componenent as variable ExternalResources
import Carousel from "./Components/Home/Carousel/Carousel.jsx";                                        // Imports the Carousel component as variable Carousel
import Login from "./Components/Pages/Login"; 
import Signup from "./Components/Pages/Signup";                                             // Imports the Login component as variable Login
import News from "./Components/Home/NewsSection/NewsSection.jsx"                                   // Imports the News component as varaible News
import QuickLinks from "./Components/Home/quickLinks/QuickLinks.jsx";                              // Imports the Quicklinks componet as variable QuickLinks
import Footer from "./Components/Footer/Footer.jsx";                                          // Imports footer component as variable Footer
import BackgroundLayout from "./Components/UnderConstruction/BackgroundLayout.jsx";           // Imports background layout component as variable BackgroundLayout
import { navRoutes } from "./Components/Navbar/navRoutes.jsx";                                // Imports navRoutes as variable navRoutes
import Video from "./Components/Home/Video/Video.jsx";                      // Imports the video component as variable Video       
import AboutSection from "./Components/AboutSection/AboutSection.jsx";
import Contact from "./Components/Pages/Contact.jsx";   
import Intro from "./Components/About/Intro/Intro.jsx";
import Team from "./Components/About/Team/team.jsx";
import Why from "./Components/About/Why/Why.jsx";
import CaseStudies from "./Components/CaseStudies/caseStudies.jsx";

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
      <Navbar />                                                           {/* Displays the navbar component */}
      
      {/* Wrapper container for everything else on the page styled by the main-content class */}
      <div>
      {/* This is another wrapper container for all defined Routes (Put all the Route tags here. Your telling the program what to display when the url equals the path) */}
      <Routes>
        <Route path="/" element = {<><Video /><AboutSection /><div className="position-NextTo"><News /><QuickLinks /></div><Footer /></>} />   {/* This is a route that displays information on the home page only */}
        {/* Sets up route for the login button */}
        <Route path="/login" element={<><Login /></>} />
        <Route path="/Signup" element={<><Signup /></>} />            {/* If the URL shows /login display the login page if /signup display sign up page */}
        <Route path="/contact" element={<><Contact /></>} />
        <Route path="/about" element={<><Intro/><Why /><Team /><Footer /></>} /> 
        <Route path="/caseStudies" element={<><CaseStudies /><Footer /></>} />
      </Routes>
      </div>
    </div>
    
  );
} 
export default App;         // Export the whole App component for later use within the main.jsx file which is the file that displays everything on the page for you to see!