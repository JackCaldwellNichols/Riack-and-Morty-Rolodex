import FilterBTN from "../FilterBtn";



const Gender = ({ setGender, setPage }) => {
    let genders = ["female", "male", "genderless", "unknown"];
  return (
    <>
        {genders.map((item, index) => (
        <FilterBTN
          key={index}
          index={index}
          name="gender"
          task={setGender}
          setPage={setPage}
          input={item}
        />
  ))}

</>
  );
};


export default Gender