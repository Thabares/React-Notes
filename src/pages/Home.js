import styled, { css } from 'styled-components';
import Content from './Content';
import Navbar from './Navbar';

const HomeContainer = styled.div``

const Home = () => {
    return (
        <HomeContainer>
            <Navbar />
            <Content />
        </HomeContainer>
    )
}

export default Home

