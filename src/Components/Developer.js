import React, { Component } from 'react';
import sites from "../Img/Moses.jpeg"
import Footer from '../Footer'
class Skills extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <div className="skills">
                <div className="dev-content1">
                    <img src={sites} className="img1" alt=""/>
                </div>
            <div className='dev-content2'>
                <h3>About my website</h3>
            <p>I built this website using <a href="https://corona.lmao.ninja/">coronalmao api </a>
            just to let people updated over the world, Mostly about Corona Virus which is whipping our humanity. Please stay home , motivated, safe and happy. This will end. It is not going to last forever. 
           </p> 
            <button className="btn">
                <a className="links" href="https://corona.lmao.ninja">
                    Get Api Info
                </a>
            </button>
            </div>
        </div>
        <Footer/>
        </>
         );
    }
}
 
export default Skills;