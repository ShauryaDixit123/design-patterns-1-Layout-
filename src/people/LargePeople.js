export const LargetPeopleListItem = ({ people }) => {
  const { name, age, hairColor, hobbies } = people;
  return (
    <>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>HairColor : {hairColor}</p>
      <h3>
        Hobbies :
        <ul>
          {hobbies.map((hobby) => (
            <li key={hobby}>{hobby} </li>
          ))}
        </ul>
      </h3>
    </>
  );
};
