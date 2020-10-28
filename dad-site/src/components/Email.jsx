import React from 'react'
import Email1 from './assets/photos/Batch2/email1.jpg'
import Email2 from './assets/photos/Batch2/email2.jpg'
import Email3 from './assets/photos/Batch2/email3.png'
import Email4 from './assets/photos/Batch2/email4.jpg'
import Email5 from './assets/photos/Batch2/email5.jpg'
import Email6 from './assets/photos/Batch2/email6.jpg'


function Email () {
    return(
  <div className = "emails"
  style={{marginTop:"3rem"}}>
      <h2> Email Correspondence</h2>

        <div className = "photos">
        <img src={Email3} className="familyPhoto"  alt="photo"/>
        <h2> History of Taubman family in Europe </h2>
        </div>


        <div className = "photos">
        <img src={Email1} className="familyPhoto"  alt="photo"/>
        <h2> Information on Clara </h2>
        </div>

        <div className = "photos">
        <img src={Email2} className="familyPhoto"  alt="photo"/>
        <h2> Information on Louis and others </h2>
        </div>


        <div className = "photos">
        <img src={Email4} className="familyPhoto"  alt="photo"/>
        <h2> History of Taubman family in Europe </h2>
        </div>
       
        <div className = "photos">
        <img src={Email6} className="familyPhoto"  alt="photo"/>
        <h2> Information on Louis Kopf </h2>
        </div>

        <div className = "photos">
        <img src={Email5} className="familyPhoto"  alt="photo"/>
        <h2> Information on Sam Rosenthal and family </h2>
        </div>

       

  </div>

    )
}

export default Email