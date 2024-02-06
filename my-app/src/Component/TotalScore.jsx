import React from 'react'
import styled from 'styled-components'

const TotalScore = ({Score}) => {
    return (
        <main>
          <ScoreContainer>
            <h1>{Score}</h1>
            <p>total score</p>
          </ScoreContainer>
        </main>
      )
    }


export default TotalScore
const ScoreContainer =styled.div`
   
     max-width: 200px;
     text-align: center;
   h1{
     font-size: 100px;
     font-size: 100px;

   }
   p{
    font-size: 24px;
    font-weight: 500px;
   }

`;