import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Status from './category/Status';
import { Button } from '@mui/material';
import Gender from './category/Gender';
import Species from './category/Species';


 const Filter = ({page, setPage, status, setStatus, setSpecies, setGender}) => {
  let clear = () => {
    setSpecies("");
    setGender("");
    setStatus("");
    setPage(1);
    window.location.reload(false);
  };

  return (
    <>
    <Button onClick={clear}>Clear filters</Button>
      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Status
         </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Status setStatus={setStatus} setPage={setPage}/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary

          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Species</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Species setSpecies={setSpecies} setPage={setPage}/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Gender</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Gender setGender={setGender} setPage={setPage}/>
        </AccordionDetails>
      </Accordion>
   
    </>
  );
}

export default Filter