import React from 'react'
import {lightBlue} from "@mui/material/colors"
import { Box, Container,Typography } from '@mui/material'

const color = lightBlue[600]

const Cost = () => {
  return (
    <Container sx={{display:"flex",justifyContent:"space-between",alignItems:"center",height:60,witdh:"100%",backgroundColor:color,color:"white"}}>
     <Box sx={{fontWeight:500,fontSize:"x-large"}}>
        Altın Baget Yüzük
     </Box>
     <Box>
        <Typography>589 TL' den Başlayan Taksitlerle</Typography>
        <Typography sx={{display:"flex",gap:8}}>
            <Typography sx={{textDecoration:"line-through",fontWeight:100}}>12.384 TL</Typography>   1.594 TL</Typography>
     </Box>
     
    </Container>
  )
}

export default Cost