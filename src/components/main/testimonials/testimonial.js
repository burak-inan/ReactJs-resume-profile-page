import React from "react";

const Testimonial = ({imgSource, author, desc}) => {
  return (
    <div className="row">
      <div className="col-md-2 col-sm-2 hidden-xs">
        <div className="thumb">
          <img
            src={imgSource}
            alt="testimonial-customer"
          />
        </div>
      </div>
      <div className="text col-md-10 col-sm-10 col-xs-12">
        <p>{desc}</p>
        <span className="author">- {author} -</span>
      </div>
    </div>
  );
};

export default Testimonial;
