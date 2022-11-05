import React from "react";
import spinner from "./assets/spinner.gif";

const Spinner = () => {
  return (
    <div className="w-6 h-6">
      <img src={spinner} alt="Loading" className="text-center mx-auto" />
    </div>
  );
};

export default Spinner;
