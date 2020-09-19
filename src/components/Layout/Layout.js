import React, { Component } from 'react';
import Aux from './../../hoc/Auxil/Auxil';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from '../../containers/Home/Home';
import Resources from '../../containers/Resources/Resources';
import NavBar from './../UI/NavBar/NavBar';
class Layout extends Component {
  render() {
    return (
      <Aux>
        <NavBar />
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/resources" exact component={Resources} />
          </Switch>
        </div>
        {/* <Footer /> */}
      </Aux>
    );
  }
}
export default withRouter(Layout);
