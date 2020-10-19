import React, { Component } from 'react';
import Aux from './../../hoc/Auxil/Auxil';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from '../../containers/Home/Home';
import Resources from '../../containers/Resources/Resources';
import Footer from './../UI/Footer/Footer';
import WorkUnderProgress from './../../containers/Work_under_progress';
class Layout extends Component {
  
  render() {
    return (
      <Aux>
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
