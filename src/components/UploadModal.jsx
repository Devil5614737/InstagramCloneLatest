import React, { useContext, useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button } from "../components/Button";
import { CardMedia, Input, TextField } from "@mui/material";
import Post from '../api/post';
import { PostContext } from "../context/PostContext";


export const UploadModal = ({ openModal, handleCloseModal }) => {

  const {setFetch}=useContext(PostContext)
  const [file, setFile] = useState("");
  const[loading,setLoading]=useState(false);
  const[url,setUrl]=useState("");
  const[caption,setCaption]=useState("");

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };



  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    
  };

  const postData = async () => {
    setLoading(true);
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




const handleUpload=async()=>{
setFetch(true);
 const result=await Post.upload(caption,url)
 if(result.status===200){
  handleCloseModal()
 }

}




  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openModal}
      onClose={handleCloseModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModal}>
        <Box sx={style}>
          <Input type="file" onChange={handleChange}
        
          />
          {file && (
            <CardMedia
              image={URL.createObjectURL(file)}
              sx={{
                width: "100%",
                height: 200,
                objectFit: "cover",
                marginTop: 4,
              }}
            />
          )}
          <TextField
            id="filled-textarea"
            label="Write a caption"
            placeholder="Placeholder"
            multiline
            variant="filled"
            sx={{ width: "100%",marginTop:2          }}
            InputProps={{ disableUnderline: true }}
            value={caption}
            onChange={e=>setCaption(e.target.value)}
          />

          <Button
          onClick={handleUpload}
          disabled={!url}
         
            label={url?"Upload":"Please Wait"}
          
          
            sx={{
              marginTop: 7,
              width: "100%",
            }}
          />
        </Box>
      </Fade>
    </Modal>
  );
};
