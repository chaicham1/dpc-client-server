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
  Typography,
  IconButton,
  TablePagination,
  Tooltip,
} from '@mui/material'

import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone'
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone'

import Loader from '../Common/Loader'

function AmdocsProductsTableComponent() {
  //{ id, name, imgUrl, description, amdocsProducts, admins, technologies, teamMembers, links, files }
  const amdocsProductsList = useSelector((state) => state.amdocsProductsList)

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
    if (amdocsProductsList.length) {
      setLoading(false)
    }
  }, [amdocsProductsList])

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
              onClick={() => console.log(`delete ${ap.title}`)}
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
        Amdocs Products
      </Typography>
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table aria-label=" table">
            <TableHead>
              <TableRow>
                <TableCell align="left" width={50}>
                  Image
                </TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="right">
                  <Tooltip title="Add New Amdocs Product">
                    <IconButton
                      aria-label="add new amdocs product"
                      size="small"
                      color="success"
                      onClick={() => console.log(`add new amdocs product`)}
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
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={amdocsProductsList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  )
}

export default AmdocsProductsTableComponent
