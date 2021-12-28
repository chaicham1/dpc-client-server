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
  Typography,
  IconButton,
  TablePagination,
  Tooltip,
} from '@mui/material'

import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone'
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone'

import Loader from '../Common/Loader'

function AdminsTableComponent() {
  const admins = useSelector((state) => state.admins)

  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  useEffect(() => {
    if (admins.length > 0) {
      setLoading(false)
    }
  }, [admins])

  const Row = ({ admin }) => {
    return (
      <>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell align="left">{admin._id}</TableCell>
          <TableCell align="left">{admin.username}</TableCell>
          <TableCell align="left">{admin.password}</TableCell>
          <TableCell align="left">{admin.isMaster ? 'YES' : 'NO'}</TableCell>
          <TableCell component="th" scope="row" align="right">
            {!admin.isMaster && (
              <IconButton
                aria-label="delete project"
                size="small"
                color="error"
                onClick={() => console.log(`delete ${admin.username}`)}
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
      <Typography variant="h6" component="div" gutterBottom textAlign="left">
        Admins
      </Typography>
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table aria-label=" table">
            <TableHead>
              <TableRow>
                <TableCell align="left">ID</TableCell>
                <TableCell align="left">USERNAME</TableCell>
                <TableCell align="left">PASSWORD</TableCell>
                <TableCell align="left">MASTER</TableCell>
                <TableCell align="right">
                  <Tooltip title="Add New Admin">
                    <IconButton
                      aria-label="add new admin"
                      size="small"
                      color="success"
                      onClick={() => console.log(`add new admin`)}
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
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={admins.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  )
}

export default AdminsTableComponent
