import React, { Component } from 'react';
class Footer extends Component {
    state = {  }
    render() { 
        const years = new Date()
        return ( 
            <div className='footer'>
                <div>
                    App &copy; {years.getFullYear()}
                </div>
                <div>
                    Home |
                    About | 
                    Updates
                </div>
            </div>
         );
    }
}
 
export default Footer;