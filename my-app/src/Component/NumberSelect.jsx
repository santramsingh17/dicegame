
import styled from 'styled-components'
const NumberSelect = ({error,selected,setselected}) => {


    const arrNumber=[1,2,3,4,5,6];
   
  
   

  return (
    <Numberselector>
     <p className='error'>{error}</p>
     <div className='flex'>
     {
        arrNumber.map((value,index)=>(
            <Box 
              isSelectednum={value === selected}
            
             key={index} onClick={()=>setselected(value)}>{value}</Box>


        ))

     }
     </div>
     <p>Select Number</p>
    </Numberselector>
  );
}

export default NumberSelect
 

const Numberselector=styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: end;
   

     .flex{
        display: flex;
        gap: 24px;
     } 
     p{
        font-size: 24px;
        font-weight: 700px;

     } 
     .error{
      color: blue;
     }

`;


const Box =styled.div`

height:72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: centre;
text-align: center;
cursor: pointer;
align-items: center;
background-color: ${(props)=>(props.isSelectednum?"black ":"white")};
color: ${(props)=>(props.isSelectednum?"white ":"black")};
`;