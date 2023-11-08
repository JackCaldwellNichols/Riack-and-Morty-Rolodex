
import { TextField } from '@mui/material';


const Search = ({setPage, setSearch}) => {
  return (
      <TextField sx={{paddingTop: '100px', width: 500}} type='text' onChange={(e) => {setPage(1); setSearch(e.target.value)}} placeholder='Search through the characters'/>

  )
}

export default Search