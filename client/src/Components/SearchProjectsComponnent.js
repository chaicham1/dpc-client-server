import React from 'react'

import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

import { TextField, Autocomplete } from '@mui/material'

function SearchProjectsComponnent({ projectsArrSearch, searchHandler, textColor }) {
  return (
    <Autocomplete
      disablePortal
      fullWidth
      forcePopupIcon={false}
      id="combo-box-demo"
      options={projectsArrSearch}
      onChange={(e, v, r) => {
        searchHandler(v)
      }}
      renderInput={(params) => (
        <TextField
          {...params}
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
      )}
    />
  )
}

export default SearchProjectsComponnent
