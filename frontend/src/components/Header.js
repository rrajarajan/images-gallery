import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import {ReactComponent as Logo} from '../images/logo.svg'

const navbarStyle = {
    backgroundColor: '#C8472C'
}

const Header = ({title}) => {
  return (
      <Navbar style={navbarStyle} data-bs-theme="light">
        <Container>
          <Logo style= {{maxWidth:'12rem', maxHeight:'2rem'}}/>
        </Container>
      </Navbar>
  )
}

export default Header