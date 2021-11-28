import React from 'react'
import { Grid, Typography } from '@mui/material'
import ProjectTechnologieComponent from './ProjectTechnologieComponent'

function ProjectTechnologiesContainer({ technologies }) {
  //TODO: get all technologies for search from redux
  return (
    <Grid item container direction="column" alignItems="flex-start">
      <Typography variant="h6" component="div" gutterBottom textAlign="left">
        Technologies
      </Typography>
      {technologies.length && (
        <Grid container spacing={0}>
          {technologies.map((t) => {
            return (
              <Grid key={t.title} item xs={6} sm={3}>
                <ProjectTechnologieComponent title={t.title} imgUrl={t.imgUrl} />
              </Grid>
            )
          })}
        </Grid>
      )}
    </Grid>
  )
}

export default ProjectTechnologiesContainer
