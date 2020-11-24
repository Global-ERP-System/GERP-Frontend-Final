import React from 'react';
import './component/Staff/Staff.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Menu from './component/Staff/StaffMenu'
import Staff from './component/Staff/Staff'
import TemproryStaff from './component/Staff/TemproryStaff'
import PermanentStaff from './component/Staff/PermanentStaff'
import SuspendedStaff from './component/Staff/SuspendedStaff'
import LeaveStaff from './component/Staff/LeaveStaff'


function App() {
  return (
    <BrowserRouter>
      <div className="Main_Component">
        <Menu />
        <Switch>
          <Route path="/" exact component={Staff} />
          <Route path="/PermanentStaff" component={PermanentStaff} />
          <Route path="/SuspendedStaff" component={SuspendedStaff} />
          <Route path="/TemproryStaff" component={TemproryStaff} />
          <Route path="/LeaveStaff" component={LeaveStaff} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
