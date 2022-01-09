import React, { useState } from 'react'

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Box,
  IconButton,
  Container,
  TextField,
  Paper,
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'

function CreateNewTechnologieModal({
  addTechnologieHandler,
  openCreateTechnologieDialog,
  handleCreateTechnologieClose,
}) {
  const [newTechnologieTitle, setNewTechnologieTitle] = useState('')
  const [newTechnologieImgUrl, setNewTechnologieImgUrl] = useState('')

  function newTechnologieTitleHandler(e) {
    setNewTechnologieTitle(e.target.value)
  }

  function newTechnologieImgUrlHandler(e) {
    setNewTechnologieImgUrl(e.target.value)
  }

  function newTechnologieSubmitFormHandler(e) {
    e.preventDefault()
    console.log('submit new Technologie')
    const newTechnologie = {
      title: newTechnologieTitle,
      imgUrl: newTechnologieImgUrl,
    }
    addTechnologieHandler(newTechnologie)
  }

  return (
    <Dialog
      open={openCreateTechnologieDialog}
      onClose={handleCreateTechnologieClose}
      scroll={'paper'}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      maxWidth="xl"
      fullWidth
    >
      <DialogTitle id="scroll-dialog-title">
        New Technologie
        <IconButton
          aria-label="close"
          onClick={handleCreateTechnologieClose}
          sx={{
            position: 'absolute',
            right: 10,
            top: 10,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Container>
          <Box component="form" onSubmit={newTechnologieSubmitFormHandler}>
            <Grid container spacing={5}>
              <Grid sm={6} item container>
                <TextField
                  id="newTechnologieTitle"
                  required
                  fullWidth
                  size="small"
                  label="Technologie"
                  helperText="The name of the new project"
                  value={newTechnologieTitle}
                  onChangeCapture={newTechnologieTitleHandler}
                />
              </Grid>
              <Grid xs={12} item container spacing={2}>
                <Grid sm={6} item container>
                  <TextField
                    id="newImageUrl"
                    required
                    fullWidth
                    size="small"
                    label="Image URL"
                    helperText="The image of the new project"
                    value={newTechnologieImgUrl}
                    onChangeCapture={newTechnologieImgUrlHandler}
                  />
                </Grid>
                <Grid sm={6} item container justifyContent={'center'}>
                  <Paper
                    component="img"
                    src={newTechnologieImgUrl}
                    alt={'Paste image url to preview image'}
                    sx={{ maxHeight: 100, borderRadius: 2 }}
                  ></Paper>
                </Grid>
              </Grid>
              <Grid xs={12} item container mb={5}>
                <Button variant="contained" type="submit" fullWidth>
                  Create New Technologie
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </DialogContent>
    </Dialog>
  )
}

export default CreateNewTechnologieModal
