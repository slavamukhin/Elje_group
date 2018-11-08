import React, {Component} from 'react';
import styled             from 'styled-components';
import LanguegeToggle     from '../languageToggle/LanguageToggle';
import TimeWork           from '../timeWork/TimeWork';
import Logo               from '../logo/Logo';
import SocialMedia        from '../socialMedia/SocialMedia';
import Triangle           from './Triangle';
import Container          from './Container';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 62px;
`;

const ColHeaderTop = styled.div`
  display: flex;
  width: 324px;
  @media (max-width: 950px) {
    width: 150px;
  }
`;

class HeaderTop extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <ColHeaderTop>
            <LanguegeToggle/>
            <TimeWork/>
          </ColHeaderTop>
          <Logo/>
          <SocialMedia/>
          <Triangle/>
        </Container>
      </Wrapper>
    );
  }
}

export default HeaderTop;