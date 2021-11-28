import React from 'react'
import { useNavigate } from 'react-router'

import {
  Grid,
  Typography,
  Container,
  Box,
  TextField,
  Autocomplete,
  IconButton,
} from '@mui/material'
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded'
import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'

function HeaderComponent({ projects, searchHandler, themeSwitchHandler, isDarkTheme }) {
  const projectsArrSearch = projects ? projects.map((p) => p.name.toUpperCase()) : []

  const navigate = useNavigate()

  const textColor = '#fff'
  const bgColor = isDarkTheme ? '#1565c0' : '#1e88e5'

  return (
    <Box
      pt={1}
      pb={1}
      sx={{
        backgroundColor: bgColor,
        color: textColor,
        boxShadow: 3,
      }}
    >
      <Container>
        <Grid container rowSpacing={2}>
          <Grid item container xs={12} sm={8} textAlign="left">
            <Grid item xs={2} sm={1} alignSelf="center">
              <IconButton onClick={themeSwitchHandler} color="inherit">
                {isDarkTheme ? <Brightness4RoundedIcon /> : <Brightness7RoundedIcon />}
              </IconButton>
            </Grid>
            <Grid item xs={10} sm={11} alignSelf="center">
              <Typography variant="h6" component="div">
                Digital Projects Catalog
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={12} sm={4} textAlign="right">
            <Grid item xs={10} alignSelf="center">
              <Autocomplete
                disablePortal
                fullWidth
                forcePopupIcon={false}
                id="combo-box-demo"
                options={projectsArrSearch}
                onChange={(e, v, r) => {
                  searchHandler(v)
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    label={<SearchRoundedIcon sx={{ color: textColor }} />}
                    sx={{
                      input: { color: textColor },
                      button: { color: textColor },
                      '& label.Mui-focused': {
                        color: textColor,
                      },
                      '& .MuiInput-underline:after': {
                        borderBottomColor: textColor,
                        color: textColor,
                      },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: textColor,
                          color: textColor,
                        },
                        '&:hover fieldset': {
                          borderColor: textColor,
                          color: textColor,
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: textColor,
                          color: textColor,
                        },
                      },
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={2} alignSelf="center">
              <IconButton
                onClick={() => {
                  navigate('/login')
                }}
                color="inherit"
              >
                <PersonRoundedIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HeaderComponent
