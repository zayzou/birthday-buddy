import data from "./data";
import { useState } from "react";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>{people.length} Birthdays Today</h3>
        <section className="">
          {people.map((person) => {
            return (
              <article className="person" key={person.id}>
                <img className="img" src={person.image} alt={person.name} />
                <div>
                  <h4>{person.name}</h4>
                  <p>{person.age} years</p>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
};
export default App;
