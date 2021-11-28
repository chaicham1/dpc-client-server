import React from 'react'
import { useNavigate } from 'react-router'

import { Button, Container } from '@mui/material'
import { Box } from '@mui/system'
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded'

function BasicPageTamplate({ children, goTo = 'Back' }) {
  const navigate = useNavigate()
  return (
    <>
      <Container>
        <Box mt={5} mb={5}>
          <Button
            size="small"
            onClick={() => {
              navigate(-1)
            }}
          >
            <ArrowLeftRoundedIcon />
            {goTo}
          </Button>
          {children}
        </Box>
      </Container>
    </>
  )
}

export default BasicPageTamplate
