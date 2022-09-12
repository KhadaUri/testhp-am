import React from "react";
import "./../scss/components/loader.scss"

const Loader = () => {
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;