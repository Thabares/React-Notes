import styled, { css } from 'styled-components';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from 'react';

const LoginContainer = styled.div`
display: flex;
height: 100vh;
justify-content: space-around;
align-items: center;
@media only screen and (max-width: 480px) {
flex-direction: column;
justify-content: center;
}
`;

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
  @media only screen and (max-width: 480px) {
      background-color: #000;
        clip-path: circle(31% at 0 35%);
  }
`;

const MobileCircleShape = styled.div`
${Shape}
@media only screen and (max-width: 480px) {
  background-color: #000;
  clip-path: circle(31% at 100% 75%)
}
`

const LoginCard = styled.div`
border-radius: 10px;
height: 400px;
background-color: #fff;
width: 450px;
position: relative;
margin-right: 20px;
z-index: 2;
@media only screen and (max-width: 480px) {
  width: 100%;
  margin-right: 0px;
}


`
const LoginHeader = styled.div`
display: flex;
justify-content: space-between;
`

const Heading5 = styled.h4`
font-size: 2rem;
text-align: left;
margin: 20px 0px;
cursor: pointer;
text-decoration: ${(props) => props.textStyle && 'underline'};
text-decoration-color: #000;
`

const LoginBody = styled.div``

const InputLabel = styled.label`
font-size: 15px;
`

const Form = styled.form`
`

const InputContainer = styled.div`
margin-top: 1rem;
`

const InputTextField = styled.input`
margin-top: 1rem;
width: 90%;
height: 35px;
display: block;


`

const ButtonContainer = styled.div`
margin: 30px 0px;
display: flex;
justify-content: center
`

const Button = styled.button`
background-color: #000;
color: #fff;
border: none;
font-size: 14px;
font-weight: bolder;
padding: 10px;
width: 150px;
border-radius: 5px;
cursor: pointer;
`
const BouncingCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #000;
  animation: bounce 0.5s;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(.5, 0.05, 1, .5);
  animation-iteration-count: infinite;
  z-index: 1;
  @keyframes bounce {
    from {
        transform: translate3d(0, -200px, 0);
    }
    to {
        transform: translate3d(0, 200px, 0);
    }
  }
  -webkit-animation-name: bounce;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-direction: alternate;
  -webkit-animation-timing-function: cubic-bezier(.5, 0.05, 1, .5);
  -webkit-animation-iteration-count: infinite;
  @-webkit-keyframes bounce {
    from {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
    to {
        -webkit-transform: translate3d(0, -200px, 0);
        transform: translate3d(0, -200px, 0);
    }
  }

  @media only screen and (max-width: 480px) {
  display: none;
  }

`;
const DesktopShapeContainer = styled.div`
@media only screen and (max-width: 480px) {
position: fixed;
}
`

const LoginSubContainer = styled.div`
margin: 2rem;
`


const Login = () => {
    const [formFields, setFormFields] = useState({ cardView: "login", email: "", password: "" })

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formFields)
    }

    return (
        <LoginContainer >
            <MobileCircleShape />
            <CircleShape />
            <DesktopShapeContainer>
                <BouncingCircle />
            </DesktopShapeContainer>
            <LoginCard>
                <LoginSubContainer>
                    <LoginHeader>
                        <Heading5 textStyle={formFields.cardView === "login"} onClick={() => setFormFields({ ...formFields, cardView: "login" })}>Login <LoginIcon /></Heading5>
                        <Heading5 textStyle={formFields.cardView === "register"} onClick={() => setFormFields({ ...formFields, cardView: "register" })}>Register <PersonAddAltIcon /></Heading5>
                    </LoginHeader>
                    <LoginBody>
                        <Form autoComplete="off" onSubmit={handleSubmit}>
                            <InputContainer>
                                <InputLabel htmlFor="email">Email:</InputLabel>
                                <InputTextField type="email" value={formFields.email} id="email" required name="email" onChange={(e) => setFormFields({ ...formFields, email: e.target.value })} />
                            </InputContainer>
                            <InputContainer>
                                <InputLabel htmlFor="password">Password:</InputLabel>
                                <InputTextField type="password" value={formFields.password} id="password" required name="password" onChange={(e) => setFormFields({ ...formFields, password: e.target.value })} />
                            </InputContainer>
                            <ButtonContainer>
                                <Button type="submit">Submit</Button>
                            </ButtonContainer>
                        </Form>

                    </LoginBody>
                </LoginSubContainer>
            </LoginCard>
        </LoginContainer>
    )

}

export default Login