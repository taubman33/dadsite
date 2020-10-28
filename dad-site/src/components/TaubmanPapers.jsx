import React from 'react'
import KW from './assets/photos/Family/KopfWed.jpg'
import PK from './assets/photos/Family/PeppiKopf.jpg'
import SK from './assets/photos/Family/SolKopf.jpg'



function TaubmanPapers (){
return (
<div className = "photos-containter">
<h2> Newspaper articles</h2>
              
<div className = "photos">
       
        
        <img src={KW} className="familyPhoto"  alt="photo"/>
        <h2>  Kopf Wedding in the News</h2>
        </div>

                
        <div className = "photos">
        <img src={PK} className="familyPhoto"  alt="photo"/>
        <h2> Peppi Kopf Obituary </h2>
        </div>

                
        <div className = "photos">
        <img src={SK} className="familyPhoto"  alt="photo"/>
        <h2> Solomon Kopf obituary </h2>
        </div>
 
</div>

    )
}

export default TaubmanPapers