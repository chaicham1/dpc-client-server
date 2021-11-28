import { Grid, Typography } from '@mui/material'
import React from 'react'
import BasicPageTamplate from '../Components/Common/BasicPageTamplate'

import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone'
import ProjectsTableComponent from '../Components/Master/ProjectsTableComponent'
import TechnologiesTableComponent from '../Components/Master/TechnologiesTableComponent'
import AmdocsProductsTableComponent from '../Components/Master/AmdocsProductsTableComponent'

function AdminPage() {
  //TODO:
  //1-fetch admins after authentication, and show them in table
  //2-add user genarater
  //3-add create new project functionlaity

  return (
    <BasicPageTamplate>
      <Grid container spacing={5} justifyContent="center" textAlign="center">
        <Grid xs={12} item container justifyContent="center">
          <AdminPanelSettingsTwoToneIcon color="primary" fontSize="large" />
          <Typography variant="h4" component="div">
            &nbsp;Hello Master
          </Typography>
        </Grid>
        <Grid xs={12} item container justifyContent="left">
          <ProjectsTableComponent />
        </Grid>
        <Grid xs={12} item container justifyContent="left">
          <TechnologiesTableComponent />
        </Grid>
        <Grid xs={12} item container justifyContent="left">
          <AmdocsProductsTableComponent />
        </Grid>
      </Grid>
    </BasicPageTamplate>
  )
}

export default AdminPage
