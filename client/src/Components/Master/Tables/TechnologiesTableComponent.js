import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

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
  Alert,
  AlertTitle,
  Grid,
} from '@mui/material'

import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone'
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone'

import Loader from '../../Common/Loader'
import Warning from '../../Common/Warning'
import CreateNewTechnologieModal from '../Modals/CreateNewTechnologieModal'

function TechnologiesTableComponent() {
  const developmentTechnologiesList = useSelector((state) => state.developmentTechnologiesList)

  const [openCreateTechnologieDialog, setOpenCreateTechnologieDialog] = useState(false)

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
  const [currentTechnologieToDelete, setcurrentTechnologieToDelete] = useState(null)
  const [showCreateNewTechnologieSuccessMessage, setCreateNewTechnologieSuccessMessage] =
    useState(false)

  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  useEffect(() => {
    if (developmentTechnologiesList.length > 0) {
      setLoading(false)
    }
  }, [developmentTechnologiesList])

  const addTechnologieHandler = (newTechnologie) => {
    console.log(newTechnologie)
    handleCreateTechnologieClose()
    setCreateNewTechnologieSuccessMessage(true)
  }

  const handleCreateTechnologieOpen = () => {
    setOpenCreateTechnologieDialog(true)
  }

  const handleCreateTechnologieClose = () => {
    setOpenCreateTechnologieDialog(false)
  }

  //Handle Technologie Delete
  const deleteTechnologieHandler = (technologie) => {
    setcurrentTechnologieToDelete(technologie)
    handleDeleteDialogOpen()
  }
  const handleDeleteDialogOpen = () => {
    setOpenDeleteDialog(true)
  }
  const handleDeleteDialogClose = () => {
    setOpenDeleteDialog(false)
    setcurrentTechnologieToDelete(null)
  }
  const handleDeleteDialogCloseAgree = () => {
    console.log('agree to delete ' + currentTechnologieToDelete.title)
    handleDeleteDialogClose()
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const Row = ({ t }) => {
    return (
      <>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell align="left">
            <CardMedia component="img" height={50} image={t.imgUrl} alt={t.title} />
          </TableCell>
          <TableCell align="left">{t.title}</TableCell>
          <TableCell component="th" scope="row" align="right">
            <IconButton
              aria-label="delete Technologie"
              size="small"
              color="error"
              onClick={() => {
                deleteTechnologieHandler(t)
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
      {showCreateNewTechnologieSuccessMessage && (
        <Grid xs={12} item container justifyContent="center">
          <Alert
            severity="success"
            sx={{ width: '100%', textAlign: 'left' }}
            onClose={() => {
              setCreateNewTechnologieSuccessMessage(false)
            }}
          >
            <AlertTitle>Success</AlertTitle>
            New Technologie Created Succesfully
          </Alert>
        </Grid>
      )}
      <Typography variant="h6" component="div" gutterBottom textAlign="left">
        Technologies
      </Typography>

      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 1000 }}>
          <Table aria-label=" table">
            <TableHead>
              <TableRow>
                <TableCell align="left" width={100}></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="right">
                  <Tooltip title="Add New Technologi">
                    <IconButton
                      aria-label="add new technologi"
                      size="small"
                      color="success"
                      onClick={handleCreateTechnologieOpen}
                    >
                      <AddBoxTwoToneIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {developmentTechnologiesList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((t) => (
                  <Row key={t.title} t={t} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={developmentTechnologiesList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {openDeleteDialog && currentTechnologieToDelete.title && (
        <Dialog
          open={openDeleteDialog}
          onClose={handleDeleteDialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <Warning
              message={`Are you sure you want to delete ${currentTechnologieToDelete.title}?`}
            />
          </DialogTitle>
          <DialogActions>
            <Button variant="contained" onClick={handleDeleteDialogClose}>
              Cancle
            </Button>
            <Button onClick={handleDeleteDialogCloseAgree} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      )}
      {openCreateTechnologieDialog && (
        <CreateNewTechnologieModal
          addTechnologieHandler={addTechnologieHandler}
          handleCreateTechnologieClose={handleCreateTechnologieClose}
          openCreateTechnologieDialog={openCreateTechnologieDialog}
        />
      )}
    </>
  )
}

export default TechnologiesTableComponent
