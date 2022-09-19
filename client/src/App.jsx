import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { getRequest } from './components/tools/FetchTypes';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Room } from './components/Room';
import { Root } from './components/Root';
import { Signup } from './components/Signup';
import { UserProvider } from './components/tools/Hooks';
import { BoxForm } from './components/BoxForm';

function App() {

  const [rooms, setRooms] = useState([])
  const [boxes, setBoxes] = useState([])

  useEffect(()=>{getRequest('/boxes', setBoxes)}, [])
  useEffect(()=>{getRequest('/rooms', setRooms)}, [])

  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path="*" element={<h1>404 Not Found</h1>}/>
        <Route index element={<Root rooms={rooms}/>}/>
        <Route path="login" element={<Login />}/>
        <Route path="signup" element={<Signup />}/>
        <Route path="new-box" element={<BoxForm boxes={boxes} setBoxes={setBoxes}/>}/>
        <Route path={":room"} element={<Room boxes={boxes}/>}/>
      </Routes>
    </UserProvider>
  );
}

export default App;
