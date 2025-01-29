import React from "react";
import Contact from "./Contact";
import { deleteId } from "../services/contact";

const Contacts = ({ persons, setPersons }) => {
  const deletePerson = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      deleteId(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          alert(`Error deleting contact: ${error.message}`);
        });
    }
  };

  return (
    <div>
      <h2>Numbers</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <Contact
              key={person.id}
              person={person}
              deletePerson={() => deletePerson(person.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;