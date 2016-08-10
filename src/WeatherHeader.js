import React, { PropTypes } from 'react';
import {  Navbar, Nav, NavItem } from 'react-bootstrap'


const WeatherHeader = ({currentTemp,desc,high,low}) => (
  <Navbar inverse>
   <Navbar.Header>
     <Navbar.Brand>Minneapolis {currentTemp} - {desc}</Navbar.Brand>
   </Navbar.Header>

   <Nav pullRight>
     <NavItem>High: {high}</NavItem>
     <NavItem>Low:{low}</NavItem>
   </Nav>
  </Navbar>
  )

WeatherHeader.PropTypes = {
  currentTemp: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  high: PropTypes.number.isRequired,
  low: PropTypes.number.isRequired
}


export default WeatherHeader;
