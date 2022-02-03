import React from 'react'
import { useNavigate } from 'react-router'

import { Button, Container } from '@mui/material'
import { Box } from '@mui/system'
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded'

function BasicPageTamplate({ children, goTo = 'Back', home = false }) {
  const navigate = useNavigate()
  return (
    <>
      <Container sx={{ minHeight: '100vh', paddingBottom: 5 }}>
        <Box pt={3}>
          <Button
            size="small"
            onClick={() => {
              navigate(-1)
            }}
          >
            <ArrowLeftRoundedIcon />
            {goTo}
          </Button>
          {home && (
            <Button
              size="small"
              sx={{ float: 'right' }}
              onClick={() => {
                navigate('/')
              }}
            >
              home
            </Button>
          )}
        </Box>
        {children}
      </Container>
    </>
  )
}

export default BasicPageTamplate
