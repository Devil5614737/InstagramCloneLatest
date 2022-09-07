import { Avatar, Box, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const AccountInfo = ({ currentUser, handleOpen, postCount }) => {
  const { darkTheme } = useContext(ThemeContext);

  
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          justifyContent: "center",
          marginTop: 5,
        }}
      >
        <Avatar
          alt="kaushik"
          src={currentUser && currentUser.pic}
          sx={{ width: 156, height: 156 }}
        />
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
            <Typography
              sx={{ fontSize: 22, color: darkTheme ? "white" : "black" }}
            >
              {currentUser && currentUser.username}
            </Typography>

            <Typography
              variant="button"
              onClick={handleOpen}
              sx={{
                fontWeight: "bold",
                background: darkTheme ? "#121212" : "#FAFAFA",
                padding: ".5em 1em",
                textTransform: "Capitalize",
                color: darkTheme ? "white" : "black",
                border: darkTheme ? "1px solid #363636" : "1px solid #DBDBDB",
                cursor: "pointer",
                borderRadius: 1,
              }}
            >
              Edit Profile
            </Typography>
            {/* <Button  label='Edit profile'
           
            /> */}
          </Box>
          <Box sx={{ display: "flex", gap: 5, marginTop: 3 }}>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: 20,
                color: darkTheme ? "white" : "black",
              }}
            >
              {postCount} posts
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: 20,
                color: darkTheme ? "white" : "black",
              }}
            >
              {currentUser.followers && currentUser.followers.length} followers
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: 20,
                color: darkTheme ? "white" : "black",
              }}
            >
              {currentUser.following && currentUser.following.length} following
            </Typography>
          </Box>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: 22,
              marginTop: 2,
              color: darkTheme ? "white" : "black",
            }}
          >
            {currentUser && currentUser.fullname}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
