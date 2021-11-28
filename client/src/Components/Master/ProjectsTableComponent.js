import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CardMedia,
  Button,
  Typography,
  IconButton,
  TablePagination,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogActions,
} from '@mui/material'

import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone'
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone'

import Loader from '../Common/Loader'
import CreateNewProjectComponent from './CreateNewProjectComponent'

function ProjectsTableComponent() {
  const projects = useSelector((state) => state.projects)
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)

  const [openCreateProjectDialog, setOpenCreateProjectDialog] = useState(false)

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
  const [currentProjectToDelete, setcurrentProjectToDelete] = useState(null)

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  useEffect(() => {
    if (projects.length) {
      setLoading(false)
    }
  }, [projects])

  const addProjectHandler = (newProject) => {
    console.log(newProject)
    handleCreateProjectClose()
  }

  const handleCreateProjectOpen = () => {
    setOpenCreateProjectDialog(true)
  }

  const handleCreateProjectClose = () => {
    setOpenCreateProjectDialog(false)
  }

  //Handle Project Delete
  const deleteProjectHandler = (project) => {
    setcurrentProjectToDelete(project)
    handleDeleteDialogOpen()
  }
  const handleDeleteDialogOpen = () => {
    setOpenDeleteDialog(true)
  }
  const handleDeleteDialogClose = () => {
    setOpenDeleteDialog(false)
    setcurrentProjectToDelete(null)
  }
  const handleDeleteDialogCloseAgree = () => {
    console.log('agree to delete ' + currentProjectToDelete.name.toUpperCase())
    handleDeleteDialogClose()
  }

  //Handle Paggination + Collapsable Row For Custom Table
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  const Row = ({ p }) => {
    return (
      <>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell component="th" scope="row">
            <Button
              onClick={() => {
                navigate(`/${p.name.toLowerCase()}`)
              }}
            >
              {p.name}
            </Button>
          </TableCell>
          <TableCell align="left">
            <CardMedia component="img" height={50} image={p.imgUrl} alt={p.name} />
          </TableCell>
          <TableCell align="left">{p.description.slice(0, 100)}...</TableCell>
          <TableCell component="th" scope="row" align="right">
            <IconButton
              aria-label="delete project"
              size="small"
              color="error"
              onClick={() => {
                deleteProjectHandler(p)
              }}
            >
              <DeleteForeverTwoToneIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      </>
    )
  }

  return loading ? (
    <Loader />
  ) : (
    <>
      <Typography variant="h6" component="div" gutterBottom textAlign="left">
        Projects
      </Typography>
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table aria-label=" table">
            <TableHead>
              <TableRow>
                <TableCell width={150}>Name</TableCell>
                <TableCell align="left" width={100}>
                  Image
                </TableCell>
                <TableCell align="left" sx={{ minWidth: 500 }}>
                  Description
                </TableCell>
                <TableCell align="right">
                  <Tooltip title="Add New Project">
                    <IconButton
                      aria-label="add new project"
                      size="small"
                      color="success"
                      onClick={handleCreateProjectOpen}
                    >
                      <AddBoxTwoToneIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((p) => (
                <Row key={p.name} p={p} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={projects.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {openDeleteDialog && currentProjectToDelete.name && (
        <Dialog
          open={openDeleteDialog}
          onClose={handleDeleteDialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Are you sure you want to delete {currentProjectToDelete.name.toUpperCase()}?
          </DialogTitle>
          <DialogActions>
            <Button variant="contained" onClick={handleDeleteDialogClose}>
              Disagree
            </Button>
            <Button onClick={handleDeleteDialogCloseAgree} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      )}
      {openCreateProjectDialog && (
        <CreateNewProjectComponent
          addProjectHandler={addProjectHandler}
          handleCreateProjectClose={handleCreateProjectClose}
          openCreateProjectDialog={openCreateProjectDialog}
        />
      )}
    </>
  )
}

export default ProjectsTableComponent
