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
} from '@mui/material'

import AmdocsPoductComponent from '../AmdoctProduct/AmdocsPoductComponent'
import ProjectTechnologieComponent from '../ProjectTechnologies/ProjectTechnologieComponent'
import TeamMembersContainer from '../TeamMembers/TeamMembersContainer'

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

  function newProjectNameHandler(e) {
    setNewProjectName(e.target.value)
  }

  function newProjectImageUrlHandler(e) {
    setNewImageUrl(e.target.value)
  }

  function newProjectDescriptionHandler(e) {
    setNewDescription(e.target.value)
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

  function newProjectSubmitFormHandler() {
    console.log('submit new project')
    addProjectHandler()
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
          <Button
            onClick={handleCreateProjectClose}
            size="small"
            sx={{ right: 5, position: 'absolute' }}
          >
            X
          </Button>
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
                    alt={'undefined'}
                    sx={{ maxHeight: 50, borderRadius: 2 }}
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
                      <MenuItem value={'SM'}>SM</MenuItem>
                      <MenuItem value={'PM'}>PM</MenuItem>
                      <MenuItem value={'FE'}>FE</MenuItem>
                      <MenuItem value={'BE'}>BE</MenuItem>
                      <MenuItem value={'PO'}>PO</MenuItem>
                      <MenuItem value={'TS'}>TS</MenuItem>
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
                    <TeamMembersContainer teamMembers={newTeamMembers} />
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
