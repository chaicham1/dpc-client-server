import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Box,
  IconButton,
  Container,
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'

import NewProjectName from '../CreateNewProjectComponents/NewProjectName'
import NewImageUrl from '../CreateNewProjectComponents/NewImageUrl'
import NewDescription from '../CreateNewProjectComponents/NewDescription'
import NewTeamMembers from '../CreateNewProjectComponents/NewTeamMembers'
import NewLinks from '../CreateNewProjectComponents/NewLinks'
import NewFiles from '../CreateNewProjectComponents/NewFiles'
import EditAdmins from '../EditProjectComponents/EditAdmins'
import EditAmdocsProducts from '../EditProjectComponents/EditAmdocsProducts'
import EditTechnologies from '../EditProjectComponents/EditTechnologies'

function EditProjectModal({
  addProjectHandler,
  openCreateProjectDialog,
  handleCreateProjectClose,
  currentProject,
  isMaster,
}) {
  /* From Redux */
  console.log(currentProject)
  const amdocsProductsList = useSelector((state) => state.amdocsProductsList)
  const developmentTechnologiesList = useSelector((state) => state.developmentTechnologiesList)
  const admins = useSelector((state) => state.admins)

  /* Form Hooks */
  //Basic Info
  const [newProjectName, setNewProjectName] = useState(currentProject.name)
  const [newImageUrl, setNewImageUrl] = useState(currentProject.imgUrl)
  const [newDescription, setNewDescription] = useState(currentProject.description)
  const [newAmdocsProducts, setNewAmdocsProducts] = useState(currentProject.amdocsProducts)
  const [newAdmins, setNewAdmins] = useState(currentProject.admins)
  const [newTechnologies, setNewTechnologies] = useState(currentProject.technologies)

  //Team Members
  const [newTeamMemberName, setNewTeamMemberName] = useState('')
  const [newTeamMemberRole, setNewTeamMemberRole] = useState('')
  const [newTeamMembers, setNewTeamMembers] = useState(currentProject.teamMembers)

  //Links
  const [newLinkTitle, setNewLinkTitle] = useState('')
  const [newLinkUrl, setNewLinkUrl] = useState('')
  const [newLinks, setNewLinks] = useState(currentProject.links)

  //Files
  const [newFileName, setNewFileName] = useState('')
  const [newFileDownloadUrl, setNewFileDownloadUrl] = useState('')
  const [newFiles, setNewFiles] = useState(currentProject.files)

  /* Handlers */
  //Handle Project basic info
  function newProjectNameHandler(e) {
    setNewProjectName(e.target.value)
  }
  function newProjectImageUrlHandler(e) {
    setNewImageUrl(e.target.value)
  }
  function newProjectDescriptionHandler(e) {
    setNewDescription(e.target.value)
  }
  function newProjectAdminsHandler(checked, admin) {
    if (checked) {
      setNewAdmins((prevArray) => [...prevArray, admin])
    } else {
      setNewAdmins((prevArray) => [
        ...prevArray.filter((p) => {
          return p._id !== admin._id
        }),
      ])
    }
  }
  function newProjectAmdocsProductsHandler(checked, amdocsProduct) {
    if (checked) {
      setNewAmdocsProducts((prevArray) => [...prevArray, amdocsProduct])
    } else {
      setNewAmdocsProducts((prevArray) => [
        ...prevArray.filter((p) => {
          return p.title !== amdocsProduct.title
        }),
      ])
    }
  }
  function newProjectTechnologiesHandler(checked, Technologie) {
    if (checked) {
      setNewTechnologies((prevArray) => [...prevArray, Technologie])
    } else {
      setNewTechnologies((prevArray) => [
        ...prevArray.filter((p) => {
          return p.title !== Technologie.title
        }),
      ])
    }
  }

  //Handle Team Members
  function newProjectTeamMemberNameHandler(e) {
    setNewTeamMemberName(e.target.value)
  }
  function newProjectTeamMemberRoleHandler(e) {
    setNewTeamMemberRole(e.target.value)
  }
  function newProjectTeamMembersHandler() {
    if (newTeamMemberName && newTeamMemberRole) {
      setNewTeamMembers((prevArray) => [
        ...prevArray,
        { name: newTeamMemberName, role: newTeamMemberRole },
      ])
      setNewTeamMemberName('')
      setNewTeamMemberRole('')
    }
  }
  function newProjectTeamMembersDeleteHandler(teamMember) {
    setNewTeamMembers((prevArray) => [
      ...prevArray.filter((tm) => {
        return tm.name !== teamMember.name
      }),
    ])
  }

  //Handle Links
  function newProjectLinkTitleHandler(e) {
    setNewLinkTitle(e.target.value)
  }
  function newProjectLinkUrlHandler(e) {
    setNewLinkUrl(e.target.value)
  }
  function newProjectLinksHandler() {
    if (newLinkTitle && newLinkUrl) {
      setNewLinks((prevArray) => [...prevArray, { title: newLinkTitle, url: newLinkUrl }])
      setNewLinkTitle('')
      setNewLinkUrl('')
    }
  }
  function newProjectLinksDeleteHandler(link) {
    setNewLinks((prevArray) => [
      ...prevArray.filter((li) => {
        return li.title !== link.title
      }),
    ])
  }

  //Handle Files
  function newProjectFileNameHandler(e) {
    setNewFileName(e.target.value)
  }
  function newProjectFileDownloadUrlHandler(e) {
    setNewFileDownloadUrl(e.target.value)
  }
  function newProjectFilesHandler() {
    if (newFileName && newFileDownloadUrl) {
      setNewFiles((prevArray) => [
        ...prevArray,
        { name: newFileName, downloadUrl: newFileDownloadUrl },
      ])
      setNewFileName('')
      setNewFileDownloadUrl('')
    }
  }
  function newProjectFilesDeleteHandler(file) {
    setNewFiles((prevArray) => [
      ...prevArray.filter((fi) => {
        return fi.name !== file.name
      }),
    ])
  }

  //Handle SUBMIT of new project
  function newProjectSubmitFormHandler(e) {
    e.preventDefault()
    console.log('submit new project')
    const newProject = {
      name: newProjectName,
      imgUrl: newImageUrl,
      description: newDescription,
      admins: newAdmins,
      amdocsProducts: newAmdocsProducts,
      technologies: newTechnologies,
      teamMembers: newTeamMembers,
      links: newLinks,
      files: newFiles,
    }
    addProjectHandler(newProject)
  }

  return (
    <Dialog
      open={openCreateProjectDialog}
      onClose={handleCreateProjectClose}
      scroll={'paper'}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      fullScreen
    >
      <DialogTitle id="scroll-dialog-title">
        Edit {currentProject.name.toUpperCase()}
        <IconButton
          aria-label="close"
          onClick={handleCreateProjectClose}
          sx={{
            position: 'absolute',
            right: 10,
            top: 10,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Container>
          <Box component="form" onSubmit={newProjectSubmitFormHandler}>
            <Grid container spacing={5}>
              <NewProjectName
                newProjectName={newProjectName}
                newProjectNameHandler={newProjectNameHandler}
              />
              <NewImageUrl
                newImageUrl={newImageUrl}
                newProjectImageUrlHandler={newProjectImageUrlHandler}
              />
              <NewDescription
                newDescription={newDescription}
                newProjectDescriptionHandler={newProjectDescriptionHandler}
              />
              {admins.length > 0 && isMaster && (
                <EditAdmins
                  admins={admins}
                  newProjectAdminsHandler={newProjectAdminsHandler}
                  currentProjectAdmins={currentProject.admins}
                />
              )}
              {amdocsProductsList.length > 0 && (
                <EditAmdocsProducts
                  amdocsProductsList={amdocsProductsList}
                  newProjectAmdocsProductsHandler={newProjectAmdocsProductsHandler}
                  currentProjectProductsList={currentProject.amdocsProducts}
                />
              )}
              {developmentTechnologiesList.length > 0 && (
                <EditTechnologies
                  developmentTechnologiesList={developmentTechnologiesList}
                  newProjectTechnologiesHandler={newProjectTechnologiesHandler}
                  currentProjectDevelopmentTechnologiesList={currentProject.technologies}
                />
              )}
              <NewTeamMembers
                newTeamMemberName={newTeamMemberName}
                newProjectTeamMemberNameHandler={newProjectTeamMemberNameHandler}
                newTeamMemberRole={newTeamMemberRole}
                newProjectTeamMemberRoleHandler={newProjectTeamMemberRoleHandler}
                newProjectTeamMembersHandler={newProjectTeamMembersHandler}
                newTeamMembers={newTeamMembers}
                newProjectTeamMembersDeleteHandler={newProjectTeamMembersDeleteHandler}
              />
              <NewLinks
                newLinkTitle={newLinkTitle}
                newProjectLinkTitleHandler={newProjectLinkTitleHandler}
                newLinkUrl={newLinkUrl}
                newProjectLinkUrlHandler={newProjectLinkUrlHandler}
                newProjectLinksHandler={newProjectLinksHandler}
                newLinks={newLinks}
                newProjectLinksDeleteHandler={newProjectLinksDeleteHandler}
              />
              <NewFiles
                newFileName={newFileName}
                newProjectFileNameHandler={newProjectFileNameHandler}
                newFileDownloadUrl={newFileDownloadUrl}
                newProjectFileDownloadUrlHandler={newProjectFileDownloadUrlHandler}
                newProjectFilesHandler={newProjectFilesHandler}
                newFiles={newFiles}
                newProjectFilesDeleteHandler={newProjectFilesDeleteHandler}
              />
              <Grid xs={12} item container mb={5}>
                <Button variant="contained" type="submit" fullWidth>
                  Confirm
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </DialogContent>
    </Dialog>
  )
}

export default EditProjectModal
