import {
  Box,
  CardMedia,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState ,useContext, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { RiMessengerLine, RiCompass3Line } from "react-icons/ri";
import { FiPlusSquare } from "react-icons/fi";
import { Avatar } from "@mui/material";
import { UploadModal } from "./UploadModal";
import Storage from '../storage/storage';
import {AuthContext} from '../context/AuthContext';
import {ThemeContext} from '../context/ThemeContext';

export const Navbar = () => {
  const {currentUser}=useContext(AuthContext)
  const {darkTheme,setDarkTheme}=useContext(ThemeContext)
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

useEffect(()=>{
  if(darkTheme){

    document.body.style.background='#121212'
  }else{
    document.body.style.background="#FAFAFA"
  }
},[darkTheme])

  const handleTheme=()=>{
    setDarkTheme(darkTheme===true?false:true);
  };

  return (
    <>
      <Box
        sx={{
          padding: ".7em 0",
          background: darkTheme?"black":"white",
          borderBottom: darkTheme?'1px solid #363636 ': "1px solid #dbdbdb",
          position: "sticky",
          top: 0,
          width:'100%',
          zIndex: 2,
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CardMedia
            onClick={() => navigate("/home")}
            image="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            sx={{
              objectFit: "contain",
              width: 133,
              height: 39,
              cursor: "pointer",
              filter:darkTheme&&'invert(1)'
            }}
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
         <Link to='/home'>
         <IconButton>
              <AiOutlineHome size={35} color={darkTheme?"white":"#262626"} />
            </IconButton>
         </Link >
            <IconButton>
              <RiMessengerLine size={35} color={darkTheme?"white":"#262626"} />
            </IconButton>
            <IconButton>
              <FiPlusSquare
                onClick={handleOpenModal}
                size={35}
                color={darkTheme?"white":"#262626"}
              />
            </IconButton>
            <IconButton>
              <RiCompass3Line size={35} color={darkTheme?"white":"#262626"} />
            </IconButton>
            <IconButton>
              <AiOutlineHeart size={35} color={darkTheme?"white":"#262626"} />
            </IconButton>

            <Avatar
              onClick={(event) => setAnchorEl(event.currentTarget)}
              alt=""
              sx={{ width: 32, height: 32,cursor:'pointer' }}
              src={currentUser&&currentUser.pic}
            />
          </Box>
        </Container>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
         onClick={() => navigate("/profile")}>Profile</MenuItem>
         <Divider/>
        <MenuItem  onClick={handleTheme}>Switch Appearance</MenuItem>
         <Divider/>
        <MenuItem onClick={()=>{
      
          navigate('/')
          Storage.removeData('token')
          handleClose}}>Logout</MenuItem>
      </Menu>
      <UploadModal openModal={openModal} handleCloseModal={handleCloseModal} />
    </>
  );
};
