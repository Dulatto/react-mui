import {useState} from 'react'
import {Box, FormControlLabel, Checkbox} from '@mui/material'

export const MuiCheckbox = () => {
  return (
    <Box>
        <Box>
            <FormControlLabel label='I accept terms and conditions' control={<Checkbox/>} />
        </Box>
    </Box>
  )
}
