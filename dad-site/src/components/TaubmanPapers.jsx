import React from 'react'
import LN1 from './assets/photos/TaubmanPaperwork/IMG_0267.jpg'
import LN2 from './assets/photos/TaubmanPaperwork/IMG_0268.jpg'
import LN3 from './assets/photos/TaubmanPaperwork/IMG_0269.jpg'

function TaubmanPapers (){
return (
<div className = "photos-containter">
        
        <img src={LN1} className="familyPhoto"  alt="photo"/>
        <img src={LN2} className="familyPhoto"  alt="photo"/>
        <img src={LN3} className="familyPhoto"  alt="photo"/>

</div>

    )
}

export default TaubmanPapers