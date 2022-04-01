import {Stack, Alert} from '@mui/material'

export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">Error alert</Alert>
      <Alert severity="warning">Warning alert</Alert>
      <Alert severity="info">Info alert</Alert>
      <Alert severity="success">Success alert</Alert>
    </Stack>
  )
}
