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
  // const projects = useSelector((state) => state.projects)
  const amdocsProductsList = useSelector((state) => state.amdocsProductsList)
  const developmentTechnologiesList = useSelector((state) => state.developmentTechnologiesList)

  const [newProjectName, setNewProjectName] = useState('')
  const [newImageUrl, setNewImageUrl] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [newAmdocsProducts, setNewAmdocsProducts] = useState([])
  const [newTechnologies, setNewTechnologies] = useState([])
  const [newTeamMemberName, setNewTeamMemberName] = useState('')
  const [newTeamMemberRole, setNewTeamMemberRole] = useState('')
  const [newTeamMembers, setNewTeamMembers] = useState([])

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

  //Handle Amdocs Products related to the project
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

  //Handle Project Technologies
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
    //add success message when submitted
  }

  // console.log({
  //   name: newProjectName,
  //   imgUrl: newImageUrl,
  //   description: newDescription,
  //   amdocsProducts: newAmdocsProducts,
  //   admins: [
  //     {
  //       _id: '1',
  //       username: '',
  //       password: '',
  //       isMaster: true,
  //     },
  //   ],
  //   technologies: newTechnologies,
  //   teamMembers: [{ name: '', role: '' }],
  //   links: [
  //     {
  //       title: '',
  //       url: '',
  //     },
  //   ],
  //   files: [
  //     {
  //       name: '',
  //       downloadUrl: '',
  //     },
  //   ],
  // })

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
                    alt={'add new project image'}
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
              <Grid xs={12} item container>
                {amdocsProductsList.length > 0 && (
                  <>
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
                  </>
                )}
              </Grid>
              <Grid xs={12} item container>
                {developmentTechnologiesList.length > 0 && (
                  <>
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
                  </>
                )}
              </Grid>
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
