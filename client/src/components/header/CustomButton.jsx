
import { useState } from 'react'
import {Box,Button,Typography,styled} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import LoginDialong from '../login/LoginDialong'

const Wrapper = styled(Box)`
display:flex;
margin:0 2% 0 auto;
&>button,&>p,&>div{
   margin-right:20px;
   font-size:16px;
   align-items:center;
}
`

const Conatainer = styled(Box)`
display:flex;`

const LoginButton = styled(Button)`
 color:#2874f0;
 background:#fff;
 text-transform:none;
 padding:5px 40px;
 border-radius:2px;
 box-shadow:none;
 font-weight:600;
 height:32px;

`
const CustomButton = () => {
  const [open,setOpen] = useState(false);
  const openDialog =()=>{
    setOpen(true);
  }
  return(
    <Wrapper>
      <LoginButton variant="contained" onClick={()=>{openDialog()}}>Login</LoginButton>
      <Typography style={{marginTop:"3px", width:"135px"}}>Become a Seller</Typography>
      <Typography style={{marginTop:"3px", width:"135px"}}>More</Typography>
      <Conatainer>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Conatainer>
      <LoginDialong open={open} setOpen={setOpen}/>
    </Wrapper>
    )

}

export default CustomButton
