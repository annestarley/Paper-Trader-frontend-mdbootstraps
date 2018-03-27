import React from 'react'
import {Container} from 'mdbreact'

const Footer = () => {
  return (
    <div id="footer">
      <p>Created by <a href="https://github.com/chaogoesmu" id="name-link">Cullen Ogilvie</a> and <a href="https://github.com/annestarley" id="name-link">Anne Starley</a></p>
      <Container fluid>
          &copy; {(new Date().getFullYear())} Copyright: <a href="#"> oursite.com </a>
      </Container>
    </div>
  )
}

export default Footer
