import React from 'react'
import { NavLink } from 'react-router-dom';


const link = {
  width: '100px',
  padding: '1em',
  margin: '0 6px 6px',
  background: 'blue',
  color: 'white'
}

const NavBar = () => {
  return(
    <div>
    <NavLink
    to="/allcards"
    exact
    style={link}
    activeStyle={{
      background: 'darkblue'
    }}>All Cards</NavLink>

    <NavLink
    to="/mycards"
    exact
    style={link}
    activeStyle={{
      background:'darkblue'
    }}>My Cards</NavLink>
    </div>
  )
}

export default NavBar
