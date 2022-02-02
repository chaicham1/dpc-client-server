import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Grid, IconButton, Tooltip } from '@mui/material'

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone'

import Error from '../Components/Common/Error'
import ProjectLinksComponent from '../Components/ProjectLinksComponent'
import ProjectFilesComponent from '../Components/ProjectFilesComponent'
import TeamMembersContainer from '../Components/TeamMembers/TeamMembersContainer'
import ProjectTechnologiesContainer from '../Components/ProjectTechnologies/ProjectTechnologiesContainer'
import AmdocsPoductContainer from '../Components/AmdoctProduct/AmdocsPoductContainer'
import ProjectTitleComponent from '../Components/ProjectTitleComponent'
import ProjectDescriptionComponent from '../Components/ProjectDescriptionComponent'
import PageLoader from '../Components/Common/PageLoader'
import BasicPageTamplate from '../Components/Common/BasicPageTamplate'

function ProjectDetailsPage() {
  //TODO: Check if project name exist, it not put message to user and button to redirect to homepage
  const projects = useSelector((state) => state.projects)
  const logedInUser = useSelector((state) => state.logedInUser)

  const [loading, setLoading] = useState(true)

  const { id } = useParams() //get project name from url

  const currentProject = projects?.find((p) => {
    return p.name.toUpperCase() === id.toUpperCase()
  })
  const canEditProject =
    (logedInUser &&
      currentProject &&
      currentProject.admins.find((admin) => {
        return admin._id === logedInUser._id
      })) ||
    logedInUser.isMaster

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (projects.length > 0) {
      setLoading(false)
    }
  }, [projects])

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <BasicPageTamplate home={true}>
          {currentProject ? (
            <Grid container spacing={4} direction="column" alignItems="center">
              {!!canEditProject && (
                <Grid item container direction="column" alignItems="center">
                  <Tooltip title={`Edit ${currentProject.name.toUpperCase()}`}>
                    <IconButton
                      aria-label="edit projet"
                      size="small"
                      color="warning"
                      onClick={() => {
                        console.log('edit ' + currentProject.name.toUpperCase())
                      }}
                    >
                      <EditTwoToneIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>
              )}
              <ProjectTitleComponent name={currentProject.name.toUpperCase()} />

              <ProjectDescriptionComponent
                description={currentProject.description}
                imgUrl={currentProject.imgUrl}
              />
              <AmdocsPoductContainer amdocsProducts={currentProject.amdocsProducts} />
              <ProjectTechnologiesContainer technologies={currentProject.technologies} />
              <TeamMembersContainer teamMembers={currentProject.teamMembers} />
              <ProjectLinksComponent links={currentProject.links} />
              <ProjectFilesComponent files={currentProject.files} />
            </Grid>
          ) : (
            <Error message={`Unable to find project name: ${id}`} />
          )}
        </BasicPageTamplate>
      )}
    </>
  )
}

export default ProjectDetailsPage
