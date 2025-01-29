import { useState, useEffect } from "react";

import { Contacts, Form, Filter, Message } from "./components/index.js";
import { getAll } from "./services/contact.js";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [message, setMessage] = useState("Algo esta mal....");

  const effect = () => getAll().then((data) => setPersons(data)).catch((error) => setMessage(error.message));

  useEffect(effect, []);

  return (
    <div>
      <h1>Phonebook</h1>
      <Message message={message} />
      <Filter persons={persons} setPersons={setPersons} />
      <Form persons={persons} setPersons={setPersons} setMessage={setMessage}/>
      <Contacts persons={persons} setPersons={setPersons} />
    </div>
  );
};

export default App;
