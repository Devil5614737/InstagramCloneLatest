import { Box, CardMedia, Typography } from "@mui/material";
import {AiFillHeart} from 'react-icons/ai';
import {FaComment} from 'react-icons/fa';

export const GridItem=({id,image,likes,comments,removePost})=>{
    return (
        <Box className='gridItem' onDoubleClick={()=>removePost(id)}>
<CardMedia
sx={{width:'100%',height:293}}
image={image}

/>
<Box className='icons'>
<Typography sx={{display:'flex',alignItems:'center'}}>
<AiFillHeart color="white" size={30}/>
{likes.length}
</Typography>
<Typography sx={{display:'flex',alignItems:'center'}}>
<FaComment color="white" size={30}/>
{comments.length}
</Typography>
</Box>
        </Box>
    )
}