import { useState } from "react";
import { create, update } from "../services/contact";

function Form({ persons, setPersons }) {
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = persons.find(
      (person) => person.name === newPerson.name
    );

    if (personObject) {
      if (window.confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
        const changedPerson = { ...personObject, number: newPerson.number };
        update(personObject.id, changedPerson)
          .then((data) => {
            setPersons(
              persons.map((person) =>
                person.id !== personObject.id ? person : data
              )
            );
          })
          .catch((error) => {
            alert(`Error: ${error}`);
          });
      }
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
