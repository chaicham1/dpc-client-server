import React from 'react'
import { Grid, List, Typography } from '@mui/material'
import AmdocsPoductComponent from './AmdocsPoductComponent'

function AmdocsPoductContainer({ amdocsProducts }) {
  //TODO: add admin options
  return (
    <Grid item container direction="column" alignItems="flex-start">
      <Typography variant="h6" component="div" gutterBottom textAlign="left">
        Amdocs Poducts
      </Typography>

      {amdocsProducts.length && (
        <List>
          {amdocsProducts.map((ap) => {
            return (
              <AmdocsPoductComponent
                key={ap.title}
                title={ap.title}
                description={ap.description}
                imgUrl={ap.imgUrl}
              />
            )
          })}
        </List>
      )}
    </Grid>
  )
}

export default AmdocsPoductContainer
