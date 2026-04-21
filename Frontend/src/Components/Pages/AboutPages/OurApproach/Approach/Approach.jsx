import "./Approach.css";
import imageSrc from "../../../../../assets/AboutUsDiagram.png";

export default function OurApproach() {
  return (
    <div className="ourapp-container">

      <div className="ourapp-content-row">

        {/* LEFT COLUMN */}
        <div className="ourapp-left-col">

          <h2 className="ourapp-title">Our Approach</h2>

          <div className="ourapp-leftSubtitle">
            Disaster recovery is not a planning problem, it is a coordination problem.
          </div>

          <div className="ourapp-paragraph">
            Our approach focuses on aligning recovery
            priorities with agencies, funding programs,
            and partners required to execute them. Rather
            than introducing new processes, we bring
            structure to how recovery already works.
          </div>

          <div className="ourapp-paragraph">
            We focus on where recovery efforts break
            down between agencies, funding sources,
            and execution. We help close those gaps directly.
          </div>

        </div>

        {/* RIGHT COLUMN (IMAGE) */}
        <div className="ourapp-right-col">
          <img
            className="ourapp-image"
            src={imageSrc}
            alt="Our approach visual"
          />
        </div>

      </div>

    </div>
  );
}