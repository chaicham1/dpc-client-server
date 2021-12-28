import React from 'react'
import { Grid, TextField } from '@mui/material'

function NewProjectName({ newProjectName, newProjectNameHandler }) {
  return (
    <Grid sm={6} item container>
      <TextField
        id="newProjectName"
        required
        fullWidth
        size="small"
        label="Project Name"
        helperText="The name of the new project"
        value={newProjectName}
        onChangeCapture={newProjectNameHandler}
      />
    </Grid>
  )
}

export default NewProjectName
