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

function TechnologiesTableComponent() {
  //{ id, name, imgUrl, description, amdocsProducts, admins, technologies, teamMembers, links, files }
  const developmentTechnologiesList = useSelector((state) => state.developmentTechnologiesList)

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
    if (developmentTechnologiesList.length) {
      setLoading(false)
    }
  }, [developmentTechnologiesList])

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
              aria-label="delete project"
              size="small"
              color="error"
              onClick={() => console.log(`delete ${t.title}`)}
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
        Technologies
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

                <TableCell align="right">
                  <Tooltip title="Add New Technologi">
                    <IconButton
                      aria-label="add new technologi"
                      size="small"
                      color="success"
                      onClick={() => console.log(`add new technologi`)}
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
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={developmentTechnologiesList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  )
}

export default TechnologiesTableComponent
