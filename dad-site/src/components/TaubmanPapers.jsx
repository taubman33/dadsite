import React from 'react'
import LN1 from './assets/photos/TaubmanPaperwork/IMG_0267.jpg'
import LN2 from './assets/photos/TaubmanPaperwork/IMG_0268.jpg'
import LN3 from './assets/photos/TaubmanPaperwork/IMG_0269.jpg'
import Louis from './assets/photos/TaubmanPaperwork/Louis.png'

function TaubmanPapers (){
return (
<div className = "photos-containter">
        
      
        <div className = "photos">
            <img src={LN1} className="familyPhoto"  alt="photo"/>
            <h2>Louis Kopf</h2>
        </div>
        <div className = "photos">
            <img src={LN2} className="familyPhoto"  alt="photo"/>
            <h2>Louis Kopf</h2>
        </div>
        <div className = "photos">
            <img src={LN3} className="familyPhoto"  alt="photo"/>
            <h2>Louis Kopf</h2>
        </div>
        <div className = "photos">
            <img src={Louis} className="familyPhoto"  alt="photo"/>
            <h2>Louis Kopf</h2>
        </div>

</div>

    )
}

export default TaubmanPapers