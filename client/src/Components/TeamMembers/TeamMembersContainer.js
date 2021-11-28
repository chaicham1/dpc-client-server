import React from 'react'
import { Grid, Typography } from '@mui/material'
import TeamMemberComponent from './TeamMemberComponent'

function TeamMembersContainer({ teamMembers }) {
  console.log(teamMembers)
  return (
    <Grid item container direction="column" alignItems="flex-start">
      <Typography variant="h6" component="div" gutterBottom textAlign="left">
        Team Members
      </Typography>
      {teamMembers.length && (
        <Grid container spacing={0}>
          {teamMembers.map((tm) => {
            return (
              <Grid key={tm.name} item xs={6} sm={3}>
                <TeamMemberComponent name={tm.name} role={tm.role} />
              </Grid>
            )
          })}
        </Grid>
      )}
    </Grid>
  )
}

export default TeamMembersContainer
