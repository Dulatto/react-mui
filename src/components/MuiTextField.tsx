import {Stack, TextField} from '@mui/material';

export const MuiTextField = () => {
  return (
    <Stack spacing={4} >
        <Stack spacing={2} direction='row'>
            <TextField label='Name' variant='outlined'/>
            <TextField label='Name' variant='filled'/>
            <TextField label='Name' variant='standard'/>
        </Stack>
        <Stack spacing={2} direction='row'>
        <TextField label='Small secondary' size='small' color='secondary'/>
        </Stack>
        <Stack spacing={2} direction='row'>
        <TextField label='Form Input' required/>
        <TextField label='Password' type='password' helperText='Do not share your password with anyone' disabled/>
        </Stack>
    </Stack>
  )
}
