// src/components/Team.jsx
import React from "react";
import "./team.css";
import anshitaImg from "../assests/anshita.png";
import sanyamImg from "../assests/sanyam.png";

const members = [
  {
    name: "Anshita Jindal",
    role: "Co‑Founder",
    image: anshitaImg,
  },
  {
    name: "Sanyam Bhayana",
    role: "Co‑Founder",
    image: sanyamImg,
  },
];

const Team = () => {
  return (
    <section className="mb-team">
      <h2 className="mb-team-title">MEET THE TEAM BEHIND OUR SUCCESS</h2>

      <div className="mb-team-cards">
        {members.map((m) => (
          <article className="mb-team-card" style={{ cursor: "pointer" }} key={m.name}>
            <div className="mb-team-photo-wrap">
              <img src={m.image} alt={m.name} className="mb-team-photo" />
            </div>

            <h3 className="mb-team-name">{m.name}</h3>
            <p className="mb-team-role">{m.role}</p>

            <div className="mb-team-social">
              <span className="mb-team-dot" />
              <span className="mb-team-dot" />
              <span className="mb-team-dot" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Team;
