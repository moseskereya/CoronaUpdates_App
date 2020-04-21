import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
class Head extends Component {
    state = {  }
    render() { 
        const time = new Date()
        return ( 
            <div className="hero">
            <div className="hero-clipped">
                <div className="hero-textbox">
                <Slide left>
                    <h1 className="main-heading">Online Updates</h1>
               </Slide>
                    <p className="time">
                        {time.toDateString()}
                    </p>
                </div>
            </div>
        </div>

         );
    }
}
 
export default Head;