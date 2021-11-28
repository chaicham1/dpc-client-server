import React from 'react'
import { Grid, Typography } from '@mui/material'

function ProjectFilesComponent({ files }) {
  return (
    <Grid item container direction="column" alignItems="flex-start">
      <Typography variant="h6" component="div" gutterBottom textAlign="left">
        Files
      </Typography>
    </Grid>
  )
}

export default ProjectFilesComponent
