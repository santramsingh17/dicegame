import React from 'react'
import styled from 'styled-components'

const StartGame = ({togle}) => {
  return (
    <div>
      <Container>

           <div>
           <img src='/Images/dices.png' alt='GUJJAR'/>
           </div>
          
          <div className='content'>
            <h1>
                Dice Game
            </h1>
           <Button onClick={togle}>Play Now</Button>
          </div>
     
         
      </Container>
    </div>
  )
}

export default StartGame

const Container =styled.div`
  height: 100vh
  max-width: 180px;
  display: flex;
  align-items: center;


  .content {
    h1{
        font-size: 96px;
        
    }
  }

`;

const Button=styled.button`

color: white;
padding: 10px 18px;
background-color: black;
border-radius: 5px;
min-width: 220px;
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



`;


