import React, {Component} from 'react';
import styled             from 'styled-components';
import Img from '../../assets/logotype_dark.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ImgLogo = styled.div`
  background-image: url('${Img}');
  background-repeat: no-repeat;
  width: 186px;
  height: 24px;
`;

class Logo extends Component {
  render() {
    return (
      <Wrapper>
        <ImgLogo/>
      </Wrapper>
    );
  }
}

export default Logo;