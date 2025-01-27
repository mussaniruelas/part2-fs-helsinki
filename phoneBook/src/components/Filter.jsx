import { useState } from "react";

function Filter({ showPersons, setShowPersons, persons}) {
  const [filterName, setFilterName] = useState("");

  const handleFilter = (e) => {
    const newName = e.target.value;
    setFilterName(newName);
    const show = newName
      ? persons.filter((person) =>
          person.name.toLowerCase().includes(newName.toLowerCase())
        )
      : persons;
    
    setShowPersons(show);
  };

  return (
    <>
      Filter shown with{" "}
      <input type="text" value={filterName} onChange={handleFilter} />
    </>
  );
}

export default Filter;
