import React, { Component } from 'react';
import NavBar from './../components/UI/NavBar/NavBar';
import Sidedrawer from './../components/UI/SideDrawer/SideDrawer';
import Aux from './../hoc/Auxil/Auxil';
class NavControls extends Component {
  state = {
    showSideDrawer: false,
  };
  showSideDrawer = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  render() {
    return (
      <Aux>
        <NavBar clicked={this.showSideDrawer} />
        <Sidedrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
      </Aux>
    );
  }
}
export default NavControls;
