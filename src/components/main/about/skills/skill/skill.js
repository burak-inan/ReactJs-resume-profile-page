import React from "react";
import "../skills.css"

const Skill = ({skill, value}) => {
  return (
    <React.Fragment>
      <div className="skill-info clearfix">
        <h3 className="pull-left">{skill}</h3>
        <span className="pull-right">{value}%</span>
      </div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{width:`${value}%`}}
        ></div>
      </div>
    </React.Fragment>
  );
};

export default Skill;