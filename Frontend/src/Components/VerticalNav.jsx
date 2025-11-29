import React, { useState } from "react";
import "./VerticalNav.css"; // ← ADD THIS

function VerticalNav() {
  const [open, setOpen] = useState(null);

  const sections = [
    {
      title: "Federal Preparedness & Weather Intelligence",
      items: [
        { label: "NOAA", url: "https://www.noaa.gov/"},
        { label: "FEMA", url: "https://www.fema.gov/"},
        { label: "National Hurricane Center", url: "https://www.nhc.noaa.gov/"},
        { label: "National Weather Service", url: "https://www.weather.gov"},
    ],
    },
    {
      title: "Volunteer Organizations Active in Disaster",
      items: [
        { label: "American Red Cross", url: "https://www.redcross.org" },
        { label: "Salvation Army", url: "https://www.salvationarmyusa.org"},
        { label: "World Central Kitchen", url: "https://wck.org"},
        { label: "Mennonite Disaster Service", url: "https://mds.org"},
        { label: "Team Rubicon", url: "https://teamrubiconusa.org"},
     ],
    },
    {
      title: "National Hazard Monitoring & Prediction Centers",
      items: [
        { label: "National Water Center", url: "https://water.noaa.gov/"},
        { label: "Storm Prediction Center", url: "https://www.spc.noaa.gov/"},
        { label: "Earthquake Hazard Program", url: "https://www.usgs.gov/programs/earthquake-hazards"},
        { label: "National Interagency Fire Center", url: "https://www.nifc.gov/"},
        { label: "Tsunami Warning System", url: "https://www.tsunami.gov/"},
        { label: "FEMA Emergency Alerts", url: "https://www.fema.gov/emergency-managers/practitioners/integrated-public-alert-warning-system/public/wireless-emergency-alerts"},
      ],
    },
  ];

  return (
    <div className="vertical-nav-container">
      {sections.map((section, index) => (
        <div key={index} className="nav-section">
          <h3 className="section-title">{section.title}</h3>

            <div className="nav-links">
              {section.items.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  {item.label}
                </a>
              ))}
            </div>
        </div>
      ))}
    </div>
  );
}

export default VerticalNav;
