import React from 'react'
import { Alert, AlertTitle } from '@mui/material'

function Error({ message }) {
  return (
    <Alert severity="error" sx={{ mt: 5 }}>
      <AlertTitle>Error</AlertTitle>
      {message}
    </Alert>
  )
}

export default Error
