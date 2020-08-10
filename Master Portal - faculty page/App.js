import React from 'react';
import {Route,withRouter,Switch} from 'react-router-dom';

import Layout from './containers/layout/layout';
import Profile from './components/profile/profile';
import Salary from './components/salary/salary';
import TimeTable from './components/timeTable/timeTable';
import Work from './components/work/work';

import './App.css';

const App=()=>{

  return (
    <React.Fragment>
    <Layout>
      <Switch>
        <Route path='/profile' component={Profile} />
        <Route path='/salary' component={Salary} />
        <Route path='/time-table' component={TimeTable} />
        <Route path='/work-experience' component={Work} />
      </Switch>
    </Layout> 
    </React.Fragment>
  );
}

export default withRouter(App);
