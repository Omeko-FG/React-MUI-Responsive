import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { FormControl,  InputLabel, Select} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Image } from 'mui-image'
import resim from "../images/indir.jpg"
// import { green } from '@mui/material/colors';
// const color = green[400]
const pages = ['Yardım', 'Kargo Takip'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="static" sx={{mt:2,backgroundColor:'inherit',color:'grey',padding:1,boxShadow:"none"}} >
      <Container maxWidth="xl">
      <Toolbar disableGutters sx={{  
        display: 'flex',
        justifyContent: {
        xs: 'center',
        md: 'space-around'}

   }} >
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Box sx={{marginTop:1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="red"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <FormControl variant="standard" sx={{width:120,mb:2}}>
              <InputLabel id="custom-select-small-label">Language</InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              >
              <MenuItem value={"Türkçe"}>Türkçe</MenuItem>
              <MenuItem value={"English"}>English</MenuItem>
              </Select>
              </FormControl>
              <Box>
              <AccountCircleIcon sx={{ marginRight: '10px' }} />
              <FavoriteIcon sx={{ marginRight: '10px' }} />
              <ShoppingBasketIcon sx={{  }}/>
              </Box>
            </Menu>
            </Box>

          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}

            <Box sx={{  display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ m:1, color: 'grey', display: 'block' }}
              >
                {page}
              </Button>
              
              ))}
          <FormControl variant="standard" sx={{width:120,mb:2}}>
          <InputLabel id="custom-select-small-label">Language</InputLabel>
           <Select
           labelId="demo-simple-select-label"
           id="demo-simple-select"
           >
          <MenuItem value={"Türkçe"}>Türkçe</MenuItem>
          <MenuItem value={"English"}>English</MenuItem>
          </Select>
          </FormControl>
          </Box>
          <Typography sx={{alignItems:"center", marginTop:1}}>
          <Image sx={{}} src={resim} />
          </Typography>
            <Box sx={{ display: {xs:"none",  md:"flex" },'&:hover': {
                        cursor:"pointer",
                      }, }}>
              <Box
            // type="search"
            // id="search-input"
            sx={{
              textDecoration:"none",
              border:2,
              borderRadius: '15px',
              width: 150,
              backgroundColor: 'inherit',
            }}
          />
            <SearchIcon sx={{ marginRight: '15px' }} />
              <AccountCircleIcon sx={{ marginRight: '10px' }} />
              <FavoriteIcon sx={{ marginRight: '10px' }} />
              <ShoppingBasketIcon sx={{  }}/>
            </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
