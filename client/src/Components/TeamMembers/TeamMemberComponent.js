import React from 'react'
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'

import { green, pink, blue, orange, yellow, red, grey } from '@mui/material/colors'
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone'
import SupervisorAccountTwoToneIcon from '@mui/icons-material/SupervisorAccountTwoTone'
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone'

function TeamMemberComponent({ name, role }) {
  let bgColor = grey[300]
  let icon = <PersonOutlineTwoToneIcon />
  if (role === 'PM') {
    icon = <ManageAccountsTwoToneIcon />
    bgColor = red[300]
  }
  if (role === 'SM') {
    icon = <SupervisorAccountTwoToneIcon />
    bgColor = orange[300]
  }
  if (role === 'FE') {
    bgColor = blue[300]
  }
  if (role === 'BE') {
    bgColor = green[300]
  }
  if (role === 'PO') {
    bgColor = pink[300]
  }
  if (role === 'TS') {
    bgColor = yellow[300]
  }

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={name} sx={{ bgcolor: bgColor }}>
          {icon}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={role} />
    </ListItem>
  )
}

export default TeamMemberComponent
