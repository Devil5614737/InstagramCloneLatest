import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { Avatar, CardMedia } from "@mui/material";
import { Button } from "./Button";

export const ProfileModal = ({ open, handleClose }) => {
  const { userProfile,currentUser } = useContext(AuthContext);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius:1
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Box sx={{ textAlign: "center" }}>
            <Avatar
              sx={{ width: 100, height: 100, margin: "auto", marginBottom: 2 }}
              src={userProfile && userProfile.pic}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                marginBottom: 2,
              }}
            >
              <Typography>{userProfile && userProfile.username}</Typography>
            
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
              <Typography>2 posts</Typography>
              <Typography>
                {userProfile && userProfile.followers.length} followers
              </Typography>
              <Typography>
                {userProfile && userProfile.following.length} following
              </Typography>
            </Box>
            <Typography sx={{ marginTop: 1 }}>
              {userProfile && userProfile.fullname}
            </Typography>
            <Box sx={{ marginTop: 3, marginBottom: 2 }}></Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};
