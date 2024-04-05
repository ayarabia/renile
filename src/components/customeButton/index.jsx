import React from "react";
import { Link } from "react-router-dom";
function CustomeButton(props) {
  return (
    <Link
      to={props.to}
      target={props.target}
      className={`px-3 block   py-[9px] rounded-xl shadow-3xl  font-semibold  text-center ${props.className}`}
    >
      {props.text}
    </Link>
  );
}
export default CustomeButton;