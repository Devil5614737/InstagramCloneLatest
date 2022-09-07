import { Avatar, Box, Typography } from "@mui/material"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const User=({navigate,img,width,height,pic,title,subTitle,link,id,handleFollow,user,handleUserProfile})=>{

const {darkTheme}=useContext(ThemeContext)


    return (
        <Box sx={{display:'flex',alignItems:'center',justifyContent:"space-between",marginBottom:2}}>
            <Box 
            onClick={navigate}
            sx={{display:'flex',alignItems:'center',gap:3}}
            >
                <Avatar src={!img?pic:img} sx={{width,height}}/>
                <Box sx={{cursor:"pointer"}} onClick={()=>handleUserProfile(id)} >
                    <Typography sx={{fontWeight:500,color:darkTheme?'white':'black',fontSize:18}}>{title}</Typography>
                    <Typography sx={{color:'#8E8E8E'}}>{subTitle}</Typography>
                </Box>
            </Box>
            <Typography
            onClick={()=>handleFollow(user)}
            sx={{color:"#0F9BF7",fontWeight:'bold',fontSize:14,cursor:'pointer'}}>{link}</Typography>
        </Box>
    )
}