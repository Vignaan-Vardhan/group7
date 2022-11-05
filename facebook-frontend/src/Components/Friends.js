import { Box , Typography } from "@material-ui/core"
import Profile from '../../Assets/images/profile.jpeg'
import './Friends.scss'
const Friends = () => {
    return (
        <Box className='Friends'>
            <Box className="title" display='flex' justifyContent='space-between' alignItems='flex-start' paddingY='10px'>
                <Box>
                    <Typography variant='h6'>Friends</Typography>
                    <Typography variant="subtitle">5 friends</Typography>
                </Box>
                <Typography variant='subtitle2' color='primary'>See All Friends</Typography>
            </Box>
            <Box className="Content" display='flex' flexWrap='wrap'>
                <Box display='flex' flexDirection="column">
                    <img src="https://i.pinimg.com/736x/6c/2e/72/6c2e72a783f59bb58f50c7e930e2c543.jpg" width='100px' height='100px' alt="friendName" />
                    <Typography variant="caption">Bugatti</Typography>
                </Box>
                <Box display='flex' flexDirection="column">
                    <img src="https://di-uploads-pod19.dealerinspire.com/bentleyofaustin/uploads/2020/10/download.png" width='100px' height='100px' alt="friendName" />
                    <Typography variant="caption">Bentley</Typography>
                </Box>
                <Box display='flex' flexDirection="column">
                    <img src="https://logos-world.net/wp-content/uploads/2021/04/Porsche-Logo.png" width='100px' height='100px' alt="friendName" />
                    <Typography variant="caption">Porsche</Typography>
                </Box>
                <Box display='flex' flexDirection="column">
                    <img src="https://1000logos.net/wp-content/uploads/2018/03/Symbol-Lamborghini.jpg" width='100px' height='100px' alt="friendName" />
                    <Typography variant="caption">Lamborghini</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Friends