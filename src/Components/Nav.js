import React, { Component } from 'react';
import {Link} from "react-router-dom"
class Nav extends Component {
    state = {  }
    render() { 
        return ( 
            <nav>
                <div className="title">
                    App
                </div>
                <ul>
                    <Link className="links" to='/'>
                      <li>Home</li>
                    </Link>
                    <Link className="links" to = "/About">
                    <li>About</li>
                    </Link>
                    <Link className="links" to= "/Countries">
                      <li>Live Updates</li>
                   </Link>
                   <Link className="links" to= "/Maps">
                      <li>Map</li>
                   </Link>
                </ul>
            </nav>
         );
    }
}
 
export default Nav;