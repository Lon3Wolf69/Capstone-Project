import "./team.css";

const teamMembers = [
  { name: "First Name Last Name", position: "Position", blurb: "Blurb goes over here that introduces team members", id: 1 },
  { name: "First Name Last Name", position: "Position", blurb: "Blurb goes over here that introduces team members", id: 2 },
  { name: "First Name Last Name", position: "Position", blurb: "Blurb goes over here that introduces team members", id: 3 },
  { name: "First Name Last Name", position: "Position", blurb: "Blurb goes over here that introduces team members", id: 4 },
];

export default function TeamSection() {
  return (
    <section className="section">
      <h2 className="heading">
        Meet the <em>team</em>
      </h2>

      <div className="grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="card">
            <div className="photo" />
            <p className="name">{member.name}</p>
            <p className="position">{member.position}</p>
            <p className="blurb">{member.blurb}</p>
          </div>
        ))}
      </div>
    </section>
  );
}