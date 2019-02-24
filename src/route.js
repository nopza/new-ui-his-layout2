import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './Page/Register/Register';
import Home from './Page/Home';
import Examination from './Page/OPD/Examination';
import ExamDoctor from './Page/OPD/ExamDoctor';
import Dispensing from './Page/OPD/Dispensing';
import Xray from './Page/Xray';
import Finance from './Page/Finance';
import Manage from './Page/Manage';
import SendPatient from './Page/SendPatient/SendPatient';
import Login from './Page/Login/login';
import Location from './Page/Login/location';




class Routing extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/location" component={Location} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/examination" component={Examination} />
        <Route exact path="/examdoctor" component={ExamDoctor} />
        <Route exact path="/dispensing" component={Dispensing} />
        <Route exact path="/xray" component={Xray} />
        <Route exact path="/finance" component={Finance} />
        <Route exact path="/manage" component={Manage} />
        <Route exact path="/sendpatient" component={SendPatient} />



      </Switch>

    );
  }
}

export default Routing;