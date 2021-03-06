import React  from 'react'
import { Link } from 'react-router-dom'


function Navbar (props) {
  return (
  <div className="navbar-container">
        <div className= "navbar">

          <div className="Link-text">
          <h4 style={{textDecoration:"underline"}}> Links to Pictures and Information</h4>
          </div>


                  <div className="navbar-link">
                  <Link to= '/'><h4> • Home</h4> </Link>
                  </div>
            
                  <div className="navbar-link">
                  <Link to= '/photos'><h4> • Family Photos</h4> </Link>
                  </div>
               
                  <div className="navbar-link">
                  <Link to= '/records'><h4> • Family Records</h4> </Link>
                  </div>


                  <div className="navbar-link">
                  <Link to= '/irving'><h4> • Irving and Rae Kopf</h4> </Link>
                  </div>


                  <div className="navbar-link">
                  <Link to= '/papers'><h4> • Newspapers</h4> </Link>
                  </div>

                  <div className="navbar-link">
                  <Link to= '/email'><h4> • Email Correspondence</h4> </Link>
                  </div>

            </div>

          </div>
         );
       }

export default Navbar