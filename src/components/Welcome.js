import React from 'react'
import styled from 'styled-components';
import Robot from "../pages/ChatApp/assets/robot.gif";

const Welcome = ({ currentUser }) => {
  return (
    <Container>
      <img src={Robot} alt='robot' />
      <h1>Welcome, <span>{currentUser.username} !</span></h1>
      <h3>Please select a chat to Start Messaging...</h3>
    </Container>
  )
}

export default Welcome;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;