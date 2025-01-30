import Contry from "./Contry";

function Contries({ contries }) {
  if (!contries) return null;

  if (contries.length > 10)
    return <div>Too many matches, specify another filter</div>;

  if (contries.length === 1) return <Contry contry={contries[0]} />;
  
    
  return (
    <>
      {contries.map((c) => (
        <p key={c.name}>{c.name}</p>
      ))}
    </>
  );
}

export default Contries;
