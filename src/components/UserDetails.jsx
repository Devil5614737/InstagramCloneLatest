import { Box, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { User } from "./User";
import Auth from "../api/auth";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { ProfileModal } from "./ProfileModal";

export const UserDetails = () => {
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState([]);
  const { currentUser, setUserProfile} = useContext(AuthContext);
  const { darkTheme} = useContext(ThemeContext);
  const [fetch, setFetch] = useState(false);
  const [open, setOpen] = useState(false);
  


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchAllUsers = async () => {
    const result = await Auth.allUsers();
    if (result.status === 200) {
      setAllUsers(result.data);
    }
  };

  const follow = async (id) => {
    await Auth.follow(id);
  };
  const unfollow = async (id) => {
    await Auth.unFollow(id);
  };

  const handleFollow = (user) => {
    setFetch(true);
    if (user.followers.indexOf(currentUser._id) === -1) {
      follow(user._id);
    } else if (user.followers.indexOf(currentUser._id) !== -1) {
      unfollow(user._id);
    }
  };

  const handleUserProfile = async (userId) => {
    try {
      const result = await Auth.userProfile(userId);

      if (result.status === 200) {
        setUserProfile(result.data);
      
      }
    } catch (e) {
      console.log(e);
    }
    handleOpen()
  };

  useEffect(() => {
    fetchAllUsers();
    return () => setFetch(false);
  }, [fetch]);








  return (
   <>
    <Box>
      <User
        navigate={() => navigate("/profile")}
        img={currentUser && currentUser.pic}
        title={currentUser && currentUser.fullname}
        subTitle={currentUser && currentUser.username}
        link="switch"
        width={63}
        height={63}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        <Typography sx={{color:darkTheme?"#8E8E8E":"black"}}>Suggestions For You</Typography>
        <Typography sx={{color:darkTheme?"white":"black"}}>See All</Typography>
      </Box>
      {
      
      allUsers.map((user) => (
        <User
          handleUserProfile={handleUserProfile}
          handleFollow={handleFollow}
          key={user&&user._id}
          id={user&&user._id}
          title={user&&user.fullname}
          subTitle="Suggested for you"
          link={
            user.followers.indexOf(currentUser._id) === -1
              ? "follow"
              : "unfollow"
          }
          pic={user.pic}
          user={user}
          width={45}
          height={45}
        />
      ))}
    </Box>
    <ProfileModal open={open} handleClose={handleClose}/>
   </>
  );
};
