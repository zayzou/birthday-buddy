import List from "./components/List";
import data from "./data";
import { useState } from "react";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button type="button" className="btn btn-block" onClick={()=>setPeople([])}>Clear all</button>
      </div>
    </main>
  );
};
export default App;
