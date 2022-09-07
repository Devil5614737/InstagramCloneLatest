import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";

export const EditModal = ({ open, handleClose,handleUpdate }) => {
  const [file, setFile] = useState("");
  const[fullname,setFullname]=useState('');
  const[username,setUsername]=useState("");
  const[url,setUrl]=useState('')



  const postData = async () => {
    // setLoading(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "tzo42pxi");
    data.append("cloud_name", "dwtpwuwax");
    fetch("https://api.cloudinary.com/v1_1/dwtpwuwax/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if(file){

      postData();
    }
  }, [file]);





  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    border:'none',
    p: 4,
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
        
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              marginBottom: 3,
            }}
          >
            <Avatar
             sx={{ width: 66, height: 66 }}
            
            src={file && URL.createObjectURL(file)} alt="username" />
            <Input
              onChange={(e) => setFile(e.target.files[0])}
              sx={{ width: "100%" }}
              type="file"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              marginBottom: 3,
            }}
          >
            <Typography sx={{ fontWeight: 500, fontSize: 18 }}>
              Fullname
            </Typography>
            <Input value={fullname} onChange={(e)=>setFullname(e.target.value)} sx={{ border: "1px solid #DBDBDB", width: "100%" }} />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography sx={{ fontWeight: 500, fontSize: 18 }}>
              Username
            </Typography>
            <Input value={username} onChange={(e)=>setUsername(e.target.value)} sx={{ border: "1px solid #DBDBDB", width: "100%" }} />
          </Box>
          <Button
          disabled={!url||!username||!fullname}
          onClick={()=>handleUpdate(fullname,username,url)}
          label='Update'
          sx={{width:'100%',marginTop:3}}
          />
        </Box>
      </Fade>
    </Modal>
  );
};
