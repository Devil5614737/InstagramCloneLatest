import { Grid} from '@mui/material';
import { Navbar } from '../components/Navbar';
import { StoriesContainer } from '../components/StoriesContainer';
import { PostContainer } from '../components/PostContainer';
import { UserDetails } from '../components/UserDetails';


function Home() {






  return (
    <>
    <Navbar/>
    <Grid className='gridContainer' container gap={3}  justifyContent='center' sx={{marginTop:4}}>
       <Grid id='gridItem' item xs={6} md={4}>
        <StoriesContainer/>
        <PostContainer/>
       </Grid>
       <Grid id='gridItem2' item xs={3} sx={{height:'fit-content',padding:2}}>
        <UserDetails/>
       </Grid>
    </Grid>
    </>
  )
}

export default Home;