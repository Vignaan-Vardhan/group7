import { Box, Typography } from '@material-ui/core';
import Profile from '../../Assets/images/profile.jpeg';
import './Photos.scss';
function Photos() {
  return (
    <Box className='PhotosSec'>
        <Box className="title" display='flex' justifyContent='space-between' alignItems='center' paddingY='10px'>
            <Typography variant='h6'>Photos</Typography>
            <Typography variant='subtitle2' color='primary'>See All Photos</Typography>
        </Box>
        <Box className='Photos' display='flex'>
            <img src="https://images.hdqwalls.com/wallpapers/ferrari-minimal-logo-5k-bp.jpg" width='107px' height='107px' alt='userPic' />
            <img src="https://i.pinimg.com/736x/6c/2e/72/6c2e72a783f59bb58f50c7e930e2c543.jpg" width='107px' height='107px' alt='userPic' />
            <img src="https://di-uploads-pod19.dealerinspire.com/bentleyofaustin/uploads/2020/10/download.png" width='107px' height='107px' alt='userPic' />
        </Box>
    </Box>
  )
}

export default Photos