import React, {Component} from 'react';
import styled             from 'styled-components';

function ElemItem(props) {
  return <Item href={props.item.href}>{props.item.name}</Item>
}

const Wrapper = styled.div`
  display: flex;
  width: 745px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1230px){
    display: none;
  }
`;

const Item = styled.a`
  text-decoration: none;
  font-family: 'Navigo-Bold', serif;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
`;

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      shops: {
        id: 0,
        name: 'Магазины',
        href: '#shops',
      },
      restaurants: {
        id: 1,
        name: 'Рестораны',
        href: '#restaurants',
      },
      entertainments: {
        id: 2,
        name: 'Развлечения',
        href: '#entertainments',
      },
      children: {
        id: 3,
        name: 'Дети',
        href: '#children',
      },
      amenities: {
        id: 4,
        name: 'Услуги',
        href: '#amenities',
      },
      stock: {
        id: 5,
        name: 'Акции',
        href: '#stock',
      },
      news: {
        id: 6,
        name: 'Новости',
        href: '#news',
      },
      events: {
        id: 7,
        name: 'Мероприятия',
        href: '#events',
      },
      blog: {
        id: 8,
        name: 'Блог',
        href: '#blog',
      },
    }
  }

  render() {
    const itemArray = Object.keys(this.state);
    const items = itemArray.map(item => <ElemItem key={this.state[`${item}`].id} item={this.state[`${item}`]}/>);
    return (
      <Wrapper>
        {items}
      </Wrapper>
    );
  }
}

export default Nav;