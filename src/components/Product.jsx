import React from 'react'
import {Container,TableContainer , Box,Grid,Paper,ButtonBase, FormControl, InputLabel, Link, MenuItem, Select, TableBody, TableCell, TableHead,  Typography, Table } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


const Product = () => {
  return (
    <Container sx={{marginTop:7}}>
     <h2>Altın Baget Yüzük</h2>
     <Box sx={{display:"flex",color:"grey"}} >
     <Typography sx={{marginInlineEnd:5}}>Ürün Kodu: Crealive-24627</Typography>
     <Typography sx={{display: {  xs: 'none' }}}>Barkod: Crealive-24627</Typography>
     </Box>
     <Box sx={{marginTop:5,}} >
     <Typography sx={{marginInlineEnd:4,color:"grey",marginBottom:1}}>Ürün Hakkında</Typography>
     <Typography>1.75 gr, 14 Ayar Beyaz Altın</Typography>
     </Box>
     <Box>
     <TableContainer variant="outlined">
  <Table>
    <TableHead>
      {/* <TableRow> */}
      <TableCell align="center">Taş</TableCell>
      <TableCell align="center">Ağırlık</TableCell>
      <TableCell align="center">Renk</TableCell>
      <TableCell align="center" sx={{ display: { xs: 'none', md: 'table-cell' } }}>Berraklık</TableCell>
      <TableCell align="center" sx={{ display: { xs: 'none', md: 'table-cell' } }} >Şekil</TableCell>
      {/* </TableRow> */}
    </TableHead>
    <TableBody>
      <TableCell align="center">Pırlanta</TableCell>
      <TableCell align="center">0,90 Karat</TableCell>
      <TableCell align="center">G</TableCell>
      <TableCell align="center" sx={{ display: { xs: 'none', md: 'table-cell' } }}>SI</TableCell>
      <TableCell align="center" sx={{ display: { xs: 'none', md: 'table-cell' } }}>Yuvarlak</TableCell>
    </TableBody>
  </Table>
</TableContainer>
     </Box>
     <Typography sx={{marginTop:4,color:"blue",opacity:0.5}}>Yüzük Ölçüsü</Typography>
     <Box sx={{display:"flex", alignItems:"center",}}>
     <FormControl variant="outlined" sx={{width:150,m:2,marginLeft:0,color:"blue",opacity:0.5,borderRadius:1}}>
        <InputLabel id="custom-select-small-label">İade olmaz</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          sx={{ borderRadius: 10 }}
        >
        <MenuItem value={"12"}>12</MenuItem>
        <MenuItem value={"18"}>18</MenuItem>
        <MenuItem value={"24"}>24</MenuItem>
        <MenuItem value={"30"}>30</MenuItem>
        </Select>
      </FormControl>
     <Link sx={{
      marginLeft: 2,
      fontSize: { xs: "12px", sm: "14px", md: "16px" },
    }}>Yüzük Ölçümü Bilmiyorum</Link>
     </Box>
     <Box >
     <Paper
      sx={{
        // margin: 'auto',
        maxWidth: 500,
        minWidth: 250,
        flexGrow: 1,
        border: "1px solid green",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128, alignItems:"center",justifyContent:"center"}}>
            <Img alt="complex" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT0vwMGvJt_ItfAzwKIc7J7oA8WRIZxKZY-A&usqp=CAU" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography variant="body2" sx={{margin:2}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nemo?
              </Typography>
              <Typography variant="body2"  sx={{margin:2}} gutterBottom>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, beatae.              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </Box>
    <Box >
    <Typography sx={{display:"flex", alignItems:"center",marginTop:2,color:"blue",opacity:0.5}} >
    <LocalShippingIcon sx={{marginRight:2}}/>
    2-3 iş günü içerisinde kargoda
    </Typography>
    </Box>
    </Container>
  )
}

export default Product