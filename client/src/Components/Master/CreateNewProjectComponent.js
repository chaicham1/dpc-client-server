import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Grid,
  List,
  TextField,
  Typography,
  Box,
  ListItem,
  Paper,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone'

import AmdocsPoductComponent from '../AmdoctProduct/AmdocsPoductComponent'
import ProjectTechnologieComponent from '../ProjectTechnologies/ProjectTechnologieComponent'
import TeamMembersContainer from '../TeamMembers/TeamMembersContainer'
import TeamMemberComponent from '../TeamMembers/TeamMemberComponent'

function CreateNewProjectComponent({
  addProjectHandler,
  openCreateProjectDialog,
  handleCreateProjectClose,
}) {
  /* From Redux */
  const amdocsProductsList = useSelector((state) => state.amdocsProductsList)
  const developmentTechnologiesList = useSelector((state) => state.developmentTechnologiesList)
  const admins = useSelector((state) => state.admins)

  /* Form Hooks */
  //Basic Info
  const [newProjectName, setNewProjectName] = useState('')
  const [newImageUrl, setNewImageUrl] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [newAmdocsProducts, setNewAmdocsProducts] = useState([])
  const [newAdmins, setNewAdmins] = useState(
    admins.length > 0
      ? [
          admins.find((admin) => {
            return admin.isMaster === true
          }),
        ]
      : []
  )
  const [newTechnologies, setNewTechnologies] = useState([])

  //Team Members
  const [newTeamMemberName, setNewTeamMemberName] = useState('')
  const [newTeamMemberRole, setNewTeamMemberRole] = useState('')
  const [newTeamMembers, setNewTeamMembers] = useState([])

  //Links
  const [newLinkTitle, setNewLinkTitle] = useState('')
  const [newLinkUrl, setNewLinkUrl] = useState('')
  const [newLinks, setNewLinks] = useState([])

  //Files
  const [newFileName, setNewFileName] = useState('')
  const [newFileDownloadUrl, setNewFileDownloadUrl] = useState('')
  const [newFiles, setNewFiles] = useState([])

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
        return fi.name !== fi.name
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
      amdocsProducts: newAmdocsProducts,
      technologies: newTechnologies,
      teamMembers: newTeamMembers,
    }
    addProjectHandler(newProject)
  }

  return (
    <>
      <Dialog
        open={openCreateProjectDialog}
        onClose={handleCreateProjectClose}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="xl"
        fullWidth
      >
        <DialogTitle id="scroll-dialog-title">
          New Project
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
          <Box component="form" onSubmit={newProjectSubmitFormHandler}>
            <Grid container spacing={5}>
              <Grid sm={6} item container>
                <TextField
                  id="newProjectName"
                  required
                  fullWidth
                  size="small"
                  label="Project Name"
                  helperText="The name of the new project"
                  value={newProjectName}
                  onChangeCapture={newProjectNameHandler}
                />
              </Grid>
              <Grid xs={12} item container spacing={2}>
                <Grid sm={6} item container>
                  <TextField
                    id="newImageUrl"
                    required
                    fullWidth
                    size="small"
                    label="Image URL"
                    helperText="The image of the new project"
                    value={newImageUrl}
                    onChangeCapture={newProjectImageUrlHandler}
                  />
                </Grid>
                <Grid sm={6} item container justifyContent={'center'}>
                  <Paper
                    component="img"
                    src={newImageUrl}
                    alt={'Paste image url to preview image'}
                    sx={{ maxHeight: 100, borderRadius: 2 }}
                  ></Paper>
                </Grid>
              </Grid>
              <Grid xs={12} item container>
                <TextField
                  id="newDescription"
                  required
                  fullWidth
                  multiline
                  size="small"
                  label="Description"
                  helperText="The description of the new project. Use 'ENTER' to drop a line"
                  value={newDescription}
                  onChangeCapture={newProjectDescriptionHandler}
                />
              </Grid>
              {admins.length > 0 && (
                <Grid xs={12} item container>
                  <Typography variant="h6" component="div" gutterBottom textAlign="left">
                    Select Admins
                  </Typography>
                  <List sx={{ maxHeight: 300, overflow: 'auto', width: '100%' }}>
                    {admins.map((admin) => {
                      return (
                        <FormGroup key={admin._id}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                disabled={admin.isMaster}
                                defaultChecked={admin.isMaster}
                                onChange={(e) => {
                                  newProjectAdminsHandler(e.target.checked, admin)
                                }}
                              />
                            }
                            label={<ListItem alignItems="flex-start">{admin.username}</ListItem>}
                          />
                        </FormGroup>
                      )
                    })}
                  </List>
                </Grid>
              )}
              {amdocsProductsList.length > 0 && (
                <Grid xs={12} item container>
                  <Typography variant="h6" component="div" gutterBottom textAlign="left">
                    Select Amdocs Products
                  </Typography>
                  <List sx={{ maxHeight: 300, overflow: 'auto', width: '100%' }}>
                    {amdocsProductsList.map((ap) => {
                      return (
                        <FormGroup key={ap.title}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={(e) => {
                                  newProjectAmdocsProductsHandler(e.target.checked, ap)
                                }}
                              />
                            }
                            label={
                              <AmdocsPoductComponent
                                title={ap.title}
                                description={ap.description}
                                imgUrl={ap.imgUrl}
                              />
                            }
                          />
                        </FormGroup>
                      )
                    })}
                  </List>
                </Grid>
              )}
              {developmentTechnologiesList.length > 0 && (
                <Grid xs={12} item container>
                  <Typography variant="h6" component="div" gutterBottom textAlign="left">
                    Select Technologies
                  </Typography>
                  <List sx={{ maxHeight: 200, overflow: 'auto', width: '100%' }}>
                    {developmentTechnologiesList.map((t) => {
                      return (
                        <FormGroup key={t.title}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={(e) => {
                                  newProjectTechnologiesHandler(e.target.checked, t)
                                }}
                              />
                            }
                            label={
                              <ProjectTechnologieComponent title={t.title} imgUrl={t.imgUrl} />
                            }
                          />
                        </FormGroup>
                      )
                    })}
                  </List>
                </Grid>
              )}
              <Grid xs={12} item container spacing={3}>
                <Grid xs={12} item container>
                  <Typography variant="h6" component="div" gutterBottom textAlign="left">
                    Add Team Members
                  </Typography>
                </Grid>
                <Grid sm={4} item container>
                  <TextField
                    id="newTeamMemberName"
                    fullWidth
                    size="small"
                    label="Name"
                    value={newTeamMemberName}
                    onChangeCapture={newProjectTeamMemberNameHandler}
                  />
                </Grid>
                <Grid sm={4} item container>
                  <FormControl size="small" fullWidth>
                    <InputLabel id="newTeamMemberRole-label">Role</InputLabel>
                    <Select
                      labelId="newTeamMemberRole-label"
                      id="newTeamMemberRole"
                      value={newTeamMemberRole}
                      label="Role"
                      onChange={newProjectTeamMemberRoleHandler}
                    >
                      <MenuItem value={'SM'}>Scrum Master</MenuItem>
                      <MenuItem value={'PM'}>Project Maneger</MenuItem>
                      <MenuItem value={'FE'}>Front-End</MenuItem>
                      <MenuItem value={'BE'}>Back-End</MenuItem>
                      <MenuItem value={'PO'}>Product Owner</MenuItem>
                      <MenuItem value={'TS'}>Tester</MenuItem>
                      <MenuItem value={'Other'}>Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid sm={4} item container>
                  <Button
                    variant="outlined"
                    size="small"
                    fullWidth
                    onClick={newProjectTeamMembersHandler}
                  >
                    Add Member
                  </Button>
                </Grid>
                {newTeamMembers.length > 0 && (
                  <Grid xs={12} item container>
                    {newTeamMembers.map((tm) => {
                      return (
                        <Grid key={tm.name} item container xs={6} sm={3}>
                          <Grid item xs={2}>
                            <IconButton
                              aria-label="delete project"
                              size="small"
                              color="error"
                              onClick={() => {
                                newProjectTeamMembersDeleteHandler(tm)
                              }}
                            >
                              <DeleteForeverTwoToneIcon />
                            </IconButton>
                          </Grid>
                          <Grid item xs={10}>
                            <TeamMemberComponent name={tm.name} role={tm.role} />
                          </Grid>
                        </Grid>
                      )
                    })}
                  </Grid>
                )}
              </Grid>
              {/* add links and files adder */}
              <Grid xs={12} item container>
                <Button variant="contained" type="submit" fullWidth>
                  Create
                </Button>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CreateNewProjectComponent
