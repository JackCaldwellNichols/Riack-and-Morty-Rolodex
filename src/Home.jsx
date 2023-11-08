
import { useState, useEffect } from 'react'
import { fetchData } from './components/utils/fetchData'
import CharacterCard from './components/Card/Card'
import Search from './components/Search/Search'
import Filter from './components/Filter/Filter'
import Pages from './components/Pagination/Pagination'
import Nav from './components/Navbar/Nav'
import { Box, Typography } from '@mui/material'


const Home = () => {


const [data, setData] = useState([])
const [search, setSearch] = useState("")
const[page, setPage] = useState(1)
const [status, setStatus] = useState("");
const [gender, setGender] = useState("");
const [species, setSpecies] = useState("");
const [loading, setLoading] = useState(null)


let BASE_URL = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`


useEffect(() => {
    setLoading(true)
    try {
    fetchData(BASE_URL, setData)
    setLoading(false)
    } catch (error) {
    console.log(error)
    setLoading(false)
    }
}, [BASE_URL]);
    
  return (
    <Box display="flex"
    flexDirection='column'
    justifyContent="center"
    alignItems="center"
    flexGrow='grow'
    >
      <Search setSearch={setSearch} setPage={setPage}/>
      <Box 
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap='wrap'
          padding={4}
          
          >
        {!data.results && 
        <Box display="flex" justifyContent='center' alignItems='flex-start'>
          <Typography>Nothing here!</Typography>
        </Box>
        }
        <Box display="flex" justifyContent='center' alignItems='flex-start'>
          {data.results && 
          <Box flex={1}>
              <Filter page={page} setPage={setPage} status={status} setStatus={setStatus} setSpecies={setSpecies} setGender={setGender}/>
          </Box>
          }
          <Box flex={2} display='flex' flexWrap='wrap'>
              {data.results?.map((char, index) => (
                <CharacterCard character={char} key={index}/>
              ))}
          </Box>
        </Box>  
      </Box>
      {data.results &&
      <Box display='flex' justifyContent='center' alignItems='center' padding='30px'>
          <Pages info={data.info} page={page} setPage={setPage}/>
        </Box>
        }
   </Box>
  )
}

export default Home