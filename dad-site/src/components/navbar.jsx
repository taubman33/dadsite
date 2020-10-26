import React  from 'react'
import { Link } from 'react-router-dom'


function Navbar (props) {
        return (
          <div className="nav">

           
            <div className="headerContainer">
                  <div className="navbar-link">
                  <Link to= '/about'><h4> About</h4> </Link>
                  </div>

                  <div className="navbar-link">
                  <Link to= '/papers'><h4> Papers</h4> </Link>
                  </div>

                  <div className="navbar-link">
                  <Link to= '/irving'><h4> Irving Kopf</h4> </Link>
                  </div>

                  <div className="navbar-link">
                  <Link to= '/photos'><h4> Family Photos</h4> </Link>
                  </div>
               
            </div>

          </div>
         );
       }

export default Navbar