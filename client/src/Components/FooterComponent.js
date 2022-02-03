import React from 'react'
import Lottie from 'react-lottie'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import wavesBackground from '../lotties/waves.json'
import { Typography } from '@mui/material'

function FooterComponent() {
  const wavesBackgroundOptions = {
    loop: true,
    autoplay: true,
    animationData: wavesBackground,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <div
      style={{
        position: 'relative',
        textAlign: 'center',
        zIndex: -1,
        bottom: 0,
      }}
    >
      <Lottie options={wavesBackgroundOptions} height={200} />
      <Typography
        gutterBottom
        variant="p"
        component="div"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          fontSize: '16px',
          fontWeight: '300',
          color: 'white',
        }}
      >
        Made with <FavoriteRoundedIcon style={{ color: 'red', fontSize: '14px' }} /> by Chai, Idan,
        and Daniel
      </Typography>
    </div>
  )
}

export default FooterComponent
