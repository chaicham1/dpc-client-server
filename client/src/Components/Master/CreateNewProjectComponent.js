import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'

function CreateNewProjectComponent({
  addProjectHandler,
  openCreateProjectDialog,
  handleCreateProjectClose,
}) {
  return (
    <>
      <Dialog
        open={openCreateProjectDialog}
        onClose={handleCreateProjectClose}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Create New Project</DialogTitle>
        <DialogContent dividers>hello</DialogContent>
        <DialogActions>
          <Button onClick={handleCreateProjectClose}>Cancel</Button>
          <Button variant="contained" type="submit" onClick={addProjectHandler}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default CreateNewProjectComponent
