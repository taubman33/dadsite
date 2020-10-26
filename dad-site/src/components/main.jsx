import React from 'react'
import { Route, Link } from 'react-router-dom'
import About from './About'
import Irving from './Irving'
import TaubmanPapers from './TaubmanPapers'
import Photos from './Photos'


 function Main () {

 return (
     <div className="Main-containter">
         <div classname="Main">
         
         <Route exact path ="/about" component={About}/>
         <Route exact path ="/papers" component={TaubmanPapers}/>
         <Route exact path ="/irving" component={Irving}/>
         <Route exact path ="/photos" component={Photos}/>
       
         </div>
  
     </div>
 )

}

export default Main