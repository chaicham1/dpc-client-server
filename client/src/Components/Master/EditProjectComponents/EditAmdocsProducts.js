import React from 'react'

import { Checkbox, FormControlLabel, FormGroup, Grid, List, Typography } from '@mui/material'

import AmdocsPoductComponent from '../../AmdoctProduct/AmdocsPoductComponent'

function EditAmdocsProducts({
  amdocsProductsList,
  newProjectAmdocsProductsHandler,
  currentProjectProductsList,
}) {
  return (
    <Grid xs={12} item container>
      <Typography variant="h6" component="div" gutterBottom textAlign="left">
        Select Amdocs Products
      </Typography>
      <List sx={{ maxHeight: 600, overflow: 'auto', width: '100%' }}>
        {amdocsProductsList.map((ap) => {
          return (
            <FormGroup key={ap.title}>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked={currentProjectProductsList.some((a) => a.title === ap.title)}
                    onChange={(e) => {
                      newProjectAmdocsProductsHandler(e.target.checked, ap)
                    }}
                  />
                }
                label={
                  <AmdocsPoductComponent
                    title={ap.title}
                    description={ap.description}
                    imgUrl={ap.imgUrl}
                  />
                }
              />
            </FormGroup>
          )
        })}
      </List>
    </Grid>
  )
}

export default EditAmdocsProducts
