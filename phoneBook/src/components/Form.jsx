import { useState } from "react";

function Form({ persons, setPersons }) {
    
    const [newPerson, setNewPerson] = useState({ name: "", phone: "" });

  const addPerson = (event) => {
    event.preventDefault();

    if (
      persons.some(
        (person) =>
          person.name === newPerson.name || person.phone === newPerson.phone
      )
    ) {
      alert(
        `${newPerson.name} is already added to phonebook or phone number ${newPerson.phone} is already in use`
      );
    } else {
      const newPersons = persons.concat(newPerson);
      setPersons(newPersons);
    }
    setNewPerson({ name: "", phone: "" });
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
        <input value={newPerson.name} name="name" onChange={handleNewPerson} />
      </div>
      <div>
        phone:{" "}
        <input
          value={newPerson.phone}
          name="phone"
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
