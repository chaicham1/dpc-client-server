import React from 'react'

import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

import { TextField } from '@mui/material'

function SearchProjectsComponnent({ searchHandler, textColor, resetValue }) {
  return (
    <TextField
      fullWidth
      key={resetValue}
      onChangeCapture={(e) => {
        searchHandler(e.target.value)
      }}
      size="small"
      label={<SearchRoundedIcon sx={{ color: textColor }} />}
      sx={{
        input: { color: textColor },
        button: { color: textColor },
        '& label.Mui-focused': {
          color: textColor,
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: textColor,
          color: textColor,
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: textColor,
            color: textColor,
          },
          '&:hover fieldset': {
            borderColor: textColor,
            color: textColor,
          },
          '&.Mui-focused fieldset': {
            borderColor: textColor,
            color: textColor,
          },
        },
      }}
    />
  )
}

export default SearchProjectsComponnent
