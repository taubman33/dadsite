import React, { Component } from "react";
import { BrowserRouter as  Router, Route, Switch, Link } from "react-router-dom";
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import TaubmanPapers from './components/TaubmanPapers';
import About from './components/About';
import Irving from './components/Irving';
import Photos from './components/Photos';
import Records from './components/Records'
import Email from './components/Email';



const routes = [
  {
    path: "/papers",
    component: TaubmanPapers,
  },

  { path: "/",
  component: About
  },

  { path: "/email",
  component: Email
  },

  { path: "/irving",
  component: Irving
  },

  { path: "/records",
  component: Records
  },

  { path: "/photos",
   component: Photos
  }

]


class App extends Component {
  render() {
  return (

  <Router> 

    <div className="App">
    <Header/>
    <Main/>
    <Footer/>
    </div>

   </Router>    
  );
 } 
}
export default App;
