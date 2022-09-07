
import {
  Avatar,
  Box,
  Card as Crd,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { Input } from "../components/Input";
import {FiSend} from 'react-icons/fi';
import {FaRegComment} from 'react-icons/fa';
import {BsThreeDots} from 'react-icons/bs';
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai';
import { useState,useContext} from "react";
import { AuthContext } from "../context/AuthContext";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';





export const Card = ({ time,image, caption, postedBy, handleLike,post,comments,handleComment,darkTheme}) => {


  const{currentUser}=useContext(AuthContext)

  const [anchorEl, setAnchorEl] = useState(null);
    const[text,setText]=useState('')


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };



  
  const open = Boolean(anchorEl);




  return (
  <>
    <Crd 


    
    elevation={0} sx={{ marginBottom: 2, border: darkTheme?"1px solid #363636":"1px solid #dbdbdb" }}>
      <Box  sx={{
          display: "flex",
          alignItems: "center",
          justifyContent:'space-between',
          gap: 2,
          padding: 2,
          background: darkTheme?'black':"white",
        }}>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          background: darkTheme?'black':"white",
        }}
      >
        <Avatar src={postedBy.pic} />
        <Typography
        sx={{
          color:darkTheme?"#FAFAFA":"black"
        }}
        variant="subtitle">{postedBy.username}</Typography>
      </Box>
      <BsThreeDots  onClick={handleClick} style={{cursor:'pointer'}} size={22}
      color={darkTheme?'white':'black'}
      />
      </Box>
      <CardMedia
          loading='lazy'
        component="image"
        image={image}
        sx={{ width: "100%", height: 470, objectFit: "cover" }}
      />
      <Box sx={{ padding: 1,background:darkTheme?"black":"white" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          
            <IconButton
         onClick={() => handleLike(post)} 
              sx={{
                cursor: "pointer",
                padding: 0,
                
              }}
             
            >
                {post.likes.indexOf(currentUser._id)!==-1?<AiFillHeart size={28} color='red'/>:
             <AiOutlineHeart size={28} color= {darkTheme?"white":"#262626"}/>
                }
            </IconButton>
            <IconButton
          
              sx={{
                cursor: "pointer",
                padding: 0,
              
              }}
             
            >
            <FaRegComment size={28} color={darkTheme?"white":"#262626"}/>
            </IconButton>
            <IconButton
              sx={{
                cursor: "pointer",
                padding: 0,
              
              }}
             
            >
             <FiSend size={28} color={darkTheme?"white":"#262626"}/>
            </IconButton>
        
        </Box>
        <Typography
          sx={{ fontWeight: "bold", fontSize: 17, marginTop: 1,color:darkTheme?'white':"black" }}
          variant="body2"
        >
          {post.likes&&post.likes.length} likes
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: 17,
            marginTop: 1,
            display: "flex",
            alignItems: "center",
            gap: 1,
            color:darkTheme?'white':"black"
          }}
          variant="caption"
        >
          {postedBy.username}
          <Typography variant="caption" sx={{ fontSize: 15 }}>
            {caption}
          </Typography>
        </Typography>
        <Typography sx={{ color: "#8E8E8E", marginTop: 1, cursor: "pointer" }}>
          View All {comments.length} comments
        </Typography>
        <Box sx={{
          overflowY:'auto',
          height:45
        }}>
          {comments.map(comment=>
           <Typography
           key={comment._id}
           sx={{
             fontWeight: "bold",
             fontSize: 17,
             marginTop: 1,
             display: "flex",
             alignItems: "center",
             gap: 1,
             color:darkTheme?"white":'black'
           }}
           variant="caption"
         >
           {comment.postedBy.username}
           <Typography variant="caption" sx={{ fontSize: 15 }}>
             {comment.text}
           </Typography>
         </Typography>
            )}
       
       
        </Box>
     <Typography
     sx={{marginBottom:2, color: "#8E8E8E",fontSize:14}}
     >{formatDistanceToNow(new Date(time),{addSuffix:true})}</Typography>
        <Divider />
        <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
          <Input
       
          value={text}
          onChange={e=>setText(e.target.value)}
            sx={{ width: "90%", height: 50, }}
            placeholder="Add a comment"
          />
          <Typography
          onClick={()=>{handleComment(post._id,text)
            setText("")
          }}
            sx={{
              cursor: "pointer",
              color: "#0F9BF7",
              fontWeight: "bold",
              fontSize: 20,
            }}
            variant="inherit"
          >
            Post
          </Typography>
        </Box>
      </Box>
    </Crd>
   
  </>
  );
};
