import React from 'react'
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'

function ProjectTechnologieComponent({ title, imgUrl }) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={title} src={imgUrl} />
      </ListItemAvatar>
      <ListItemText secondary={title} />
    </ListItem>
  )
}

export default ProjectTechnologieComponent
