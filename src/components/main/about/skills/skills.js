import React from "react";
import Skill from "./skill/skill";
import "./skills.css";
import skills from "./skills.json";

const Skills = () => {
  return (
    <div className="skills">

      <div className="row">

        {
        skills.map((s, i) => 
          <div key={`Skill ${i}`} className="col-md-6 col-sm-6 col-xs-12 item">
            <Skill skill={s.skill} value={s.value} />
          </div>
        )
        }
      </div>
    </div>
  );
};

export default Skills;
