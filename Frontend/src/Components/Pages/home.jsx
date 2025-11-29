import React from 'react';
import RedirectButton from "../RedirectButton";
import "../RedirectButton.css";


function Home() {
  return (
    //Additional Resources
  <div className="resources-container">
    <div className ="position">
      <h2>External Resources</h2>
    
      <div className="resources-grid">
            <div className="resources-column">
                    <RedirectButton label="FEMA" to="https://www.fema.gov/" />
                    <RedirectButton label="Fire Adapted" to="https://fireadapted.org/" />
                    <RedirectButton label="Fire Wise USA" to="https://www.nfpa.org/Education-and-Research/Wildfire/Firewise-USA" />
                    <RedirectButton label="National Interagency Fire Center" to="https://www.nifc.gov/" />
                    <RedirectButton label="Forest Service" to="https://www.fs.usda.gov/" />
                    <RedirectButton label="Wild Fire Today" to="https://wildfiretoday.com/" />
                    <RedirectButton label="Red Cross" to="https://www.redcross.org/" />
                    <RedirectButton label="North Carolina State Fire" to="https://climate.ncsu.edu/fire/" />
                    <RedirectButton label="North Carolina Forest Service" to="https://www.ncagr.gov/divisions/nc-forest-service" />
                    <RedirectButton label="Smokey Bear" to="https://smokeybear.com/" />
                    <RedirectButton label="Wild Fire Ready Set Go" to="https://www.wildlandfirersg.org/s/?language=en_US" />
                    <RedirectButton label="Hurrevac" to="https://www.hurrevac.com/" />
                    <RedirectButton label="FEMA Resource Assistance" to="https://www.fema.gov/emergency-managers/national-preparedness/frameworks/mitigation/mitflg/recovery-resilience-task-force" />
                    <RedirectButton label="FEMA RAPT" to="https://www.fema.gov/emergency-managers/practitioners/resilience-analysis-and-planning-tool" />
                    <RedirectButton label="FEMA Flood Map Service Center" to="https://msc.fema.gov/portal/home" />
                    </div>
            <div className="resources-column">
                    <RedirectButton label="International Association of Emergency Managers" to="https://www.iaem.org/" />
                    <RedirectButton label="Crisis 24" to="https://www.crisis24.com/" />
                    <RedirectButton label="GardaWorld" to="https://garda-federal.com/" />
                    <RedirectButton label="Global Disaster Alert and Coordination System" to="https://gdacs.org/" />
                    <RedirectButton label="Emergency Management Solutions" to="https://www.emergencymanagementsolutions.com/" />
                    <RedirectButton label="IEM" to="https://iem.com/" />
                    <RedirectButton label="Witt O'Brien's" to="https://www.wittobriens.com/" />
                    <RedirectButton label="Everbridge" to="https://www.everbridge.com/" />
                    <RedirectButton label="Constant Associates" to="https://Constantassociates.com" />                        
                    <RedirectButton label="ARS Responds" to="https://www.arsresponds.com/" />
                    <RedirectButton label="All Hand Consulting" to="https://allhandsconsulting.com/" />
                    <RedirectButton label="Garner" to="https://Garner-es.com" />
                    <RedirectButton label="National Weather Service" to="https://www.weather.gov/" />
                    <RedirectButton label="National Weather Service Radar" to="https://radar.weather.gov/" />
                    <RedirectButton label="National Oceanic and Atmospheric Administration" to="https://www.noaa.gov/" />
                    </div>

            <div className="resources-column">
                    <RedirectButton label="Storm Surf" to="https://stormsurf.com/" />
                    <RedirectButton label="Storm Prediction Center" to="https://www.spc.noaa.gov/" />
                    <RedirectButton label="READY" to="https://www.ready.gov/" />
                    <RedirectButton label="Environmental Protection Agency" to="https://www.epa.gov/" />
                    <RedirectButton label="National Association of Counties" to="https://www.naco.org/" />
                    <RedirectButton label="Emergency Management Assistance Compact" to="https://emacweb.org/" />
                    <RedirectButton label="National Guard" to="https://www.nationalguard.mil/" />
                    <RedirectButton label="U.S. Fire Administration" to="https://www.usfa.fema.gov/" />
                    <RedirectButton label="SAMHSA" to="https://www.samhsa.gov/" />
                    <RedirectButton label="U.S. Department of Energy Emergency Response" to="https://www.energy.gov/ceser/emergency-response" />
                    <RedirectButton label="NASA Disaster Assistance" to="https://appliedsciences.nasa.gov/what-we-do/disasters" />
                    <RedirectButton label="National Centers for Environmental Information" to="https://www.ncei.noaa.gov/" />
                    <RedirectButton label="READY for Kids" to="https://www.ready.gov/kids" />
                    <RedirectButton label="American Bar Association" to="https://www.americanbar.org/groups/committees/disaster/" />     
                    </div>

              </div>   
            </div>
    </div>
    //end of additional resources
  );
}

export default Home;
