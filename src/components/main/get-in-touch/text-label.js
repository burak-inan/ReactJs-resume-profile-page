import React from "react";

const TextLabel = ({ type, name, id, placeholder, required }) => {
  return (
    <div className="col-md-6 col-sm-6 col-xs-12">
      <div className="form-group">
        <input
          type={type}
          className="form-control"
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </div>
  );
};

export default TextLabel;
