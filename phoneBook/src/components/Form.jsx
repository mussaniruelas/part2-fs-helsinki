import { useState } from "react";
import { create } from "../services/contact";

function Form({ persons, setPersons }) {
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });

  const addPerson = (event) => {
    event.preventDefault();

    if (
      persons.some(
        (person) =>
          person.name === newPerson.name || person.number === newPerson.number
      )
    ) {
      alert(
        `${newPerson.name} is already added to phonebook or phone number ${newPerson.number} is already in use`
      );
    } else {
      const newPersons = persons.concat(newPerson);
      create(newPerson)
        .then((data) => {
          setPersons(newPersons);
        })
        .catch((error) => {
          alert(`Error: ${error}`);
        });
    }
    setNewPerson({ name: "", number: "" });
  };

  const handleNewPerson = (event) => {
    const { name, value } = event.target;
    setNewPerson({ ...newPerson, [name]: value });
  };
  return (
    <>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name:{" "}
          <input
            value={newPerson.name}
            name="name"
            onChange={handleNewPerson}
          />
        </div>
        <div>
          phone:{" "}
          <input
            value={newPerson.phone}
            name="number"
            onChange={handleNewPerson}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
}

export default Form;
