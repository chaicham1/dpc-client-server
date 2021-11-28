import React from 'react'
import { Grid, Typography } from '@mui/material'

function ProjectLinksComponent({ links }) {
  return (
    <Grid item container direction="column" alignItems="flex-start">
      <Typography variant="h6" component="div" gutterBottom textAlign="left">
        Links
      </Typography>
    </Grid>
  )
}

export default ProjectLinksComponent
