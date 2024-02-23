import React from "react";
import { AppBar, Toolbar, styled,Box ,Typography} from "@mui/material";
import CustomButton from './CustomButton'

import Search from './Search'

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height:55px;
`;

const Component =styled(Box)`
margin-left:12%;
line-height:0;
`

const SubHeading = styled(Typography)`
font-size:10px;
font-style:italic;
`

const PlusImage = styled('img')`
  width:10px;
  height:10px;
  margin-left:2px;
`

const CustomButtonWrapper = styled(Box)`
margin:0 auto 0 5% ;
`

export const Header = () => {
  return (
    <StyledHeader>
      <Toolbar style={{minHeight:"55px" }}>
         <Component>
             <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" style={{width:75}} alt="logo" />
             <Box style={{display:'flex'}}>
                <SubHeading>Explore&nbsp; <Box component="span" style={{color:"#FFE500"}}>Plus</Box></SubHeading>
                <PlusImage src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png "/>
             </Box>
         </Component>
         <Search />
         <CustomButtonWrapper>
            <CustomButton/>
         </CustomButtonWrapper>
           
         
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;

