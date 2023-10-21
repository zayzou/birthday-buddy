import data from "./data";
import { useState } from "react";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <>
      <h2>{people.length} Birthdays Today</h2>
      <div>
        {people.map((person) => {
          return <li key={person.id}>{person.name}</li>;
        })}
      </div>
    </>
  );
};
export default App;
