import React, {Component} from 'react';
import styled             from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  font-family: 'Navigo-Bold', serif;
  font-size: 11px;
  font-weight: 700;
  margin-right: 48px;
`;

const Item = styled.div`
  background-color: ${props => props.active === true ? '#3d4252' : '#fff'};
  color: ${props => props.active === true ? '#fff' : '#3d4252'};
  cursor: ${props => props.active === true ? 'default' : 'pointer'};
  height: 36px;
  width: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span`
  
`;

class LanguageToggle extends Component {
  constructor() {
    super();

    this.state = {
      language: [
        {name: 'РУС', active: true, id: 0},
        {name: 'ENG', active: false, id: 1}
      ],
    };
  }

  changeLanguage = (name, active, id) => {
    if (active) return;
    const anotherId = id === 0 ? 1 : 0;
    let activeState = Object.assign({}, this.state);
    activeState.language[id].active = true;
    activeState.language[anotherId].active = false;
    this.setState(activeState => activeState);
  };

  render() {
    const item = this.state.language.map(item =>
      <Item
        ref={item.name}
        key={item.id}
        active={item.active}
        onClick={() => this.changeLanguage(item.name, item.active, item.id)}
      ><Text>{item.name}</Text></Item>);
    return (
      <Wrapper>
        {item}
      </Wrapper>
    );
  }
}

export default LanguageToggle;