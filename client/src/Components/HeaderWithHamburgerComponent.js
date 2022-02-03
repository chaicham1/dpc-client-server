import React, { useState } from 'react'
import { useNavigate } from 'react-router'

import {
  Typography,
  Container,
  Box,
  IconButton,
  AppBar,
  Toolbar,
  Collapse,
  List,
  ListItem,
} from '@mui/material'
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded'
import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'

import { Squash as Hamburger } from 'hamburger-react'

import SearchProjectsComponnent from './SearchProjectsComponnent'

function HeaderWithHamburgerComponent({
  projects,
  searchHandler,
  themeSwitchHandler,
  isDarkTheme,
}) {
  const navigate = useNavigate()

  const textColor = '#fff'
  const bgColor = isDarkTheme ? '#1565c0' : '#1e88e5'

  const [anchorElNav, setAnchorElNav] = useState(false)
  const [resetSearchValue, setResetSearchValue] = useState(false)

  const handleNavMenu = () => {
    setAnchorElNav(!anchorElNav)
  }

  return (
    <AppBar position="static" style={{ backgroundColor: bgColor }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Box sx={{ flexGrow: 5, display: 'flex', justifyContent: 'flex-start' }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  cursor: 'pointer',
                }}
                onClick={() => {
                  searchHandler(null)
                  setResetSearchValue(!resetSearchValue)
                }}
              >
                Digital Catalog
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 5, display: 'flex', justifyContent: 'center' }}>
              <SearchProjectsComponnent
                searchHandler={searchHandler}
                textColor={textColor}
                resetValue={resetSearchValue}
              />
            </Box>
            <Box sx={{ flexGrow: 5, display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton onClick={themeSwitchHandler} color="inherit">
                {isDarkTheme ? <Brightness4RoundedIcon /> : <Brightness7RoundedIcon />}
              </IconButton>
              <IconButton
                onClick={() => {
                  navigate('/login')
                }}
                color="inherit"
              >
                <PersonRoundedIcon />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Hamburger
              toggled={anchorElNav}
              toggle={handleNavMenu}
              size={20}
              duration={0.2}
            ></Hamburger>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Digital Catalog
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              onClick={() => {
                navigate('/login')
              }}
              color="inherit"
            >
              <PersonRoundedIcon />
            </IconButton>
          </Box>
        </Toolbar>
        <Collapse
          in={anchorElNav}
          timeout="auto"
          unmountOnExit
          sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
        >
          <List>
            <ListItem>
              <SearchProjectsComponnent
                searchHandler={searchHandler}
                textColor={textColor}
                resetValue={resetSearchValue}
              />
            </ListItem>
            <ListItem>
              <IconButton onClick={themeSwitchHandler} color="inherit">
                {isDarkTheme ? <Brightness4RoundedIcon /> : <Brightness7RoundedIcon />}
              </IconButton>
            </ListItem>
          </List>
        </Collapse>
      </Container>
    </AppBar>
  )
}

export default HeaderWithHamburgerComponent
