import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import pages from "./Headedata"
import { Link } from '@mui/material';
import { grey } from '@mui/material/colors';

const colorgrey = grey[500]

function ResponsiveAppBar() {

  return (
    <AppBar position="static" sx={{backgroundColor:"inherit",boxShadow:"none" }}> 
      <Container maxWidth="xl">
        <Toolbar disableGutters>              
          <Box sx={{ flexGrow: 1, display: {  xs: 'flex' } ,flexWrap: 'wrap', justifyContent:"center"}}>
            {pages.map((page) => (
              <Link
                key={page}
                sx={{ my: 2, 
                    color: colorgrey, 
                    display: 'block',
                    textDecoration:"none",
                    m:1,
                    fontSize:"large",
                    fontWeight:"bold",
                    '&:hover': {
                        color: 'red',
                        cursor:"pointer",
                      },
                 }}
              >
                {page}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>  
  );
}
export default ResponsiveAppBar;


















/*import React from 'react'
import data from "./Headedata"

const Header = () => {
  return (
   <div>
    <ul className=''>
        {console.log(data)}
        {data.map((product)=>(
          <li>{product}</li>  
        ))}
    </ul>
   </div>
  )
}

export default Header*/