import React from 'react'
import Lottie from 'react-lottie'

import { Grid, Container, Box } from '@mui/material'

import loaderLottie from '../../lotties/loader.json'

function PageLoader() {
  const loaderLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <Container>
      <Box mt={10}>
        <Grid container spacing={0} justifyContent="center">
          <Grid item container justifyContent="center" xs={12}>
            <Lottie options={loaderLottieOptions} style={{ height: '30vh' }} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default PageLoader
