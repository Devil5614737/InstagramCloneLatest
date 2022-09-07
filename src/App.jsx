import React, { Suspense ,useEffect, useState} from 'react';
import {AuthContext} from './context/AuthContext';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/Login'
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import { PostContextProvider } from './context/PostContext';
import { ThemeContextProvider } from './context/ThemeContext';
import { HomeSkeleton } from './skeletons/HomeSkeleton';
import jwtDecode from "jwt-decode";
import storage from "./storage/storage";


function App() {
  const navigate=useNavigate()
  const [currentUser, setCurrentUser] = useState();
  const [userProfile, setUserProfile] = useState();
  const [isAuth, setIsAuth] = useState(storage.getData()?true:false);

  const Home = React.lazy(() => import('./pages/Home'));

  useEffect(() => {
    const token = storage.getData();
    if (token) {
      setCurrentUser(jwtDecode(token));
    }
  }, []);


  return (
  <>
 <ThemeContextProvider>
 <AuthContext.Provider
   value={{
    currentUser,
    setCurrentUser,
    userProfile,
    setUserProfile,
    isAuth,
    setIsAuth,
  }}
 >
  <PostContextProvider>
  <Routes>
 
    <Route path='/signup' element={<Signup/>}/>
    {isAuth?
    <Route path='/home' element={isAuth?
<Suspense fallback={<HomeSkeleton/>}>
  <Home/>
</Suspense>
:navigate('/')
    }/>:
    <Route path='/' element={<Login/>}/>
    }
     <Route path='/' element={<Login/>}/>
    <Route path='/profile' element={<Profile/>}/>
  </Routes>
  </PostContextProvider>
  </AuthContext.Provider>
 </ThemeContextProvider>
  </>
  )
}

export default App