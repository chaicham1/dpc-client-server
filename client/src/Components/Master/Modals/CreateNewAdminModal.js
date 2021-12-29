import React, { useState } from 'react'

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Box,
  IconButton,
  Container,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
  Alert,
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'
import { Visibility, VisibilityOff } from '@mui/icons-material'

function CreateNewAdminModal({ addAdminHandler, openCreateAdminDialog, handleCreateAdminClose }) {
  const [newAdminName, setNewAdminName] = useState('')
  const [newAdminIsAdmin, setNewAdminIsAdmin] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  const [newAdminPassword, setNewAdminPassword] = useState({
    password: '',
    showPassword: false,
    error: false,
  })
  const [newAdminConfirmPassword, setNewAdminConfirmPassword] = useState({
    password: '',
    showPassword: false,
    error: false,
  })

  const handleChangePassword = (event) => {
    setNewAdminPassword({ ...newAdminPassword, password: event.target.value })
  }

  const handleChangePasswordConfirm = (event) => {
    setNewAdminConfirmPassword({ ...newAdminConfirmPassword, password: event.target.value })
  }

  const handleClickShowPassword = () => {
    setNewAdminPassword({
      ...newAdminPassword,
      showPassword: !newAdminPassword.showPassword,
    })
  }

  const handleClickShowConfirmPassword = () => {
    setNewAdminConfirmPassword({
      ...newAdminConfirmPassword,
      showPassword: !newAdminConfirmPassword.showPassword,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  function newAdminNameHandler(e) {
    setNewAdminName(e.target.value)
  }

  function validatePassword() {
    if (newAdminPassword.password === newAdminConfirmPassword.password) {
      setShowErrorMessage(false)
      return true
    } else {
      setShowErrorMessage(true)
      return false
    }
  }

  function newAdminIsAdmindHandler(e) {
    setNewAdminIsAdmin(e.target.value)
  }

  function newAdminSubmitFormHandler(e) {
    e.preventDefault()
    if (validatePassword()) {
      console.log('submit new Admin')
      const newAdmin = {
        name: newAdminName,
        password: newAdminPassword.password,
        isAdmin: newAdminIsAdmin,
      }
      addAdminHandler(newAdmin)
    }
  }

  return (
    <Dialog
      open={openCreateAdminDialog}
      onClose={handleCreateAdminClose}
      scroll={'paper'}
      aria-labelledby="scroll-dialog-Name"
      aria-describedby="scroll-dialog-description"
      maxWidth="xl"
      fullWidth
    >
      <DialogTitle id="scroll-dialog-Name">
        New Admin
        <IconButton
          aria-label="close"
          onClick={handleCreateAdminClose}
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
        <Container>
          <Box component="form" onSubmit={newAdminSubmitFormHandler}>
            <Grid container spacing={5}>
              <Grid sm={6} item container>
                <TextField
                  id="newAdminName"
                  required
                  fullWidth
                  size="small"
                  label="Admin"
                  helperText="The name of the new Admin"
                  value={newAdminName}
                  onChangeCapture={newAdminNameHandler}
                />
              </Grid>
              <Grid xs={12} item container spacing={5}>
                <Grid sm={6} item container>
                  <FormControl required fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-password" size="small">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-password"
                      type={newAdminPassword.showPassword ? 'text' : 'password'}
                      size="small"
                      value={newAdminPassword.password}
                      onChange={handleChangePassword}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {newAdminPassword.showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                    <FormHelperText id="outlined-password">Enter New Password</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid sm={6} item container>
                  <FormControl required fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-password-confirm" size="small">
                      Confirm Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-password-confirm"
                      type={newAdminConfirmPassword.showPassword ? 'text' : 'password'}
                      size="small"
                      value={newAdminConfirmPassword.password}
                      onChange={handleChangePasswordConfirm}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleClickShowConfirmPassword}
                            edge="end"
                          >
                            {newAdminConfirmPassword.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                    <FormHelperText id="outlined-password">Confirm New Password</FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>

              {showErrorMessage && (
                <Grid xs={12} item container>
                  <Alert severity="error" sx={{ width: '100%' }}>
                    {'Password do not match'}
                  </Alert>
                </Grid>
              )}
              <Grid xs={12} item container mb={5}>
                <Button variant="contained" type="submit" fullWidth>
                  Create New Admin
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </DialogContent>
    </Dialog>
  )
}

export default CreateNewAdminModal
