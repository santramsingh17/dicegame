import {useState} from 'react'
import TotalScore from './TotalScore'
import NumberSelect from './NumberSelect'
import styled from 'styled-components';
import Roledie from './Roledie';







const Game = () => {

    const[Score,setScore]=useState(0);
   const[selected,setSelected]=useState();
    const[CurrentDice , setCurrentDice]=useState(1);
    const[error,setError]=useState("");
   
     
    const generateRandomNumber =(min, max)=> {
        
        return Math.floor(Math.random() * (max - min) + min);
      }
    
    
      const roleDice =()=>{
         const randomNumber=generateRandomNumber(1,7);
         setCurrentDice((prev)=>randomNumber);
         
         if(!selected){
            setError("you have not selected any number")
            return;
         }
         setError("");
          
         
          if(selected===randomNumber){
            setScore((prev)=>prev+randomNumber)
            
           
          }
         else{
             setScore((prev)=>prev-2)
         }
           setSelected(undefined)
        
      }


  return (
 

      <Mainsection>
        <div className='Topsection'>

        
       <TotalScore Score={Score}/>
       <NumberSelect
         error={error}
        selected={selected}
        setselected={setSelected}
       />
       </div>
       <Roledie

        CurrentDice={CurrentDice}
        roleDice={roleDice}
        


       />
     

       <div className='btns'>
        <button onClick={(prev)=>setScore(0)}>Reset</button> 
    
       
       </div>
      
        
       </Mainsection>
     
  );
};

export default Game



const Mainsection=styled.div`
  .Topsection  {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
    display: flex;
    flex-direction: column;
    padding: 10px 18px;
   max-width: 100px;
   justify-content: center;
   align-items: center;
   justify-content: center;
  margin-left: 660px;
   gap: 10px;
   
   border: none;
    font-size: 16px;
border: 1px solid transparent;
transition: 0.4s background ease-in;
cursor: pointer;

&:hover{
    background-color: white;
    border : 1 px solid black;
    color: black;
    transition: 0.4s background ease-in;
}

  }

`;