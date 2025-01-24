import { useState } from "react";
import Contacts from "./components/Contacts";
import Form from "./components/Form";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [filterName, setFilterName] = useState("");
  const [showPersons, setShowPersons] = useState(persons);

  const handleFilter = (e) => {
    const newName = e.target.value;
    setFilterName(newName);
    const show = newName
      ? persons.filter((person) =>
          person.name.toLowerCase().includes(newName.toLowerCase())
        )
      : persons;
    setShowPersons(show);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      Filter shown with{" "}
      <input type="text" value={filterName} onChange={handleFilter} />
      <Form persons={persons} setPersons={setPersons} />
      <Contacts persons={showPersons} />
    </div>
  );
};

export default App;
