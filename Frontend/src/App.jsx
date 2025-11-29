import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from  "./Components/Navbar/Navbar";
import Disasters from "./Components/Pages/Disasters";
import Resources from "./Components/Pages/Resources";
import Response from "./Components/Pages/Response";
import Recovery from "./Components/Pages/Recovery";
import Home from "./Components/Pages/Home";
import Carousel from "./Components/Carousel/Carousel";
import Login from "./Components/Pages/Login"
import News from "./Components/NewsSection.jsx"
import VerticalNav from "./Components/VerticalNav.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <div className="main-content">
      <Routes>
        <Route path="/" element = {<><Carousel /><div className="content-layout"><News /><VerticalNav /></div><Home /></>} />
        <Route path="/disasters" element={<Disasters />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/response" element={<Response />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </div>

      <Footer />
    </div>
    
  );
} 
export default App;

