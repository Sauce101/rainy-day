import React, { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {
  AppBar,
  Box,
  CssBaseline,
  // Container,
  Link,
  Toolbar,
  Typography,
} from '@mui/material'
import SportsBarIcon from '@mui/icons-material/SportsBar'

import MenuDrawer from './MenuDrawer'
import Image from '../assets/images/rainW.jpg'
import Imagem from '../assets/images/rainM.jpg'
import Beertime from '../assets/images/beertime2.jpg'

function HeroSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        '@media (orientation: portrait)': {
          backgroundImage: `url(${Imagem})`,
        },
        '@media (orientation: landscape)': {
          backgroundImage: `url(${Image})`,
        },
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* <Container
        component="main"
        sx={{ color: 'rgba(0, 0, 0, 0.2)' }}
        maxWidth="sm"
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontFamily: "'Rye', cursive", textAlign: 'center', mt: 8 }}
        >
          Rainy Day IPA
        </Typography>
      </Container> */}
    </Box>
  )
}

function Beers() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundImage: `url(${Beertime})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    ></Box>
  )
}

function Copyright() {
  return (
    <Typography variant="body2" color="background.paper" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://rainydayipa.netlify.app/">
        Rainy Day IPA
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const theme = createTheme()

export default function RainyDay() {
  const [active, setActive] = useState(false)

  const handleChangeActive = () => {
    setActive(previousStar => {
      return !previousStar
    })
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" sx={{ backgroundColor: '#305b52' }}>
        <Toolbar>
          <SportsBarIcon
            fontSize="large"
            sx={{ mr: 2 }}
            onClick={() => handleChangeActive()}
          />
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            sx={{ mr: 'auto', fontFamily: "'Rye', cursive" }}
          >
            Rainy Day IPA
          </Typography>
          <MenuDrawer />
        </Toolbar>
      </AppBar>
      {/* Main */}
      {active ? <Beers /> : <HeroSection />}
      {/* End Main */}
      {/* Footer */}
      <Box
        sx={{
          bgcolor: '#305b52',
          p: 6,
        }}
        component="footer"
      >
        <Typography
          variant="subtitle1"
          component="p"
          align="center"
          sx={{
            fontFamily: "'Rye', cursive",
            fontSize: '1.6rem',
          }}
          color="#eeeeee"
        >
          Rainy Day Ale
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          align="center"
          color="#eeeeee"
        >
          Craft Cerveza de Cucamonga
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  )
}
