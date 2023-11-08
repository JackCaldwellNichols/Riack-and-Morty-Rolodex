import React, {useState, useEffect} from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Pages = ({info, page, setPage}) => {

const pageChange = (event, value) => {
    setPage(value)
}

  return (
    <>
<Stack spacing={2}>
    <Pagination count={info?.pages} color="primary" page={page} onChange={pageChange}/>
</Stack>
</>
  )
}

export default Pages