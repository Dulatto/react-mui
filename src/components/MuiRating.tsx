import {Stack, Rating} from '@mui/material'
import {useState} from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

export const MuiRating = () => {
    const [value, setValue] = useState<number | null>(null)
  console.log({value})
    const handleChange =(_event: React.ChangeEvent<{}>, newValue: number | null)=>{
        setValue(newValue)
    }
  return (
    <Stack spacing={2}>
      <Rating 
         value={value} 
         onChange={handleChange} 
         precision={0.5} 
         size='large'
         icon={<FavoriteIcon fontSize='inherit' color='error'/>}
         emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>}        
         />
          <Rating 
         value={value} 
         onChange={handleChange} 
         precision={0.5} 
         size='large'
         icon={<FavoriteIcon fontSize='inherit' color='error'/>}
         emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>}        
         highlightSelectedOnly/>
    </Stack>
  )
}
