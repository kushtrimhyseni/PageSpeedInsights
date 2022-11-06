import React from "react";

const ColoredValues = () => {
  return (
    <div className="flex justify-between items-center w-[250px] max-w-[250px] mt-4">
      <div className="relative">
        <span className="before:content-['🔺'] before:absolute before:top-[0] before:left-[-25px]">
          0-49
        </span>
      </div>
      <div className="relative">
        <span className="before:content-['🟨'] before:absolute before:top-[0] before:left-[-30px]">
          50-89
        </span>
      </div>
      <div className="relative">
        <span className="before:content-['🟢'] before:absolute before:top-[0] before:left-[-30px]">
          90-100
        </span>
      </div>
    </div>
  );
};

export default ColoredValues;
