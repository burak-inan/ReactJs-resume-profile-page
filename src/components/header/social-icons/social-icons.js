import React from "react";
import "./social-icons.css"
import {RiFacebookFill, RiTwitterXFill, RiDribbbleFill,RiBehanceFill , RiFlickrFill} from "react-icons/ri"

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <ul>
        <li>
          <a href="#">
            <RiFacebookFill/>
          </a>
        </li>
        <li>
          <a href="#">
            <RiTwitterXFill/>
          </a>
        </li>
        <li>
          <a href="#">
            <RiDribbbleFill/>
          </a>
        </li>
        <li>
          <a href="#">
            <RiBehanceFill/>
          </a>
        </li>
        <li>
          <a href="#">
            <RiFlickrFill/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
