import React from "react";

const Treemap = ({ itemsScr }) => {
  return (
    <div className="mb-2 mr-2">
      <img
        src={itemsScr}
        alt="Screenshot"
        className="w-[57px] h-[100px] border border-[#f1f1f1]"
      />
    </div>
  );
};

export default Treemap;
