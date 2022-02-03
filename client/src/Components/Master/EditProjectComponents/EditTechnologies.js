import React from 'react'

import { Checkbox, FormControlLabel, FormGroup, Grid, List, Typography } from '@mui/material'

import ProjectTechnologieComponent from '../../ProjectTechnologies/ProjectTechnologieComponent'

function EditTechnologies({
  developmentTechnologiesList,
  newProjectTechnologiesHandler,
  currentProjectDevelopmentTechnologiesList,
}) {
  return (
    <Grid xs={12} item container>
      <Typography variant="h6" component="div" gutterBottom textAlign="left">
        Select Technologies
      </Typography>
      <List sx={{ maxHeight: 600, overflow: 'auto', width: '100%' }}>
        {developmentTechnologiesList.map((t) => {
          return (
            <FormGroup key={t.title}>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked={currentProjectDevelopmentTechnologiesList.some(
                      (a) => a.title === t.title
                    )}
                    onChange={(e) => {
                      newProjectTechnologiesHandler(e.target.checked, t)
                    }}
                  />
                }
                label={<ProjectTechnologieComponent title={t.title} imgUrl={t.imgUrl} />}
              />
            </FormGroup>
          )
        })}
      </List>
    </Grid>
  )
}

export default EditTechnologies
