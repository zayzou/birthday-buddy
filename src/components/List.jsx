const List = ({people}) => {
  return (
    <section>
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
  );
};
export default List;
