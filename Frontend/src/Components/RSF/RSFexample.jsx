import RSF from "./RSF.jsx";
import femaLogo from "../../assets/fema.png"
import DHSLogo from "../../assets/DHS.png"
import SBALogo from "../../assets/SBA.png"
import USDARDLogo from "../../assets/USDARD.png"
import USACELogo from "../../assets/USACE.png"
import DOCLogo from "../../assets/DOC.png"
import DOLLogo from "../../assets/DOL.png"
import USDALogo from "../../assets/USDA.png"
import HUDLogo from "../../assets/HUD.png"
import DOTLogo from "../../assets/DOT.png"
import TreasuryLogo from "../../assets/Treasury.png"
import HHSLogo from "../../assets/HHS.png"
import VALogo from "../../assets/VA.png"
import DELogo from "../../assets/DE.png"
import SSALogo from "../../assets/SSA.png"
import CNCSLogo from "../../assets/CNCS.png"
import DOELogo from "../../assets/DOE.png"
import CISALogo from "../../assets/CISA.png"
import EPALogo from "../../assets/EPA.png"
import FCCLogo from "../../assets/FCC.png"
import DOILogo from "../../assets/DOI.png"
import NOAALogo from "../../assets/NOAA.png"


function RSFexample() {
  const rsfData = [
    {
      title: "Community Assistance",
      mainResource: {
        title: "Federal Emergency Manament Assistance (FEMA)",
        description: "Supports overall recovery coordination and community capacity",
        image: femaLogo,
        link: "https://www.fema.gov"
      },
      agencies: [
        { name: "Department of Homeland Security (DHS)", image: DHSLogo, link: "https://www.dhs.gov/" },
        { name: "U.S. Small Business Administration (SBA)", image: SBALogo , link: "https://www.sba.gov/" },
        { name: "USDA Rural Development", image: USDARDLogo , link: "https://www.rd.usda.gov/" },
        { name: "U.S. Army Corps of Engineers (USACE)", image: USACELogo , link: "https://www.usace.army.mil/" }
      ]
    },
    {
      title: "Economic Recovery",
      mainResource: {
        title: "U.S. Department of Commerce (DOC)",
        description: "Supports business recovery, workforce stabilization, and economic revitalization.",
        image: DOCLogo,
        link: "https://www.commerce.gov/"
      },
      agencies: [
        { name: "Department of Labor (DOL)", image: DOLLogo, link: "https://www.dol.gov/" },
        { name: "U.S. Small Business Administration (SBA)", image: SBALogo , link: "https://www.sba.gov/" },
        { name: "U.S. Department of Agriculture (USDA)", image: USDALogo, link: "https://www.usda.gov/"},
        { name: "U.S. Department of Housing and Urban Development", image: HUDLogo, link:"https://www.hud.gov/" },
        { name: "U.S. Department of Transportation", image: DOTLogo, link:"https://www.transportation.gov/" },
        { name: "The Department of the Treasury", image: TreasuryLogo, link:"https://home.treasury.gov/" },
        { name: "Department of Homeland Security (DHS)", image: DHSLogo, link: "https://www.dhs.gov/" },
        { name: "Federal Emergency Manament Assistance (FEMA)", image: femaLogo, link: "https://www.fema.gov/" }
      ]
    },
      {
      title: "Health, Education & Human Services",
      mainResource: {
        title: "U.S. Department of Health & Human Services (HHS)",
        description: "Supports public health systems, social services, education continuity, and human services recovery.",
        image: HHSLogo,
        link: "https://www.hhs.gov/"
      },
      agencies: [
        { name: "Department of Homeland Security (DHS)", image: DHSLogo, link: "https://www.dhs.gov/" },
        { name: "Federal Emergency Manament Assistance (FEMA)", image: femaLogo, link: "https://www.fema.gov/" },
        { name: "U.S. Department of Agriculture (USDA)", image: USDALogo, link: "https://www.usda.gov/" },
        { name: "U.S. Department of Veteran Affairs", image: VALogo, link: "https://www.va.gov/" },
        { name: "U.S. Department of Education", image: DELogo, link: "https://www.ed.gov/" },
        { name: "U.S. Department of Housing and Urban Development", image: HUDLogo, link:"https://www.hud.gov/" },
        { name: "U.S. Department of Labor (DOL)", image: DOLLogo, link: "https://www.dol.gov/"},
        { name: "Social Security Administration (SSA)", image: SSALogo, link: "https://www.ssa.gov/"},
        { name: "Corporation for National and Community Service (CNCS)", image: CNCSLogo, link: "https://www.americorps.gov/"}    
       ]
    },
      {
      title: "Housing",
      mainResource: {
        title: "U.S. Department of Housing & Urban Development (HUD)",
        description: "Supports temporary and long-term housing solutions.",
        image: HUDLogo,
        link: "https://www.hud.gov/"
      },
      agencies: [
        { name: "U.S. Department of Agriculture (USDA)", image: USDALogo, link: "https://www.usda.gov/" },
        { name: "Department of Homeland Security (DHS)", image: DHSLogo, link: "https://www.dhs.gov/" },
        { name: "Federal Emergency Manament Assistance (FEMA)", image: femaLogo, link: "https://www.fema.gov/" },
        { name: "U.S. Department of Veteran Affairs", image: VALogo, link: "https://www.va.gov/" },
        { name: "U.S. Small Business Administration (SBA)", image: SBALogo , link: "https://www.sba.gov/" }    
       ]
    },
          {
      title: "Infrastructure Systems",
      mainResource: {
        title: "U.S. Army Corps of Engineers (USACE)",
        description: "Supports restoration of critical infrastructure systems.",
        image: USACELogo,
        link: "https://www.usace.gov/"
      },
      agencies: [
        { name: "U.S. Department of Transportation (DOT)", image: DOTLogo, link:"https://www.transportation.gov/"},
        { name: "U.S. Department of Energy (DOE)", image: DOELogo, link:"https://www.doe.gov/"},
        { name: "Department of Homeland Security (DHS)", image: DHSLogo, link: "https://www.dhs.gov/" },
        { name: "Cybersecurity & Infrastructure Security Agency (CISA)", image: CISALogo, link:"https://www.cisa.gov/"},
        { name: "Federal Emergency Manament Assistance (FEMA)", image: femaLogo, link: "https://www.fema.gov/" },
        { name: "U.S. Environmental Protection Agency (EPA)", image: EPALogo, link: "https://www.epa.gov/"},
        { name: "Federal Communications Commission (FCC)", image: FCCLogo, link: "https://www.fcc.gov/"},
        { name: "U.S. Department of Agriculture (USDA)", image: USDALogo, link: "https://www.usda.gov/" }
     
       ]
    },
          {
      title: "Natural & Cultural Resources",
      mainResource: {
        title: "U.S. Department of the Interior (DOI)",
        description: "Supports environmental recovery, historic preservation, and cultural resource protection.",
        image: DOILogo,
        link: "https://www.doi.gov/"
      },
      agencies: [
        { name: "U.S. Department of Commerce (DOC)", image: DOCLogo, link:"https://www.doc.gov/"},
        { name: "National Oceanic and Atmospheric Administration", image: NOAALogo, link:"https://www.noaa.gov/"},
        { name: "Department of Homeland Security (DHS)", image: DHSLogo, link: "https://www.dhs.gov/" },
        { name: "Federal Emergency Manament Assistance (FEMA)", image: femaLogo, link: "https://www.fema.gov/" },
        { name: "U.S. Environmental Protection Agency (EPA)", image: EPALogo, link: "https://www.epa.gov/"},
        { name: "U.S. Department of Health & Human Services (HHS)", image: HHSLogo, link: "https://www.hhs.gov/"},
        { name: "U.S. Department of Agriculture (USDA)", image: USDALogo, link: "https://www.usda.gov/" },
        { name: "U.S. Army Corps of Engineers (USACE)", image: USACELogo , link: "https://www.usace.army.mil/"}
     
       ]
    }


     
     


  ];


  return (
    <div className="rsf-grid">
      {rsfData.map((rsf, index) => (
        <RSF
          key={index}
          title={rsf.title}
          mainResource={rsf.mainResource}
          agencies={rsf.agencies}
        />
      ))}
    </div>
  );
}


export default RSFexample;
