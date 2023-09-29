import React from "react";

const Experience = ({school,company, title, period, desc ,dateOfGraduation}) => {

  return (
    <div className="resume-item">
      <h2>{company??school}</h2> 
      <span> {title} | {period??dateOfGraduation}</span>
      <p>
        {desc}
      </p>
    </div>
  );
};

export default Experience;