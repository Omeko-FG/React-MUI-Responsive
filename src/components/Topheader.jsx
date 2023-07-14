import React from 'react'
import AppBar from "@mui/material/AppBar"
import Typography from '@mui/material/Typography';
import { cyan } from '@mui/material/colors';


const Topheader = () => {
const primary = cyan["50"]
  return (
    <AppBar 
     sx={{
        backgroundColor: primary,
        textAlign: 'center'
      }}>
        <Typography variant='' color={"grey"}>ÜCRETSİZ TESLİM VE İADE</Typography>
    </AppBar>
  )
}

export default Topheader