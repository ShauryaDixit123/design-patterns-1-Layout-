import React from "react";

export const SmallProducts = ({ products }) => {
  const { name, price, discription, rating } = products;
  return (
    <h3>
      {name} : {price}
    </h3>
  );
};
