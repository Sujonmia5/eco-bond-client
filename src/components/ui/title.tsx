import { TTitleComponent } from "@/interface/PropsTypes";
import React from "react";
import { GiWheat } from "react-icons/gi";

const Title = ({ title, subtitle, position }: TTitleComponent) => {
  const styleObject = {
    textAlign: "start" as React.CSSProperties["textAlign"],
  };
  if (position) {
    styleObject.textAlign = position;
  }
  return (
    <>
      <div style={styleObject} className="mb-12">
        <h2 className="text-yellow-500 inline-flex text-xl font-bold mb-2  capitalize">
          <GiWheat className="font-bold text-2xl mr-2" />
          {subtitle}
        </h2>
        <h1 className="text-4xl capitalize font-bold">{title}</h1>
      </div>
    </>
  );
};

export default Title;
