import React, {Component} from 'react';
import styled             from 'styled-components';
import Img from '../../assets/triangle.svg';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: 40px;
  Height: 7px;
  bottom: -7px;
  left: 50%;
  transform: translateX(-50%);
`;

const Icon = styled.div`
  width: 40px;
  Height: 7px;
  background-image: url('${Img}');
  background-repeat: no-repeat;
`;

class Triangle extends Component {
  render() {
    return (
      <Wrapper>
        <Icon />
      </Wrapper>
    );
  }
}

export default Triangle;