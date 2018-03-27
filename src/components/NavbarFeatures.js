import React, {Component} from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'mdbreact';
import {BrowserRouter as Router} from 'react-router-dom';
import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'

class NavbarFeatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (<Router>
      <Navbar color="stylish-color" dark="dark" expand="md" scrolling="scrolling">
        <NavbarBrand href="/">
          <strong>Paper
            <span className="trader">Trader</span>
          </strong>
        </NavbarBrand>
        {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick}/>}
        <Collapse isOpen={this.state.collapse} navbar="navbar">
          <NavbarNav className="ml-auto">
            <form className="form-inline">
              <NavItem>
                <p>
                  <span id="navbar-login"><LoginModal/></span>
                  <span id="or">or</span>
                  <span id="navbar-login"><SignUpModal/></span>
                </p>
              </NavItem>
            </form>
          </NavbarNav>
        </Collapse>
      </Navbar>
    </Router>);
  }
}

export default NavbarFeatures
