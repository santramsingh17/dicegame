
import { useState } from 'react';
import './App.css';
import StartGame from './Component/StartGame';
import Game from './Component/Game';









function App() {


  const [gamestart,setgamestart ]= useState(false);

  
  const toggle =()=> {

    setgamestart((prev)=>!prev);

  };



  return (
   <>
  {
   gamestart?<Game/>:<StartGame togle={toggle}/> 
  }
    

   </>
  );
}

export default App;
