import "./Approach.css";
export default function OurApproach() {
  return (
    <div className="ourapp-container">
      <h2 className="ourapp-title">Our Approach</h2>

      <div className="ourapp-slide-in ourapp-delay-1 ourapp-first">
        <p>
          Disaster recovery is not a planning problem, it is a coordination problem.
        </p>
      </div>

      <div className="ourapp-slide-in ourapp-delay-2 ourapp-second">
        <p>
          Our approach focuses on aligning recovery priorities with the agencies, funding programs, 
          and partners required to execute them. Rather than introducing new processes, we bring 
          structure to how recovery already works, connecting systems that are often fragmented 
          and helping them operate as a whole.
        </p>
      </div>

      <div className="ourapp-slide-in ourapp-delay-3 ourapp-third">
        <p>
          We focus on where recovery efforts break down: between agencies, between funding sources, 
          and between planning and execution. By addressing those gaps directly, we help recovery 
          move faster, with less risk and fewer resources left unused.
        </p>
      </div>
    </div>
  );
}