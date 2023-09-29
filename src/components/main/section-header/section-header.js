import React from "react";
import "./section-header.css"
import {FaDownload} from "react-icons/fa"

const SectionHeader = ({title, isDownloadResume}) => {
  return (
    <div className="section-header">
      <h2>{title}</h2>

      {
        isDownloadResume &&
        <a
        href="#"
        className="resume-download"
        data-toggle="tooltip"
        data-placement="bottom"
        title="Download"
      >
        <FaDownload/>
        {" "}Download Resume
      </a>
      }


    </div>
  );
};

export default SectionHeader;
