import { Avatar, Box } from "@mui/material";
import { useContext } from "react";
import {ThemeContext} from '../context/ThemeContext';
import { avatars } from "../helpers/avatars";

export const StoriesContainer = () => {
  const{darkTheme}=useContext(ThemeContext)

  return (
    <Box
      sx={{
        background: darkTheme?'black':"white",
        padding: 2,
        display: "flex",
        gap: 2,
        overflowX: "hidden",
        border:darkTheme?"1px solid #363636": "1px solid #dbdbdb",
        borderRadius: 2,
      }}
    >
      {avatars.map((item) => (
        <Box
        key={item.id}
          sx={{
            border: "3px solid #E200A5",
            width: "fit-content",
            borderRadius: 28,
            padding: 1,
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={item.pic}
            sx={{ width: 56, height: 56 }}
          />
        </Box>
      ))}
    </Box>
  );
};
