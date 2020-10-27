import React  from 'react'
import home1 from './assets/photos/Family/home1.jpg'

function About (){
    return(
        
        <div className="Main"
        style={{height:"100vh"}}>
<h2> Welcome to our collection of family artifacts and photographs from the 19th and 20th centuries </h2>


<div className = "photos">
        <img src={home1} className="familyPhoto"  alt="photo"/>
        <h2>Family outside of the Rio Grande restaurant in Murray Hill, NYC </h2>
        </div>
</div>
    )
}

export default About