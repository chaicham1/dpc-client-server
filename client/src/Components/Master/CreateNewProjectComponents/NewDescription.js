import React from 'react'
import { Grid, TextField } from '@mui/material'

function NewDescription({ newDescription, newProjectDescriptionHandler }) {
  return (
    <Grid xs={12} item container>
      <TextField
        id="newDescription"
        required
        fullWidth
        multiline
        size="small"
        label="Description"
        helperText="The description of the new project. Use 'ENTER' to drop a line"
        value={newDescription}
        onChangeCapture={newProjectDescriptionHandler}
      />
    </Grid>
  )
}

export default NewDescription
