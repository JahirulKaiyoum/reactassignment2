import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route,Link
} from "react-router-dom";
import Home from './componenets/Home/Home';
import Pagenotfound from './componenets/Pagenotfound/Pagenotfound'
import Postdetails from './componenets/Postdetails/Postdetails';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route> 
        <Route exact path="/">
        <Home></Home>
        </Route> 
        <Route path="/post/:id">
          <Postdetails></Postdetails>
        </Route>
        <Route path="*">
          <Pagenotfound></Pagenotfound>
        </Route> 
      </Switch>
    </Router>
  );
}

export default App;
