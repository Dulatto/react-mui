import {Typography} from '@mui/material';

export const MuiTypography = () => {
  return (
      <div>
    <Typography variant='h1'> H1 Heading</Typography>
    <Typography variant='h2'> H2 Heading</Typography>
    <Typography variant='h3'> H3 Heading</Typography>
    <Typography variant='h4' component='h1' gutterBottom> H4 Heading</Typography>
    <Typography variant='h5'> H5 Heading</Typography>
    <Typography variant='h6'> H6 Heading</Typography>

    <Typography variant='subtitle1'>Subtitle1</Typography>
    <Typography variant='subtitle2'>Subtitle2</Typography>

  /// default font and size
    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim unde recusandae ad magni, ipsum, nobis, pariatur quaerat veniam vel quasi earum repudiandae maiores quo. Esse, quod officiis? Aperiam, earum obcaecati.</Typography>
    <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptates tempore rem, ab deleniti veritatis in dolore cupiditate doloribus hic? Necessitatibus modi temporibus perferendis dolorem beatae error deleniti sunt nam. </Typography>
    </div>
  )
}
