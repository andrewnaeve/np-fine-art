import React, { Component } from 'react';
import { Menu } from './NavMenu';
import { Spring } from 'react-spring';

class MobileNav extends Component {
  state = {
    open: false
  };
  _toggleDrawer = this._toggleDrawer.bind(this);

  render() {
    let { open } = this.state;

    const isOpen = {
      x: open ? 10 : 290,
      opacity: open ? 1 : 0
    };

    return (
      <Spring to={isOpen}>
        {interpolatingStyle => (
          <Menu interpolatingStyle={interpolatingStyle} toggleDrawer={this._toggleDrawer} />
        )}
      </Spring>
    );
  }
  _toggleDrawer() {
    this.setState(({ open }) => ({
      open: !open
    }));
  }
}

export default MobileNav;
