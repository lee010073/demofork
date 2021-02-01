
import React from 'react'
import './App.css';
import Navbar1 from './components/Navbar/Navbar'
import Chart1 from './components/Chart1/Chart1'
import Chart2 from './components/Chart2/Chart2'
import Chart3 from './components/Chart3/Chart3'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div>
      <Router>
        <Navbar1 />
        <Switch>
          <Route path="/Chart1" component={Chart1}>
            <Chart1 />
          </Route>
          <Route path="/Chart2" component={Chart2}>
            <Chart2 />
          </Route>
          <Route path="/Chart3" component={Chart3}>
            <Chart3 />
          </Route>
        </Switch>
      </Router>
    </div >
  )
}

export default App;