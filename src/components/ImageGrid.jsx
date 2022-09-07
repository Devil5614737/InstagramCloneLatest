import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { GridItem } from "./GridItem";
import Post from '../api/post';


export const ImageGrid=({setPostCount})=>{
    const[myPost,setMyPost]=useState([]);
    const[fetch,setFetch]=useState(false);





const fetchPosts=async()=>{
    const result =await Post.getMyPost()
    if(result.status===200){
        setMyPost(result.data)
        setPostCount(result.data.length)
    }
}

useEffect(()=>{
   fetchPosts()
   return ()=>setFetch(false)
},[fetch])

const removePost=async(id)=>{
    setFetch(true)
  const result= await Post.removePost(id);
  console.log(result.data)
}

    return (
        <Grid className='profileGrid' container gap={3}  sx={{marginTop:4}}>
            {myPost&&myPost.map(post=>
                
        <Grid  sm={5.7} lg={3.8} item xs={1} md={5.8} key={post._id} >
        <GridItem  image={post.image} likes={post.likes} id={post._id} comments={post.comments} removePost={removePost}/>
        </Grid>
                )}
       
        
     </Grid>
)
}