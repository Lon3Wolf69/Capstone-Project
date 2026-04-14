import "./Approach.css";

export default function OurApproach() {
  return (
    <div className="ourapp-container">

      <h2 className="ourapp-title">Our Approach</h2>

      {/* SUBTITLE ROW */}
      <div className="ourapp-subtitles">
        <div className="ourapp-leftSubtitle">Aligning</div>
        <div></div>
        <div className="ourapp-rightSubtitle">So That You</div>
      </div>

      {/* ROW 1 */}
      <div className="ourapp-row">
        <div className="ourapp-left">Agencies</div>

        <div className="ourapp-center ourapp-slide-in ourapp-delay-1">
          Disaster recovery is not a planning problem, it is a coordination problem.
        </div>

        <div className="ourapp-right">Recover Faster</div>
      </div>

      {/* ROW 2 */}
      <div className="ourapp-row">
        <div className="ourapp-left">Funding Programs</div>

        <div className="ourapp-center ourapp-slide-in ourapp-delay-2">
          Our approach focuses on aligning recovery priorities with agencies, funding programs,
          and partners required to execute them. Rather than introducing new processes, we bring
          structure to how recovery already works, connecting systems that are often fragmented
          and helping them operate as a whole.
        </div>

        <div className="ourapp-right">With Less Risk</div>
      </div>

      {/* ROW 3 */}
      <div className="ourapp-row">
        <div className="ourapp-left">& Partners</div>

        <div className="ourapp-center ourapp-slide-in ourapp-delay-3">
          We focus on where recovery efforts break down: between agencies, between funding sources,
          and between planning and execution. By addressing those gaps directly, we help recovery
          move faster, with less risk and fewer resources left unused.
        </div>

        <div className="ourapp-right">& Less Waste</div>
      </div>

    </div>
  );
}