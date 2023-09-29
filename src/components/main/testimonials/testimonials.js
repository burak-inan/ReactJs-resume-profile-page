import React from "react";
import "./testimonial.css";
import testimonials from "./testimonial.json";
import Testimonial from "./testimonial";
import SectionHeader from "../section-header/section-header";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <SectionHeader title="Testimonials" isDownloadResume={false} />

      <div className="testimonial-carousel">
        {testimonials.map((test, i) => (
          <div key={i} className="item">
            <Testimonial {...test} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
