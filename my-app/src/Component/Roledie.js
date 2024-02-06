
import styled from "styled-components";

const Roledie = ({
    roleDice,CurrentDice
}) => {





 
  

  return (

    <Dicecontainer>
       <div className="dice" onClick={roleDice}>
       <img src= {`/images/dice/dice_${CurrentDice}.png`}  alt="dice1"/>
      </div>
      <p>Click on dice to roll</p>

    </Dicecontainer>
   
  )
}

export default Roledie

const Dicecontainer =styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 48px;
  align-items: center;


  .dice{
    cursor: pointer;

  }
`;
