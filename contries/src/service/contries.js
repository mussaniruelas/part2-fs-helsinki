import axios from "axios";

const BASE_URL = "https://studies.cs.helsinki.fi/restcountries/api/all";

const getAll = () => {
  const data = axios.get(BASE_URL).then((response) => response.data);
  const contries = data.then((contries) =>
    contries.map((c) => ({
      name: c.name.official,
      capital: c.capital && c.capital.length > 0 ? c.capital[0] : "No capital",
      area: c.area,
      languages: c.languages,
      flag: c.flags.png,
    }))
  );
  return contries;
};

export { getAll };
