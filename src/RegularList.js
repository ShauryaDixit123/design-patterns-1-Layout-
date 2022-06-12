import React from "react";

const RegularList = ({ items, resourceName, itemComponent: ItemComponent }) => {
  return (
    <>
      {items.map((val, i) => {
        return <ItemComponent key={i} {...{ [resourceName]: val }} />;
      })}
    </>
  );
};
export default RegularList;
