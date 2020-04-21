import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from "axios"
class Data extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            datas: []
         }
    }
    componentDidMount = () =>{
        axios.get('https://corona.lmao.ninja/v2/all')
        .then(res =>{
            this.setState({datas:res.data})
            console.log(this.state)
        })
        .catch( error =>{
            console.log(error)
        })
    }

    render() { 
        return ( 
            <div className="container">
                <div className="detail">
                    <div>
                    <h4>Reported Cases and Deaths by Country, Territory, or Conveyance</h4>
                    <p>The coronavirus COVID-19 is affecting 210 countries and territories around the world and 2 international conveyances. The day is reset after midnight GMT+0. The list of countries and territories and their continental regional classification is based on the United Nations Geoscheme. Sources are provided under "Latest Updates".</p>
                    
                         <button className="btn">
                             <Link className="links" to="/Countries">
                                 Read More
                             </Link>
                         </button>
                   
                </div>
                </div>
            <div className="data">
                <span className="spans"> 
                <h3>
                   TotalCases
                </h3>
                <p>
                  {this.state.datas.cases}
                </p>
                  </span>
                <span className="spans">
                   <h3>TodayCases</h3> 
                   <p>
                     {this.state.datas.todayCases}
                   </p>
                 </span>
                <span className="spans">
                    <h3>
                        Deaths
                    </h3>
                    <p>
                      {this.state.datas.deaths}
                    </p>
                    </span>
                <span className="spans"> 
                <h3>
                    TodayDeaths 
                </h3> 
                <p>
                  {this.state.datas.todayDeaths}
                </p>
            </span>
            <span className="spans"> 
                 <h3>Recovered</h3> 
                 <p>
                     {this.state.datas.recovered}
                 </p>
                </span>
                <span className="spans">
                    <h3>ActiveCases </h3> 
                    <p>
                       {this.state.datas.active}
                    </p>
                    </span>
                <span className="spans">
                     <h3>Critical</h3> 
                     <p>
                       {this.state.datas.critical}
                     </p>
                </span>
            </div>
            </div>
         );
    }
}
 
export default Data;