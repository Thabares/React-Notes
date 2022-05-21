import { Routes, Route, Navigate } from "react-router-dom";
import styled, { css } from 'styled-components';
import Home from "./pages/Home";
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
  const user = false
  return (
    <BaseContainer>
      <CircleShape />
      <Routes>
        <Route path="/" element={user ? <Navigate replace to="/home" /> : <Login />} />
        <Route path="/home" element={!user ? <Navigate replace to="/" /> : <Home />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BaseContainer>
  );
}

export default App;
