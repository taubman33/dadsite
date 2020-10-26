import React from 'react'
import { Route, Link } from 'react-router-dom'
import About from './About'
import TaubmanPapers from './TaubmanPapers'


 function Main () {

 return (
     <div className="Main">
         <h2> Main</h2>
         <p> Here are where the photos are going to go</p>
         <Route exact path ="/about" component={About}/>
         <Route exact path ="/papers" component={TaubmanPapers}/>
       

  
     </div>
 )

}

export default Main