import React from 'react'
import { ButtonBase, Paper , Typography, Grid, Button} from "@mui/material"
import { styled } from '@mui/material/styles';
import data from "./Setdata"
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

const Set = () => {
    return (
        <Grid sx={{display:"flex", marginTop:7}} >
        <Paper 
          sx={{
            display:"flex",
            // flexWrap:[{wrap}],
            p: 2,
            margin: 'auto',
            maxWidth: "100%",
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              '@media (max-width: 600px)': {
                flexWrap: 'wrap',
              },
          }}
          
        >{data.map((data)=>(
          <Grid container>
            <Grid item >
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img alt="complex" src={data.ımg} />
              </ButtonBase>
            </Grid>
            <Grid item sm container>
              <Grid item xs container direction="column">
                <Grid item xs={{justifyContent:"center",alignItems:"center"}} >
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {data.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                  {data.cost}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
                <Grid 
        sx={{ flexGrow: 1,width: 128, height: 128 , alignItems:"center",justifyContent:"center"}}>
            <Typography sx={{display:"block" ,justifyContent:"center"}}>Toplam: 12.696</Typography>
            <Button variant="outlined">Set Olarak Al</Button>
        </Grid>
        </Paper> 

        </Grid>
      );
    }

export default Set