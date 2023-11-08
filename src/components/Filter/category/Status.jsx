import { Button } from "@mui/material";
import FilterBTN from "../FilterBtn";



const Status = ({ setStatus, setPage }) => {
  let status = ["Alive", "Dead", "Unknown"];
  return (
    <>
        {status.map((item, index) => (
        <FilterBTN
          key={index}
          index={index}
          name="status"
          task={setStatus}
          setPage={setPage}
          input={item}
        />
  ))}

</>
  );
};


export default Status