import {Box, Card, CardContent, Typography} from '@mui/material'

export const MuiCard = () => {
  return (
    <Box width="300px">
        <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component='div'>React</Typography>
          <Typography  variant="body2" color='text.secondary'>
          React is a library for building user interfaces. 
          React is not a framework – it's not even exclusive to the web.
            </Typography>
        </CardContent>
        </Card>
    </Box>
  )
}
