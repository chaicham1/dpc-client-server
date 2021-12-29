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
import CreateNewAdminModal from '../Modals/CreateNewAdminModal'

function AdminsTableComponent() {
  const admins = useSelector((state) => state.admins)

  const [openCreateAdminDialog, setOpenCreateAdminDialog] = useState(false)

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
  const [currentAdminToDelete, setcurrentAdminToDelete] = useState(null)
  const [showCreateNewAdminSuccessMessage, setCreateNewAdminSuccessMessage] = useState(false)

  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  useEffect(() => {
    if (admins.length > 0) {
      setLoading(false)
    }
  }, [admins])

  const addAdminHandler = (newAdmin) => {
    console.log(newAdmin)
    handleCreateAdminClose()
    setCreateNewAdminSuccessMessage(true)
  }

  const handleCreateAdminOpen = () => {
    setOpenCreateAdminDialog(true)
  }

  const handleCreateAdminClose = () => {
    setOpenCreateAdminDialog(false)
  }

  //Handle Admin Delete
  const deleteAdminHandler = (admin) => {
    setcurrentAdminToDelete(admin)
    handleDeleteDialogOpen()
  }
  const handleDeleteDialogOpen = () => {
    setOpenDeleteDialog(true)
  }
  const handleDeleteDialogClose = () => {
    setOpenDeleteDialog(false)
    setcurrentAdminToDelete(null)
  }
  const handleDeleteDialogCloseAgree = () => {
    console.log('agree to delete ' + currentAdminToDelete.username)
    handleDeleteDialogClose()
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const Row = ({ admin }) => {
    return (
      <>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell align="left">{admin._id}</TableCell>
          <TableCell align="left">{admin.username}</TableCell>
          <TableCell align="left">{admin.isMaster ? 'YES' : 'NO'}</TableCell>
          <TableCell component="th" scope="row" align="right">
            {!admin.isMaster && (
              <IconButton
                aria-label="delete project"
                size="small"
                color="error"
                onClick={() => deleteAdminHandler(admin)}
              >
                <DeleteForeverTwoToneIcon />
              </IconButton>
            )}
          </TableCell>
        </TableRow>
      </>
    )
  }

  return loading ? (
    <Loader />
  ) : (
    <>
      {showCreateNewAdminSuccessMessage && (
        <Grid xs={12} item container justifyContent="center">
          <Alert
            severity="success"
            sx={{ width: '100%', textAlign: 'left' }}
            onClose={() => {
              setCreateNewAdminSuccessMessage(false)
            }}
          >
            <AlertTitle>Success</AlertTitle>
            New Admin Created Succesfully
          </Alert>
        </Grid>
      )}
      <Typography variant="h6" component="div" gutterBottom textAlign="left">
        Admins
      </Typography>
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 1000 }}>
          <Table aria-label=" table">
            <TableHead>
              <TableRow>
                <TableCell align="left">ID</TableCell>
                <TableCell align="left">USERNAME</TableCell>
                <TableCell align="left">MASTER</TableCell>
                <TableCell align="right">
                  <Tooltip title="Add New Admin">
                    <IconButton
                      aria-label="add new admin"
                      size="small"
                      color="success"
                      onClick={handleCreateAdminOpen}
                    >
                      <AddBoxTwoToneIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {admins.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((admin) => (
                <Row key={admin._id} admin={admin} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={admins.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {openDeleteDialog && currentAdminToDelete.username && (
        <Dialog
          open={openDeleteDialog}
          onClose={handleDeleteDialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <Warning
              message={`Are you sure you want to delete ${currentAdminToDelete.username}?`}
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
      {openCreateAdminDialog && (
        <CreateNewAdminModal
          addAdminHandler={addAdminHandler}
          handleCreateAdminClose={handleCreateAdminClose}
          openCreateAdminDialog={openCreateAdminDialog}
        />
      )}
    </>
  )
}

export default AdminsTableComponent
