
import { Box, CardMedia, CircularProgress, Link } from "@mui/material";
import React, { useState } from "react";
import { AuthCard } from "../components/AuthCard";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Link as Lnk, useNavigate } from "react-router-dom";

import Auth from '../api/auth'

function Signup() {
  const navigate=useNavigate();
  const[loading,setLoading]=useState('')

  const [values,setValues]=useState({
    fullname:"",
    username:"",
    email:"",
    password:""
  })


  const handleChange=e=>{
    setValues({...values,[e.target.name]:e.target.value})
  }



const handleSignup=async()=>{
  setLoading(true)
  const {username,fullname,email,password}=values;
  const result =await Auth.Signup(username,fullname,email,password)
  if(result.status===200)
  setLoading(false)
  alert('user created')
  navigate('/')
if(result.state!==200){
  setLoading(false)
}
}

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#FAFAFA",
        display: "grid",
        placeContent: "center",
      }}
    >
      <AuthCard sx={{ width: 400, border: "1px solid #dbdbdb", padding: 5 }}>
        <CardMedia
          image="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
          sx={{
            width: 175,
            height: 51,
            objectFit: "contain",
            margin: "auto",
            marginBottom: 5,
          }}
        />
        <Input
          label="Email"
          onChange={handleChange}
          value={values.email}
          name='email'
          sx={{
            width: "100%",
            background: "#FAFAFA",
            marginBottom: 2,
            border: "1px solid #dbdbdb",
            borderRadius: 1,
          }}
          type="email"
        />
        <Input
          label="Full Name"
            onChange={handleChange}
          value={values.fullname}
          name='fullname'
          sx={{
            width: "100%",
            background: "#FAFAFA",
            marginBottom: 2,
            border: "1px solid #dbdbdb",
            borderRadius: 1,
          }}
          type="Text"
        />
        <Input
          label="Username"
          onChange={handleChange}
          value={values.username}
          name='username'
          sx={{
            width: "100%",
            background: "#FAFAFA",
            marginBottom: 2,
            border: "1px solid #dbdbdb",
            borderRadius: 1,
          }}
          type="text"
        />
        <Input
          onChange={handleChange}
          value={values.password}
          name='password'
          label="Password"
          type="password"
          sx={{
            width: "100%",
            background: "#FAFAFA",
            border: "1px solid #dbdbdb",
            borderRadius: 1,
          }}
        />
         <Button
          disabled={!values.email || !values.password||!values.fullname||!values.username}
          onClick={handleSignup}
          label={loading?<CircularProgress
            sx={{color:'white'}}
            size={22}/>:'Sign Up'}
          sx={{
            width: "100%",
            marginTop: 3,
            background: "#0095F6",
            fontWeight: "bold",
            border: "none",
          }}
        />
      </AuthCard>
      <AuthCard sx={{ marginTop: 2, textAlign: "center", padding: 3,border:"1px solid #dbdbdb" }}>
        <p style={{ fontSize: 19 }}>
          Have an account?{" "}
          <Lnk to="/">
            <Link
              sx={{
                color: "#0095F6",
                cursor: "pointer",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Login
            </Link>
          </Lnk>
        </p>
      </AuthCard>
    </Box>
  );
}

export default Signup;
