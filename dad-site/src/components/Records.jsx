import React from 'react'

import LN1 from './assets/photos/TaubmanPaperwork/IMG_0267.jpg'
import LN2 from './assets/photos/TaubmanPaperwork/IMG_0268.jpg'
import LN3 from './assets/photos/TaubmanPaperwork/IMG_0269.jpg'
import Louis from './assets/photos/TaubmanPaperwork/Louis.png'
import BenK from './assets/photos/Family/BenKopf.jpg'

import JenL from './assets/photos/Family/JenL.jpg'
import Lenore from './assets/photos/Family/Lenore.jpg'

import Pass1 from './assets/photos/Family/pass1.jpg'
import Sperl1 from './assets/photos/Family/SPerl.jpg'
import Sperl2 from './assets/photos/Family/Sperl2.jpg'

import Celia from './assets/photos/Batch2/Celia1.jpg'
import Esther1 from './assets/photos/Batch2/Esther1.jpg'
import Sam1 from './assets/photos/Batch2/Sam1.jpg'


function Records() {
 return (
    <div className ='app-records'
    style={{marginTop:"3rem"}}>

        <h2> Historic Family Records</h2>
        <div className="records">

        <div className = "photos">
            <img src={LN1} className="familyPhoto"  alt="photo"/>
            <h2>Origin of Taubman family name</h2>
        </div>
  
        <div className = "photos">
            <img src={LN3} className="familyPhoto"  alt="photo"/>
            <h2>History of Taubman name</h2>
        </div>
    

        <div className = "photos">
            <img src={LN2} className="familyPhoto"  alt="photo"/>
            <h2>Marriage certificate of Harry and Celia</h2>
        </div>
        <div className = "photos">
            <img src={BenK} className="familyPhoto"  alt="photo"/>
            <h2>Benjamin Kopf birth certificate</h2>
        </div>


        <div className = "photos">
            <img src={Celia} className="familyPhoto"  alt="photo"/>
            <h2>Celia's application for citizenship</h2>
        </div>

        <div className = "photos">
            <img src={Sam1} className="familyPhoto"  alt="photo"/>
            <h2>Sam Rosenthal WW1 draft form </h2>
        </div>

        <div className = "photos">
            <img src={Esther1} className="familyPhoto"  alt="photo"/>
            <h2>Esther Census Record</h2>
        </div>

        <div className = "photos">
            <img src={JenL} className="familyPhoto"  alt="photo"/>
            <h2>Jennie Lieberman Census Record</h2>
        </div>

        <div className = "photos">
            <img src={Lenore} className="familyPhoto"  alt="photo"/>
            <h2>Lenore Kopf census record</h2>
        </div>


        <div className = "photos">
            <img src={Louis} className="familyPhoto"  alt="photo"/>
            <h2>Louis Kopf Census record</h2>
        </div>

        <div className = "photos">
            <img src={Pass1} className="familyPhoto"  alt="photo"/>
            <h2>Passport info for Lowell and Celia Taubman</h2>
        </div>

        <div className = "photos">
            <img src={Sperl1} className="familyPhoto"  alt="photo"/>
            <h2>Sarah Perlitz New York passenger information</h2>
        </div>

        <div className = "photos">
            <img src={Sperl2} className="familyPhoto"  alt="photo"/>
            <h2>Sam Perltiz Social Security information</h2>
        </div>


       
        </div>
        
      
        </div>


 )
}


export default Records 