import { useState } from "react";

//imported 3rd Party libraries
import styled from "styled-components"

const Wrapper = styled.div`
  padding : 170px 670px;
  // display : flex;
  align-items : center
`;

const Input = styled.input`
  border-radius : 5px;
  border : 1px solid #00000;
`;

const AlertCnt = styled.div`
  //padding : 170px 270px;
  height : 300px;
`;

const P = styled.p`
  color : red;
  //font-size: 28px;
  font-weight : bold;
`;

const App = () => {

  const [isCapsLockOn, setIsCapsLockOn] = useState(false);

  //fn to check if capslock is ON
  const checkCapsLock = (event) => {
    if (event.getModifierState("CapsLock")) {
      setIsCapsLockOn(true);
    } else {
      setIsCapsLockOn(false);
    }
  };


  return (
    <Wrapper>
      <h3>CapsLock Detection</h3>
      <Input
        type="text"
        onKeyUp={checkCapsLock}
        placeholder = "Enter text here"
       />

       {/* Display Message if Caps Lock is on */}
      <AlertCnt>
        { isCapsLockOn && (
           <P>
              Warning: CapsLock On
           </P>
         )
        }
      </AlertCnt>
    </Wrapper>

  );
}

export default App;
