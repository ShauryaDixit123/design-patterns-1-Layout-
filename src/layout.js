import React from "react";
import { SplitScreen } from "./SplitScreen";

const leftComp = () => {
  return <div className="bg-gray-200 ">Left</div>;
};
const rightComp = () => {
  return <div className="bg-gray-700">Right</div>;
};

function layout() {
  return (
    <div>
      <SplitScreen
        left={leftComp}
        right={rightComp}
        weightLeft={1 / 3}
        weightRight={2 / 3}
      />
    </div>
  );
}

export default layout;
