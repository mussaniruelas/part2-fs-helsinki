import React from "react";
import { deleteId } from "../services/contact";


function Contact({ person }) {
  return (
    <>
      <tr>
        <td>{person.name}</td>
        <td>{person.number}</td>
        <td>
          <button onClick={() => deleteId(person.id)}>delete</button>
        </td>
      </tr>
    </>
  );
}

export default Contact;
