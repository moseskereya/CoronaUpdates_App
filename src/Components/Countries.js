import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import Show from "./Skills"
import Data from '../Search'
class Country extends Component {
    constructor(props) {
        super(props);
        this.state = { countries: [] }
    }

    componentDidMount = () =>{
        axios.get('https://corona.lmao.ninja/v2/countries')
        .then(res =>{
            this.setState({countries:res.data})
            console.log(this.state)
        })
        .catch( error =>{
            console.log(error)
        })
    }

    render() {
        const results = this.state.countries
        return ( 
            <div>
                <Show/>
                <div>
                    <Data/>
                </div>
                 
                
            <table className="table">
                <tr>
                    <th>Name</th>
                    <th>Cases</th>
                    <th>todayCases</th>
                    <th>Deaths</th>
                    <th>TodayDeaths</th>
                    <th>Recovered</th>
                    <th>Active</th>
                    <th>Critical</th>
                </tr>
                {results.map(items  =>{
                    return(
                        <tr>
                            <td>
                             <Link  to = {
                                 {pathname 
                                    :`/CountryInfo/${items.country}`, 
                                 state:{items}}}>
                                 {items.country}
                                </Link>
                              </td>
                            <td className="red">{items.cases}</td>
                            <td>{items.todayCases}</td>
                            <td className='red'>{items.deaths}</td>
                            <td>{items.todayDeaths}</td>
                            <td>{items.recovered}</td>
                            <td>{items.active}</td>
                            <td className="red">{items.critical}</td>
                        </tr>
          
                    )
                })}
            </table>
            </div>
         );
    }
}
 
export default Country;