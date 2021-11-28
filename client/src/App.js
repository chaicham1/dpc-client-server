import React, { useState } from 'react'
import { useRoutes } from 'react-router-dom'

import ProjectsCatalogPage from './Pages/ProjectsCatalogPage'
import ProjectDetailsPage from './Pages/ProjectDetailsPage'
import NotFoundPage from './Pages/NotFoundPage'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import LoginPage from './Pages/LoginPage'
import AdminPage from './Pages/AdminPage'

function App() {
  const [darkState, setDarkState] = useState(false)

  const mode = darkState ? 'dark' : 'light'

  const darkTheme = createTheme({
    palette: {
      mode: mode,
      background: {
        default: mode === 'dark' ? '#282828' : '#fff',
      },
    },
    typography: {
      fontFamily: ['Open Sans', 'sans-serif'].join(','),
    },
  })

  function themeSwitchHandler() {
    setDarkState(!darkState)
  }

  const projectCatalogWithTheme = (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ProjectsCatalogPage themeSwitchHandler={themeSwitchHandler} isDarkTheme={darkState} />
    </ThemeProvider>
  )
  const projectCDetailsWithTheme = (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ProjectDetailsPage />
    </ThemeProvider>
  )
  const notFoundTheme = (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NotFoundPage />
    </ThemeProvider>
  )
  const loginTheme = (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <LoginPage />
    </ThemeProvider>
  )
  const adminTheme = (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AdminPage />
    </ThemeProvider>
  )

  let routes = useRoutes([
    {
      path: '/',
      element: projectCatalogWithTheme,
    },
    { path: ':id', element: projectCDetailsWithTheme },
    { path: 'login', element: loginTheme },
    { path: 'admin', element: adminTheme },
    { path: '*', element: notFoundTheme },
  ])

  return routes
}

export default App
