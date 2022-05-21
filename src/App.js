import { Routes, Route } from "react-router-dom";
import styled, { css } from 'styled-components';
import Login from "./pages/Login";

const BaseContainer = styled.div`
height: 100vh;
background-color: #efefef;
`

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const CircleShape = styled.div`
  ${Shape}
  clip-path: circle(30% at 100% 50%);
  background-color: #000;
@media only screen and (max-width: 480px) {
display: none
}
`;



function App() {
  return (
    <BaseContainer>
      <CircleShape />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BaseContainer>
  );
}

export default App;
