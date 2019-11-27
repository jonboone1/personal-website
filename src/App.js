import React from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/index';
import Blog from './pages/blog'
import Blog2 from './pages/blog2'
import Blog3 from './pages/blog3'
function App() {  	
  return (    
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' component={Home} ></Route>
        <Route path='/blog' component={Blog} ></Route>
        <Route path='/blog2' component={Blog2} ></Route>
        <Route path='/blog3' component={Blog3} ></Route>
      </Switch>
    </Router>   
  );  
}
export default App;