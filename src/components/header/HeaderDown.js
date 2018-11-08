import React, {Component} from 'react';
import styled             from 'styled-components';
import Search             from '../searsh/Search';
import Button             from '../button/Button';
import Nav                from '../nav/Nav';
import Container          from './Container';

const Wrapper = styled.div`
  display: flex;
  background-color: #3d4252
  align-items: center;
  height: 62px;
  @media (max-width: 650px) {
    display: none;
  }
`;

const ColHeaderDown = styled.div`
  display: flex;
  width: 215px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 215px;
  justify-content: flex-end;
`

class HeaderDown extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <ColHeaderDown>
            <Search/>
            <Button text='Карта'/>
          </ColHeaderDown>
          <Nav/>
          <ButtonWrapper>
            <Button text='Кабинет' count={2}/>
          </ButtonWrapper>
        </Container>
      </Wrapper>
    );
  }
}

export default HeaderDown;