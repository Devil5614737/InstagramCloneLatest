import { Alert, AlertTitle, Container, Snackbar } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AccountInfo } from "../components/AccountInfo";
import { ImageGrid } from "../components/ImageGrid";
import { Navbar } from "../components/Navbar";
import { EditModal } from '../components/EditModal';
import {AuthContext} from '../context/AuthContext';
import Auth from '../api/auth'


function Profile() {
const {currentUser}=useContext(AuthContext);
const [openToast, setOpenToast] = useState(false);



  const [open, setOpen] = useState(false);
  const[postCount,setPostCount]=useState(0);


  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)


  const handleUpdate=async(fullname,username,url)=>{
    const result =await Auth.Update(fullname,username,url)
    if(result.status===200){
      alert('user upated')
      handleClose()
    }
  }

  const handleCloseToast = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  useEffect(()=>{
   setOpenToast(true)
   setTimeout(()=>{
    setOpenToast(false)
   },3000)
  },[])


  return (
    <>
      <Navbar />
      <Container>
        <AccountInfo postCount={postCount}
        currentUser={currentUser&&currentUser} handleOpen={handleOpen}/>
        <ImageGrid setPostCount={setPostCount} />
      </Container>
      <EditModal handleUpdate={handleUpdate} open={open} handleClose={handleClose}/>
      <Snackbar
  open={openToast}
  autoHideDuration={1000}
  onClose={handleCloseToast}
  message="Dobule tap on post to delete"

/>
    </>
  );
}

export default Profile;
