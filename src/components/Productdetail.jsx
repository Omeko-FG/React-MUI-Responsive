import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Image } from 'mui-image'

const Productdetail = () => {
  return (
<Grid container spacing={1} sx={{p:5,justifyContent:"center" , marginTop:5}}>
  <Grid item md={12} lg={6}>
    <Typography sx={{m:4,marginLeft:8}}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi minima quia fugiat nihil est mollitia quo, iusto dolor veniam error facere soluta modi illo culpa porro, laboriosam repudiandae. Minus, voluptatibus harum tempore provident cupiditate, sapiente, molestias repellat ratione dolorum iure voluptate! 
    <br/>
    <br/>
    <br/>
    Ipsum incidunt laboriosam deserunt, reiciendis omnis repellat pariatur minus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem in nisi accusamus magnam eum error officiis, perspiciatis dolores velit, vel eos quis deleniti recusandae, nemo iure! Commodi quo eos eligendi excepturi illo provident sed, consequuntur est dolorem, molestias laudantium officia natus atque harum qui aut error. Reiciendis facere ipsum voluptatem!
    <br/>
    <br/>
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aut dolor ipsa beatae sequi repellendus deserunt nobis est qui. Maxime recusandae explicabo facere necessitatibus ad, aspernatur dolorem magni id voluptatem rerum ullam, fuga eaque ab? Assumenda voluptates sapiente eum at facilis possimus iste ratione, fugiat deleniti soluta eligendi reprehenderit autem.
    </Typography>
  </Grid>
  <Grid item md={12} lg={6} sx={{marginTop:5, maxWidth: '75%', height: 'auto'}}>
    <Image src="https://www.eylulalyans.com/_img_urun/7-2-7062021211753.jpg" alt='100px' />
  </Grid>
</Grid>

  )
}

export default Productdetail