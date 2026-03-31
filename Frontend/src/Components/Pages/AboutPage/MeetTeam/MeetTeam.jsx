import "./MeetTeam.css";
import { useState, useRef, useLayoutEffect } from "react";
import Dawn from"../../../../assets/Dawn.jpg";
import Jim from "../../../../assets/Jim.jpeg";

const teamMembers = [
  { name: "James Mcpherson", position: "President and CEO", blurb: `James McPherson is widely recognized as one of the most experienced and impactful emergency managers in the federal government. A proven leader in crisis, he held two of FEMA's most critical and senior roles: Federal Coordinating Officer (FCO) and the agency's most senior Federal Disaster Recovery Coordinator (FDRC).\n
    In these positions, he was responsible for orchestrating the entire federal disaster response and guiding long-term community recovery, bringing unparalleled operational depth and strategic vision to the nation's most complex emergencies.\n
    His foundational expertise was forged during a distinguished career in the U.S. Coast Guard, where he operated at the tip of the spear in some of America's most defining crises. His hands-on experience includes the response to the TWA Flight 800 disaster, serving at Coast Guard Headquarters in Washington, D.C., during the September 11th attacks, and leading frontline operations for the Deepwater Horizon oil spill and Hurricane Katrina.\n
    This unique background provides him with an unmatched perspective on the full spectrum of disaster management—from immediate, lifesaving response to years-long environmental and economic recovery.\n
    McPherson is universally regarded as an outcome-driven, results-oriented leader. He is known for cutting through bureaucracy to solve problems, build cohesive teams, and deliver tangible impacts for disaster survivors. His career is a testament to moving decisively from planning to execution, consistently translating federal resources into on-the-ground recovery.\n
    For his decisive action and strategic command in the face of chaos, he is considered one of the premier emergency management authorities within the federal government. He last assignment was leading the federal Interagency Recovery Coordination team bringing over $5B in federal recovery to North Carolina after Helene- worst disaster in state history.`, img: Jim, id: 1, marginTop:'-100px' },
  { name: "Dawn Curtis Hanley", position: "Principal and Managing Partner", blurb: `Dawn Curtis Hanley is a strategic marketing and communications executive known for translating complex initiatives into clear narratives, aligned partnerships, and actionable programs. With a career spanning the public, private, and nonprofit sectors, she brings a distinctive ability to connect stakeholders, shape strategy, and mobilize diverse organizations around shared outcomes—an essential capability in the multi-sector environment of disaster recovery.\n
    Hanley has worked at the intersection of federal coordination, communications strategy, and operational support, including two years consulting for FEMA as Strategic Communications Advisor to the Region I COVID-19 Long-Term Economic Recovery Task Force. In that role, she developed executive briefings, weekly situational updates, and cross-state recovery summaries for all six New England states; supported interagency coordination through meeting design, agendas, and after-action reporting; and helped translate evolving federal policy into actionable guidance for regional leadership and partners.\n
    Beyond her federal work, she is an accomplished experiential strategist and brand leader with deep experience designing and executing complex, high-visibility initiatives across nonprofit, institutional, and corporate environments. Her work has supported organizations such as the The Boston Globe, The Boston Foundation, Autism Speaks, BioMed Realty, Beth Israel Deaconess Medical Center, MIT Media Lab, Harvard Business School, among others. She is recognized for building coalitions, shaping public-facing strategy, and delivering programs that align mission, communications, and execution.\n
    Her career reflects a consistent focus on turning ideas into coordinated action—bridging strategy and implementation, aligning stakeholders, and ensuring that complex efforts move from concept to measurable impact. At DisasterReady, she leads strategic development, communications, and partnership integration, helping translate interagency recovery coordination into a scalable, operational model for states and communities.`, img: Dawn, id: 2, marginTop: '0px' },
];

export default function TeamSection() {
  const [expanded, setExpanded] = useState({});
  const memberLeftRefs = useRef({});
  const blurbRefs = useRef({});

  // Logic for the animation for the read more and read less buttons
  useLayoutEffect(() => {
    const heights = {};
    Object.entries(memberLeftRefs.current).forEach(([id, el]) => {
      if (el && blurbRefs.current[id]){
        blurbRefs.current[id].style.maxHeight = el.offsetHeight + 'px';
      }
    });
  }, []);

  // Performing the animations
  const toggleExpand = (id) => {
    const isExpanded = expanded[id];
    const el = blurbRefs.current[id];
    const leftEl = memberLeftRefs.current[id];
    if (isExpanded) {
      el.style.transition = 'none';
      el.style.maxHeight = el.scrollHeight + 'px';
      setTimeout(() => {
        el.style.transition = '';
        el.style.maxHeight = leftEl.offsetHeight + 'px';
      }, 10);
    } else {
      el.style.maxHeight = el.scrollHeight + 'px';
    }
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };
  
  return (
    <section className="mtt-section">
      <h2>
        Meet The Team
      </h2>

      <div className="team-list">
        {teamMembers.map((member, index) => (
          <div key={member.id} className={`team-member ${index % 2 === 1 ? 'reverse' : ''}`}>
            <div className="member-left" ref={el => memberLeftRefs.current[member.id] = el}>
              <div className="photo-wrapper">
                <img src={member.img} alt={member.name} className="photo" style={{ marginTop: member.marginTop }} />
              </div>
              <p className="name">{member.name}</p>
              <p className="position">{member.position}</p>
            </div>
            <div className={`member-right ${index % 2 === 1 ? 'reverse' : ''}`}>
              <p className={`blurb ${expanded[member.id] ? 'expanded' : 'collapsed'}`}
                 ref={el => blurbRefs.current[member.id] = el}>
                {member.blurb}
              </p>
              <button className="read-more-btn" onClick={() => toggleExpand(member.id)}>
                {expanded[member.id] ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}