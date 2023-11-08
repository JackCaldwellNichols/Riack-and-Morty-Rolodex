import { Button } from "@mui/material";

const FilterBTN = ({ input, task, setPage, index, name }) => {
    return (

      <div className="form-check">
        <input
          style={{display: 'none'}}
          name={name} id={`${name}-${index}`}
        />
        <Button
          onClick={() => {
            task(input); setPage(1);
          }}
          className="btn btn-outline-primary"
          htmlFor={`${name}-${index}`}
        > {input} </Button>
      </div>

    
    );
    };


    export default FilterBTN