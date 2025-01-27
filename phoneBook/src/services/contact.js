import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const create = (newPerson) => {
  return axios.post(baseUrl, newPerson).then((response) => response.data);
};

const update = (id, newPerson) => {
    console.log(id, newPerson);
    
  return axios
    .put(`${baseUrl}/${id}`, newPerson)
    .then((response) => response.data);
};

const deleteId = (id) => {
    if (window.confirm("Delete the contact?")) 
        return axios.delete(`${baseUrl}/${id}`);
    return null;
};

export { getAll, create, update, deleteId };
