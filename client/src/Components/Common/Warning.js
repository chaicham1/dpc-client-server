import React from 'react'
import { Alert, AlertTitle } from '@mui/material'

function Warning({ message }) {
  return (
    <Alert severity="warning">
      <AlertTitle>Warning</AlertTitle>
      {message}
    </Alert>
  )
}

export default Warning
