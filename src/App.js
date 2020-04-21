import React from 'react';
import Nav from "./Components/Nav"
import { HashRouter as Router , Switch, Route } from 'react-router-dom'
import Home from "./Components/Home"
import  Countries from "./Components/Countries"
import CountryInfo from "./Components/CountryInfo"
import Maps from './Components/Maps'
import './App.css';
import About from './Components/About';

function App() {
  return (
<Router>
    <div className="App">
        <Nav/>
        <Switch>
                <Route path="/" exact component={Home}  />
                <Route path="/Countries" component={Countries} />
                <Route path="/About" component={About}/>
                <Route path="/Maps" component={Maps}/>
                <Route path='/CountryInfo/:id'
                    component=   {CountryInfo}/>
            </Switch>
     </div>
</Router>
  );
}

export default App;
