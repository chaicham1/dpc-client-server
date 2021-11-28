import React from 'react'
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'

function AmdocsPoductComponent({ title, description, imgUrl }) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={title} src={imgUrl} />
      </ListItemAvatar>
      <ListItemText primary={title} secondary={description} />
    </ListItem>
  )
}

export default AmdocsPoductComponent
