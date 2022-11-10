import React from "react";

const Treemap = ({ itemsScr, factor }) => {
  return (
    <div className="mb-2 mr-2">
      <img
        src={itemsScr}
        alt="Screenshot"
        className={`${
          factor === "mobile" ? "w-[57px] h-[100px]" : "w-[62px] h-[42px]"
        } border border-[#f1f1f1]`}
      />
    </div>
  );
};

export default Treemap;
