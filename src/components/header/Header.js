import React, {Component} from 'react';
import styled             from 'styled-components';
import HeaderTop from './HeaderTop';
import HeaderDown from './HeaderDown';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <HeaderTop />
        <HeaderDown />
      </Wrapper>
    );
  }
}

export default Header;