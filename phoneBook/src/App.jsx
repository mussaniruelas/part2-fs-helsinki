import { useState, useEffect } from "react";
import Contacts from "./components/Contacts";
import Form from "./components/Form";
import Filter from "./components/Filter";

import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [showPersons, setShowPersons] = useState([]);

  const effect = () => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
      setShowPersons(response.data);
    });
  };

  useEffect(effect, []);

  return (
    <div>
      <h1>Phonebook</h1>

      <Filter
        showPersons={showPersons}
        setShowPersons={setShowPersons}
        persons={persons}
      />
      <Form persons={persons} setPersons={setPersons} />
      <Contacts persons={showPersons} />
    </div>
  );
};

export default App;
