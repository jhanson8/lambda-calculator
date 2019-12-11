/* jshint esversion: 6 */
import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="special_button">
        {/* since props is an object we use the . notation */}
        {props.button}
      </button>
    </>
  );
};

export default SpecialButton;
