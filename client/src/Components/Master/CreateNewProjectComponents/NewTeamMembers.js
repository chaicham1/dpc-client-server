import React from 'react'

import {
  Button,
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
} from '@mui/material'

import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone'

import TeamMemberComponent from '../../TeamMembers/TeamMemberComponent'

function NewTeamMembers({
  newTeamMemberName,
  newProjectTeamMemberNameHandler,
  newTeamMemberRole,
  newProjectTeamMemberRoleHandler,
  newProjectTeamMembersHandler,
  newTeamMembers,
  newProjectTeamMembersDeleteHandler,
}) {
  return (
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
        <Button variant="outlined" size="small" fullWidth onClick={newProjectTeamMembersHandler}>
          Add Member
        </Button>
      </Grid>
      {newTeamMembers.length > 0 && (
        <Grid xs={12} item container>
          {newTeamMembers.map((tm) => {
            return (
              <Grid key={tm.name} item container xs={6} sm={3}>
                <Grid item xs={2} sm={1}>
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
                <Grid item xs={10} sm={11}>
                  <TeamMemberComponent name={tm.name} role={tm.role} />
                </Grid>
              </Grid>
            )
          })}
        </Grid>
      )}
    </Grid>
  )
}

export default NewTeamMembers
