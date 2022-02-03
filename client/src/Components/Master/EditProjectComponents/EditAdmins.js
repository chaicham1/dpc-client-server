import React from 'react'
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  List,
  ListItem,
  Typography,
} from '@mui/material'

function EditAdmins({ admins, newProjectAdminsHandler, currentProjectAdmins }) {
  return (
    <Grid xs={12} item container>
      <Typography variant="h6" component="div" gutterBottom textAlign="left">
        Select Admins
      </Typography>
      <List sx={{ maxHeight: 600, overflow: 'auto', width: '100%' }}>
        {admins.map((admin) => {
          return (
            <FormGroup key={admin._id}>
              <FormControlLabel
                control={
                  <Checkbox
                    disabled={admin.isMaster}
                    defaultChecked={
                      admin.isMaster || currentProjectAdmins.some((a) => a._id === admin._id)
                    }
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
  )
}

export default EditAdmins
