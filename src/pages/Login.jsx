import { Box, CardMedia, CircularProgress, Link } from "@mui/material";
import React, { useContext,useState } from "react";
import { AuthCard } from "../components/AuthCard";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Link as Lnk, useNavigate } from "react-router-dom";
import Storage from '../storage/storage'
import Auth from '../api/auth';
import jwtDecode from "jwt-decode";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const[loading,setLoading]=useState(false);
  const navigate = useNavigate();
  const {setCurrentUser,setIsAuth}=useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async() => {
    setLoading(true)
    const result=await Auth.Login(email,password)
    if(result.status===200){
      setLoading(false)
      setIsAuth(true)
      const token=result.data
      Storage.storeData(token)
      const decoded=jwtDecode(token)
      setCurrentUser(decoded)
      navigate('/home')
    }
    if(result.status!==200){
      setLoading(false)
    }
   
  };




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
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          sx={{
            width: "100%",
            background: "#FAFAFA",
            marginBottom: 2,
            border: "1px solid #dbdbdb",
          }}
        />
        <Input
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          sx={{
            width: "100%",
            background: "#FAFAFA",
            border: "1px solid #dbdbdb",
          }}
        />
        <Button
          disabled={!email || !password}
          onClick={handleLogin}
          label={loading?<CircularProgress
            sx={{color:'white'}}
            size={22}/>:'Log In'}
          sx={{
            width: "100%",
            marginTop: 3,
            background: "#0095F6",
            fontWeight: "bold",
            border: "none",
          }}
        />
      </AuthCard>
      <AuthCard
        sx={{
          marginTop: 2,
          textAlign: "center",
          padding: 3,
          border: "1px solid #dbdbdb",
        }}
      >
        <p style={{ fontSize: 19 }}>
          Don't have an account?{" "}
          <Lnk to="/signup">
            <Link
              sx={{
                color: "#0095F6",
                cursor: "pointer",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Sign up
            </Link>
          </Lnk>
        </p>
      </AuthCard>
    </Box>
  );
}

export default Login;
