import React, { Component } from 'react';
import Data from './Data'
import Head from './Head'
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const time = new Date()
        return ( 
            <>
            <div className="hero">
                 <div className="hero-clipped">
                <div className="hero-textbox">
                    <h5 className="sub-heading">Corona Virus updates</h5>
                    <span className="span">
                     <p>New Updates</p>
                       <p className="time">
                     {time.toDateString()}
                    </p>
                    </span>
                </div>
            </div>
            </div>
            <Head/>
             <Data/>
            </>
         );
    }
}
 
export default Main;