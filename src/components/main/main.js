import React from 'react'
import "./main.css"
import About from './about/about'
import Experiences from './experience/experiences'
import Testimonials from './testimonials/testimonials'
import Educations from './education/educations'
import GetInTouch from './get-in-touch/get-in-touch'

const Main = () => {
  return (
    <div className="main-content pull-right">
        <About/>
        <Experiences/>
        <Educations/>
        <Testimonials/>
        <GetInTouch/>
    </div>
  )
}

export default Main;