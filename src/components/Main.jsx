import React from 'react'
import Slidebar from "./SlidebarS";
import Product from "./Product";
import { Grid } from "@mui/material";

const Main = () => {
  return (
    <Grid  container spacing={{md:1,lg:2}}>
    <Grid item  md={12} lg={6}>
       <Slidebar/>
     </Grid>
     <Grid item md={12} lg={6}>
        <Product/>
     </Grid>
 </Grid>
  )
}

export default Main