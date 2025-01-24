import React from "react";
import Contact from "./Contact";

const Contacts = ({ persons }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Contact key={person.id} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
