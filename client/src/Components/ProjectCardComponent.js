import React from 'react'
import { useNavigate } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

function ProjectCardComponent({ name, imgUrl, description }) {
  const navigate = useNavigate()

  return (
    <Card>
      <CardActionArea
        onClick={() => {
          navigate(`/${name.toLowerCase()}`)
        }}
      >
        <CardMedia component="img" height="150" image={imgUrl} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" textAlign="center">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            {description.slice(0, 60)}...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProjectCardComponent
