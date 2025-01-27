import React from "react";
import Contact from "./Contact";

const Contacts = ({ persons }) => {
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
            <Contact key={person.id} person={person} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
