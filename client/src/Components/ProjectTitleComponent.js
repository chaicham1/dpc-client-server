import React from 'react'
import { Grid, Typography } from '@mui/material'

function ProjectTitleComponent({ name }) {
  return (
    <Grid item container direction="column" alignItems="center">
      <Typography variant="h3" component="div" gutterBottom textAlign="center">
        {name}
      </Typography>
    </Grid>
  )
}

export default ProjectTitleComponent
