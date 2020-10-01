import React, { Component } from 'react';
import Aux from './../../hoc/Auxil/Auxil';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from '../../containers/Home/Home';
import Resources from '../../containers/Resources/Resources';
// import NavBar from './../UI/NavBar/NavBar';
import Footer from './../UI/Footer/Footer';
import Sidedrawer from './../UI/SideDrawer/SideDrawer';
import WorkUnderProgress from './../../containers/Work_under_progress';
class Layout extends Component {
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
        {/* <NavBar clicked={this.showSideDrawer} />
        <Sidedrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        /> */}
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/resources" exact component={Resources} />
            <Route path="/research" exact component={WorkUnderProgress} />
            <Route path="/alumni" exact component={WorkUnderProgress} />
          </Switch>
        </div>
        <Footer />
      </Aux>
    );
  }
}
export default withRouter(Layout);
