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

function NewFiles({
  newFileName,
  newProjectFileNameHandler,
  newFileDownloadUrl,
  newProjectFileDownloadUrlHandler,
  newProjectFilesHandler,
  newFiles,
  newProjectFilesDeleteHandler,
}) {
  return (
    <Grid xs={12} item container spacing={3}>
      <Grid xs={12} item container>
        <Typography variant="h6" component="div" gutterBottom textAlign="left">
          Add Files
        </Typography>
      </Grid>
      <Grid sm={4} item container>
        <TextField
          id="newFileName"
          fullWidth
          size="small"
          label="Name"
          value={newFileName}
          onChangeCapture={newProjectFileNameHandler}
        />
      </Grid>
      <Grid sm={4} item container>
        <TextField
          id="newFileDownloadUrl"
          fullWidth
          size="small"
          label="DownloadUrl"
          value={newFileDownloadUrl}
          onChangeCapture={newProjectFileDownloadUrlHandler}
        />
      </Grid>
      <Grid sm={4} item container>
        <Button variant="outlined" size="small" fullWidth onClick={newProjectFilesHandler}>
          Add File
        </Button>
      </Grid>
      {newFiles.length > 0 && (
        <Grid container spacing={0}>
          <List sx={{ maxHeight: 600, overflow: 'auto', width: '100%' }}>
            {newFiles.map((file) => {
              return (
                <Grid key={file.name} item container xs={12}>
                  <ListItem alignItems="center">
                    <Grid container item xs={1} justifyContent={'center'}>
                      <IconButton
                        aria-label="delete project"
                        size="small"
                        color="error"
                        onClick={() => {
                          newProjectFilesDeleteHandler(file)
                        }}
                      >
                        <DeleteForeverTwoToneIcon />
                      </IconButton>
                    </Grid>
                    <Grid item xs={11}>
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

export default NewFiles
