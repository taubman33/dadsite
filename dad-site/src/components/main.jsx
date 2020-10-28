import React from 'react'
import { Route, Link } from 'react-router-dom'
import About from './About'
import Irving from './Irving'
import TaubmanPapers from './TaubmanPapers'
import Photos from './Photos'
import Records from './Records'
import Email from './Email'
import Navbar from './Navbar'


 function Main () {

 return (
     <div className="Main-containter">

        <div className="aside">
        <Navbar/>  
        </div>

         <div classname="Main"> 
         <Route exact path ="/" component={About}/>
         <Route exact path ="/papers" component={TaubmanPapers}/>
         <Route exact path ="/irving" component={Irving}/>
         <Route exact path ="/photos" component={Photos}/>
         <Route exact path ="/records" component={Records}/>
         <Route exact path ="/email" component={Email}/>
       
         </div>
  
     </div>
 )

}

export default Main