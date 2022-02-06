import React from 'react'

import {
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material'

import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone'

function NewLinks({
  newLinkTitle,
  newProjectLinkTitleHandler,
  newLinkUrl,
  newProjectLinkUrlHandler,
  newProjectLinksHandler,
  newLinks,
  newProjectLinksDeleteHandler,
}) {
  return (
    <Grid xs={12} item container spacing={3}>
      <Grid xs={12} item container>
        <Typography variant="h6" component="div" gutterBottom textAlign="left">
          Add Links
        </Typography>
      </Grid>
      <Grid sm={4} item container>
        <TextField
          id="newLinkTitle"
          fullWidth
          size="small"
          label="Title"
          value={newLinkTitle}
          onChangeCapture={newProjectLinkTitleHandler}
        />
      </Grid>
      <Grid sm={4} item container>
        <TextField
          id="newLinkUrl"
          fullWidth
          size="small"
          label="Url"
          value={newLinkUrl}
          onChangeCapture={newProjectLinkUrlHandler}
        />
      </Grid>
      <Grid sm={4} item container>
        <Button variant="outlined" size="small" fullWidth onClick={newProjectLinksHandler}>
          Add Link
        </Button>
      </Grid>
      {newLinks.length > 0 && (
        <Grid container spacing={0}>
          <List sx={{ maxHeight: 600, overflow: 'auto', width: '100%' }}>
            {newLinks.map((link) => {
              return (
                <Grid key={link.title} item container xs={12}>
                  <ListItem alignItems="center">
                    <Grid container item xs={1} justifyContent={'center'}>
                      <IconButton
                        aria-label="delete project"
                        size="small"
                        color="error"
                        onClick={() => {
                          newProjectLinksDeleteHandler(link)
                        }}
                      >
                        <DeleteForeverTwoToneIcon />
                      </IconButton>
                    </Grid>
                    <Grid item xs={11}>
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
                    </Grid>
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

export default NewLinks
