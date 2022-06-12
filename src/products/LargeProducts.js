import React from "react";

export const LargeProductListItem = ({ products }) => {
  const { name, price, discription, rating } = products;
  return (
    <>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <h3>Discription</h3>
      <p>{discription}</p>
      <p>Average rating :{rating}</p>
    </>
  );
};
