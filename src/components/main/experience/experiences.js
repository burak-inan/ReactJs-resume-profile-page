import React from "react";
import SectionHeader from "../section-header/section-header";
import experiences from "./experience.json";
import Experience from "./experience";
import "./experience.css"

const Experiences = () => {
  return (
    <section id="experience" className="resume">
      <SectionHeader title = "Experiences" isDownloadResume={false} />

      <div className="row">
        {experiences.map((exp, i) => (
          <div key={`Experience ${i}`} className="col-md-12 col-sm-12 col-xs-12">
            <Experience {...exp} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
