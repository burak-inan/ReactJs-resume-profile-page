import React from 'react'
import educations from "./educations.json"
import SectionHeader from '../section-header/section-header'
import Experience from '../experience/experience'

const Educations = () => {
  return (
    <section id="education" className="resume">
    <SectionHeader title = "Educations" isDownloadResume={false} />

    <div className="row">
      {educations.map((exp, i) => (
        <div key={i} className="col-md-12 col-sm-12 col-xs-12">
          <Experience {...exp} key={`Education ${i}`} />
        </div>
      ))}
    </div>
  </section>
  )
}

export default Educations