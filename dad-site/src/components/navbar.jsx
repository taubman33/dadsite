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
                  <Link to= '/papers'><h4> Documents</h4> </Link>
                  </div>

               
            </div>

          </div>
         );
       }

export default Navbar