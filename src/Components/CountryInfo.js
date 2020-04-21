import React, { Component } from 'react';
import axios from  'axios'
import {Link} from 'react-router-dom'
import Show from './Skills'
class CountryInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        single : [],
        Flags: ''
     }
    }

    componentDidMount = () =>{
        const title  = this.props.location.state.items.country;
        axios.get(`https://corona.lmao.ninja/v2/countries/${title}`)
        .then(response => {
            this.setState({single:response.data})
            this.setState({Flags:response.data.countryInfo})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() { 
        const dataList = this.state.single
        return ( 
            <React.Fragment>
                <Show/>
            <div>
        <h2>Country : {dataList.country}</h2>
           <h3>Continent : {dataList.continent}</h3>
              <img src={this.state.Flags.flag} alt=""/>
                 <h3>Country Location </h3>
                  Latitude {this.state.Flags.lat}, 
                  longitude {this.state.Flags.long}
                <table className="table">
                <tr>
                    <th>Cases</th>
                    <th>todayCases</th>
                    <th>Deaths</th>
                    <th>TodayDeaths</th>
                    <th>Recovered</th>
                    <th>Active</th>
                    <th>Critical</th>
                </tr>
                    <tr>
                        <td>{dataList.cases}</td>
                        <td>{dataList.todayCases}</td>
                        <td>{dataList.deaths}</td>
                        <td>{dataList.todayDeaths}</td>
                        <td>{dataList.recovered}</td>
                        <td>{dataList.active}</td>
                        <td>{dataList.critical}</td>
                    </tr>
            </table>
            </div>
            <div className="button-container">
               <button className="btn">
                   <Link className="links" to ="/Countries">
                        Go back to list
                   </Link>
                   </button>
               <button className="btn">
                   <Link className="links" to ="/Maps">
                        View By Maps
                   </Link>
                   </button>
            </div>
            </React.Fragment>
         );
    }
}
 
export default CountryInfo

 