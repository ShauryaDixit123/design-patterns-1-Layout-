import React from "react";

export const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((val, i) => {
        return (
          <>
            <h3>{i + 1}</h3>
            <ItemComponent key={i} {...{ [resourceName]: val }} />
          </>
        );
      })}
    </>
  );
};
