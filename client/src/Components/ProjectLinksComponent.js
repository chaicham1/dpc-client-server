import React from 'react'
import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material'

function ProjectLinksComponent({ links }) {
  return (
    <Grid item container direction="column" alignItems="flex-start">
      <Typography variant="h6" component="div" gutterBottom textAlign="left">
        Links
      </Typography>
      {links.length > 0 && (
        <Grid container spacing={0}>
          <List sx={{ maxHeight: 600, overflow: 'auto', width: '100%' }}>
            {links.map((link) => {
              return (
                <Grid key={link.title} item xs={12} md={6}>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary={link.title}
                      secondary={
                        <Typography
                          variant="a"
                          component="a"
                          gutterBottom
                          textAlign="left"
                          color={'primary'}
                          href={link.url}
                          target="_blank"
                        >
                          {link.url}
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

export default ProjectLinksComponent
