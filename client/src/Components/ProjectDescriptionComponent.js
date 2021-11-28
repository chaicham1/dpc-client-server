import React from 'react'
import { Card, CardMedia, Grid, Typography } from '@mui/material'

function ProjectDescriptionComponent({ description, imgUrl }) {
  return (
    <Grid item container spacing={2} alignItems="center">
      <Grid item container direction="column" alignItems="left" md={8}>
        <Typography variant="p" component="div" gutterBottom textAlign="left">
          {description}
        </Typography>
      </Grid>
      <Grid item container direction="column" alignItems="center" md={4}>
        <Card>
          <CardMedia component="img" height="150" image={imgUrl} alt={imgUrl} />
        </Card>
      </Grid>
    </Grid>
  )
}

export default ProjectDescriptionComponent
