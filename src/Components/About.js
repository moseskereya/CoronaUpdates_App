import React, { Component } from 'react';
import Developer  from "./Developer";
import Show from "./Skills"
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { news : [] }
    }

    render() { 
        return ( 
            <div>
              <Show/>
                 <h1 className="h1">About this Website</h1>
              <Developer/>
             </div>
         );
    }
}
 
export default Search;