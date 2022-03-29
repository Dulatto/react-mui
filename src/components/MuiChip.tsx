import {Stack, Chip, Avatar} from '@mui/material'

export const MuiChip = () => {
  return (
    <Stack direction='row' spacing={1}>
      <Chip label='Chip' color='primary' size='small'/>
      <Chip label='Chip outlined' color='secondary' size='small' variant='outlined' avatar={<Avatar>V</Avatar>}/>
    </Stack>
  )
}
