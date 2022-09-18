import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Room } from './components/Room';
import { Root } from './components/Root';

function App() {

  const [rooms, setRooms] = useState([])
  const [boxes, setBoxes] = useState([])

  useEffect(()=>{fetch('/boxes').then(r=>r.json()).then(data=>setBoxes(data))},[])
  useEffect(()=>{fetch('/rooms').then(r=>r.json()).then(data=>setRooms(data))},[])

  return (
    <>
      <Routes>
        <Route index element={<Root rooms={rooms}/>}/>
        <Route path={":room"} element={<Room boxes={boxes}/>}/>
      </Routes>
    </>
  );
}

export default App;
