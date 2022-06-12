import React from "react";
import { SplitScreen } from "./SplitScreen";
import { Modal } from "./Modal";
import RegularList from "./RegularList";
import { SmallPeopleListItem } from "./people/SmallPeople";
import { LargetPeopleListItem } from "./people/LargePeople";
import { LargeProductListItem } from "./products/LargeProducts";
import { SmallProducts } from "./products/SmallProducts";
import { NumberedList } from "./NumberedList";

const LeftComp = () => {
  return <div className="bg-gray-200 ">Left</div>;
};
const RightComp = () => {
  return <div className="bg-gray-700">Right</div>;
};
const people = [
  {
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"],
  },
  {
    name: "Brenda Smith",
    age: 33,
    hairColor: "black",
    hobbies: ["golf", "mathematics"],
    name: "Jane Garcia",
    age: 27,
    hairColor: "blonde",
    hobbies: ["biology", "medicine", "gymnastics"],
  },
];
const products = [
  {
    name: "Flat-Screen TV",
    price: "$300",
    description: "Huge LCD screen,agreat deal",
    rating: 4.5,
  },
  {
    name: "Basketball",
    price: "$10",
    description: "Just like the pros use",
    rating: 3.8,
  },
  {
    name: "Running Shoes",
    price: "$120",
    description: "State-of-the-art technology for optimum running",
    rating: 4.2,
  },
];

function App() {
  return (
    <>
      <Modal>
        <LargeProductListItem products={products[0]} />
      </Modal>
      {/* <RegularList
        items={people}
        resourceName="people"
        itemComponent={SmallPeopleListItem}
      />
      <RegularList
        items={people}
        resourceName="people"
        itemComponent={LargetPeopleListItem}
      />
      <RegularList
        items={products}
        resourceName="products"
        itemComponent={LargeProductListItem}
      />
      <RegularList
        items={products}
        resourceName="products"
        itemComponent={SmallProducts}
      />
      <NumberedList
        items={products}
        resourceName="products"
        itemComponent={LargeProductListItem}
      /> */}
    </>
  );
}

export default App;
