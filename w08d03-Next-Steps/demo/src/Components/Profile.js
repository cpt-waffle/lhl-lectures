import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  background-color: orange;
  color: purple;
  font-size: 35px;
  border-radius: 50%;
`

const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
  border: 3px solid lavender;
  border-radius: 50%;
`



class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Title width={'120px'}>Profile</Title>
        <ProfileImg src="https://i.pinimg.com/originals/ca/c6/70/cac670991d812075a1df29804f084324.jpg"/>
      </div>

    );
  }

}


export default Profile




