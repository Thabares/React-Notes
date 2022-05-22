import styled, { css } from 'styled-components';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LogoutIcon from '@mui/icons-material/Logout';

const NavbarContainer = styled.div`
height: 60px;
// background-image: linear-gradient(75deg,#cfcfcf 10%,#1d1d1d 30%);
background-image: linear-gradient(15deg,#1d1d1d 30%,#cecece 100%);
position: relative;
z-index: 2;
display: flex;
padding: 0px 20px;
align-items: center;
`

const MenuIconContainer = styled.div`
flex: 1;
color: #fff;
`

const LogoutContainer = styled.div`
color: #000;
`

const Navbar = () => {
    return (
        <NavbarContainer>
            <MenuIconContainer>
                <MenuBookIcon />
            </MenuIconContainer>
            <LogoutContainer>
                <LogoutIcon />
            </LogoutContainer>
        </NavbarContainer>
    )
}


export default Navbar