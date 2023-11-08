import FilterBTN from "../FilterBtn";



const Species = ({ setSpecies, setPage }) => {
    let species = [
        "Human", "Alien", "Humanoid",
        "Poopybutthole", "Mythological", "Unknown",
        "Animal", "Disease","Robot","Cronenberg","Planet",
      ];
  return (
    <>
        {species.map((item, index) => (
        <FilterBTN
          key={index}
          index={index}
          name="species"
          task={setSpecies}
          setPage={setPage}
          input={item}
        />
  ))}

</>
  );
};


export default Species