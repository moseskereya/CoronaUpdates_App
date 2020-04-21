import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="search">
                  <h2>List of Countries with all categories details </h2>
                  <Link to = "/Maps">
                     <h4>View by Map</h4>
                  </Link>
            </div>
         );
    }
}
 
export default Search;