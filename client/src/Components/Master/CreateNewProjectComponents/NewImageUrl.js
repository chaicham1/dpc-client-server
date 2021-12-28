import React from 'react'
import { Grid, Paper, TextField } from '@mui/material'

function NewImageUrl({ newImageUrl, newProjectImageUrlHandler }) {
  return (
    <Grid xs={12} item container spacing={2}>
      <Grid sm={6} item container>
        <TextField
          id="newImageUrl"
          required
          fullWidth
          size="small"
          label="Image URL"
          helperText="The image of the new project"
          value={newImageUrl}
          onChangeCapture={newProjectImageUrlHandler}
        />
      </Grid>
      <Grid sm={6} item container justifyContent={'center'}>
        <Paper
          component="img"
          src={newImageUrl}
          alt={'Paste image url to preview image'}
          sx={{ maxHeight: 100, borderRadius: 2 }}
        ></Paper>
      </Grid>
    </Grid>
  )
}

export default NewImageUrl
