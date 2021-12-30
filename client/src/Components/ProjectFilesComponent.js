import React from 'react'
import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material'

function ProjectFilesComponent({ files }) {
  return (
    <Grid item container direction="column" alignItems="flex-start">
      <Typography variant="h6" component="div" gutterBottom textAlign="left">
        Files
      </Typography>
      {files.length > 0 && (
        <Grid container spacing={0}>
          <List sx={{ maxHeight: 600, overflow: 'auto', width: '100%' }}>
            {files.map((file) => {
              return (
                <Grid key={file.name} item xs={12}>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary={file.name}
                      secondary={
                        <Typography
                          variant="a"
                          component="a"
                          gutterBottom
                          textAlign="left"
                          color={'primary'}
                          href={file.downloadUrl}
                          download
                        >
                          {file.downloadUrl}
                        </Typography>
                      }
                    />
                  </ListItem>
                </Grid>
              )
            })}
          </List>
        </Grid>
      )}
    </Grid>
  )
}

export default ProjectFilesComponent
