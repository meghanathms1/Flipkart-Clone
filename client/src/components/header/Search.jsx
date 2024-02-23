import React from 'react'
import {InputBase ,Box,styled} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchConatainer = styled(Box)`
background:#fff;
width:38%;
border-radius:2px;
margin-left:10px;
display:flex;
`
const InputSearchBase = styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;
`
const SearchIconWrapper = styled(Box)`
color:blue;
padding:5px;
diplay:flex;
`
const Search = () => {
  return (
   <SearchConatainer>
      <InputSearchBase placeholder='Search for product, Brands and More '/>
      <SearchIconWrapper>
        <SearchIcon/>
      </SearchIconWrapper>
   </SearchConatainer>
   
  )
}

export default Search
