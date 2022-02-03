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
import CreateNewAmdocsProductModal from '../Modals/CreateNewAmdocsProductModal'

function AmdocsProductsTableComponent() {
  const amdocsProductsList = useSelector((state) => state.amdocsProductsList)

  const [openCreateAmdocsProductDialog, setOpenCreateAmdocsProductDialog] = useState(false)

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
  const [currentAmdocsProductToDelete, setcurrentAmdocsProductToDelete] = useState(null)
  const [showCreateNewAmdocsProductSuccessMessage, setCreateNewAmdocsProductSuccessMessage] =
    useState(false)

  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  useEffect(() => {
    if (amdocsProductsList.length > 0) {
      setLoading(false)
    }
  }, [amdocsProductsList])

  const addAmdocsProductHandler = (newAmdocsProduct) => {
    console.log(newAmdocsProduct)
    handleCreateAmdocsProductClose()
    setCreateNewAmdocsProductSuccessMessage(true)
  }

  const handleCreateAmdocsProductOpen = () => {
    setOpenCreateAmdocsProductDialog(true)
  }

  const handleCreateAmdocsProductClose = () => {
    setOpenCreateAmdocsProductDialog(false)
  }

  //Handle AmdocsProduct Delete
  const deleteAmdocsProductHandler = (AmdocsProduct) => {
    setcurrentAmdocsProductToDelete(AmdocsProduct)
    handleDeleteDialogOpen()
  }
  const handleDeleteDialogOpen = () => {
    setOpenDeleteDialog(true)
  }
  const handleDeleteDialogClose = () => {
    setOpenDeleteDialog(false)
    setcurrentAmdocsProductToDelete(null)
  }
  const handleDeleteDialogCloseAgree = () => {
    console.log('agree to delete ' + currentAmdocsProductToDelete.title)
    handleDeleteDialogClose()
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const Row = ({ ap }) => {
    return (
      <>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell align="left">
            <CardMedia component="img" height={50} image={ap.imgUrl} alt={ap.title} />
          </TableCell>
          <TableCell align="left">{ap.title}</TableCell>
          <TableCell align="left">{ap.description}</TableCell>
          <TableCell component="th" scope="row" align="right">
            <IconButton
              aria-label="delete project"
              size="small"
              color="error"
              onClick={() => {
                deleteAmdocsProductHandler(ap)
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
      {showCreateNewAmdocsProductSuccessMessage && (
        <Grid xs={12} item container justifyContent="center">
          <Alert
            severity="success"
            sx={{ width: '100%', textAlign: 'left' }}
            onClose={() => {
              setCreateNewAmdocsProductSuccessMessage(false)
            }}
          >
            <AlertTitle>Success</AlertTitle>
            New AmdocsProduct Created Succesfully
          </Alert>
        </Grid>
      )}
      <Typography variant="h6" component="div" gutterBottom textAlign="left">
        Amdocs Products
      </Typography>

      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 1000 }}>
          <Table aria-label=" table">
            <TableHead>
              <TableRow>
                <TableCell align="left" width={100}></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="right">
                  <Tooltip title="Add New Amdocs Product">
                    <IconButton
                      aria-label="add new amdocs product"
                      size="small"
                      color="success"
                      onClick={handleCreateAmdocsProductOpen}
                    >
                      <AddBoxTwoToneIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {amdocsProductsList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((ap) => (
                  <Row key={ap.title} ap={ap} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={amdocsProductsList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {openDeleteDialog && currentAmdocsProductToDelete.title && (
        <Dialog
          open={openDeleteDialog}
          onClose={handleDeleteDialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <Warning
              message={`Are you sure you want to delete ${currentAmdocsProductToDelete.title}?`}
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
      {openCreateAmdocsProductDialog && (
        <CreateNewAmdocsProductModal
          addAmdocsProductHandler={addAmdocsProductHandler}
          handleCreateAmdocsProductClose={handleCreateAmdocsProductClose}
          openCreateAmdocsProductDialog={openCreateAmdocsProductDialog}
        />
      )}
    </>
  )
}

export default AmdocsProductsTableComponent
