import React from "react";
import Contact from "./Contact";

const Contacts = ({ persons }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {persons.map((person) => (
          <Contact key={`${person.name}-${person.phone}`} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
