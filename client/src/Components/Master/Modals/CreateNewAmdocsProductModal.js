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

function CreateNewAmdocsProductModal({
  addAmdocsProductHandler,
  openCreateAmdocsProductDialog,
  handleCreateAmdocsProductClose,
}) {
  const [newAmdocsProductTitle, setNewAmdocsProductTitle] = useState('')
  const [newAmdocsProductImgUrl, setNewAmdocsProductImgUrl] = useState('')
  const [newAmdocsProductDescription, setNewAmdocsProductDescription] = useState('')

  function newAmdocsProductTitleHandler(e) {
    setNewAmdocsProductTitle(e.target.value)
  }

  function newAmdocsProductImgUrlHandler(e) {
    setNewAmdocsProductImgUrl(e.target.value)
  }

  function newAmdocsProductDescriptionHandler(e) {
    setNewAmdocsProductDescription(e.target.value)
  }

  function newAmdocsProductSubmitFormHandler(e) {
    e.preventDefault()
    console.log('submit new AmdocsProduct')
    const newAmdocsProduct = {
      title: newAmdocsProductTitle,
      imgUrl: newAmdocsProductImgUrl,
      description: newAmdocsProductDescription,
    }
    addAmdocsProductHandler(newAmdocsProduct)
  }

  return (
    <Dialog
      open={openCreateAmdocsProductDialog}
      onClose={handleCreateAmdocsProductClose}
      scroll={'paper'}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      maxWidth="xl"
      fullWidth
    >
      <DialogTitle id="scroll-dialog-title">
        New AmdocsProduct
        <IconButton
          aria-label="close"
          onClick={handleCreateAmdocsProductClose}
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
          <Box component="form" onSubmit={newAmdocsProductSubmitFormHandler}>
            <Grid container spacing={5}>
              <Grid sm={6} item container>
                <TextField
                  id="newAmdocsProductTitle"
                  required
                  fullWidth
                  size="small"
                  label="Amdocs Product"
                  helperText="The name of the new project"
                  value={newAmdocsProductTitle}
                  onChangeCapture={newAmdocsProductTitleHandler}
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
                    value={newAmdocsProductImgUrl}
                    onChangeCapture={newAmdocsProductImgUrlHandler}
                  />
                </Grid>
                <Grid sm={6} item container justifyContent={'center'}>
                  <Paper
                    component="img"
                    src={newAmdocsProductImgUrl}
                    alt={'Paste image url to preview image'}
                    sx={{ maxHeight: 100, borderRadius: 2 }}
                  ></Paper>
                </Grid>
              </Grid>
              <Grid xs={12} item container>
                <TextField
                  id="newDescription"
                  required
                  fullWidth
                  multiline
                  size="small"
                  label="Description"
                  helperText="The description of the new project. Use 'ENTER' to drop a line"
                  value={newAmdocsProductDescription}
                  onChangeCapture={newAmdocsProductDescriptionHandler}
                />
              </Grid>
              <Grid xs={12} item container my={10}>
                <Button variant="contained" type="submit" fullWidth>
                  Create New AmdocsProduct
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </DialogContent>
    </Dialog>
  )
}

export default CreateNewAmdocsProductModal
