import Person from "./Person.jsx";

const List = ({ people }) => {
    return (
        <ul>
            {people.map((person) => (
                <li key={person.id}>
                    <Person {...person} />
                </li>
            ))}
        </ul>
    );
};

export default List;