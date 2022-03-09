import {Stack, TextField} from '@mui/material';

export const MuiTextField = () => {
  return (
    <Stack spacing={4} >
        <Stack spacing={2} direction='row'>
            <TextField label='Name' variant='outlined'/>
            <TextField label='Name' variant='filled'/>
            <TextField label='Name' variant='standard'/>
        </Stack>
    </Stack>
  )
}
