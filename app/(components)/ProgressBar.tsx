import React from "react";

interface ProgressBarProps {}

const ProgressBar: React.FC<ProgressBarProps> = ({}) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: "75%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
