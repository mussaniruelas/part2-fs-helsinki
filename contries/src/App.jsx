import { useState, useEffect } from "react";
import { getAll } from "./service/contries";
import Contries from "./components/Contries";

function App() {
  const [contries, setContries] = useState(null); // Lista mostrada
  const [allContries, setAllContries] = useState(null); // Lista original
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAll().then((data) => {
      setContries(data);
      setAllContries(data); // Guardamos una copia de los datos originales
    });
  }, []);

  const handleSearch = (e) => {
    const searchName = e.target.value;
    setSearch(searchName);

    if (searchName) {
      const filteredContries = allContries.filter((c) =>
        c.name.toLowerCase().includes(searchName.toLowerCase())
      );
      setContries(filteredContries);
    } else {
      setContries(allContries); // Restauramos los datos originales
    }
  };

  return (
    <>
      find countries: <input type="text" value={search} onChange={handleSearch} />
      <Contries contries={contries} />
    </>
  );
}

export default App;
