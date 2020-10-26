import React from 'react'
import BatMitzvah from './assets/photos/TaubmanPaperwork/BatMitzvah.jpg'
import Nizhyn from './assets/photos/TaubmanPaperwork/NizhynCOA.jpg'
import Peter from './assets/photos/TaubmanPaperwork/peter.jpg'
import RW1 from './assets/photos/TaubmanPaperwork/RthalKW.jpg'
import RW2 from './assets/photos/TaubmanPaperwork/Rthalwedding1.jpg'
import UK from './assets/photos/TaubmanPaperwork/unknown1.jpg'


function Photos () {

    return (
        <div className="photos">
         <h1> Misc. Family Photos</h1>

         

         <div className = "photos">
        <img src={BatMitzvah} className="familyPhoto"  alt="photo"/>
        <h2>Lowell on Left, Arthur on right, Leslie in the middle?</h2>
        </div>

        <div className = "photos">
        <img src={Nizhyn} className="familyPhoto"  alt="photo"/>
        <h2>Coat of Arms of Nizhyn, Ukraine</h2>
        </div>

        <div className = "photos">
        <img src={Peter} className="familyPhoto"  alt="photo"/>
        <h2>Peter Kopf</h2>
        </div>

        <div className = "photos">
        <img src={RW1} className="familyPhoto"  alt="photo"/>
        <h2>Rosenthal Wedding</h2>
        </div>

        <div className = "photos">
        <img src={RW2} className="familyPhoto"  alt="photo"/>
        <h2>Another shot of Rosenthal wedding</h2>
         </div>

        <div className = "photos">
        <img src={UK} className="familyPhoto"  alt="photo"/>
        <h2>Unknown family gathering</h2>
        </div>


        </div>
    )
}

export default Photos 