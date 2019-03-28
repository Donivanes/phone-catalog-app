import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PhoneListContainer from './container/PhoneListContainer';
import PhoneDetailComponent from './components/PhoneDetail';

const App = () => (
  <Switch>
    <Route exact path="/" component={PhoneListContainer} />
    <Route exact path="/phoneDetail" component={PhoneDetailComponent} />
  </Switch>);

export default App;
