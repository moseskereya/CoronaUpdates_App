import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from 'axios'
import Footer from '../Footer'
class Maps extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            stores : []
         }
    }

    componentDidMount = () =>{
        axios.get('https://corona.lmao.ninja/v2/countries')
        .then(res =>{
            console.log(res.data)
            this.setState({stores: res.data})
        })
        .catch( error =>{
            console.log(error)
        })
    }


    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
          return <Marker key={index} id={index} position={{
           lat: store.countryInfo.lat,
           lng: store.countryInfo.long
         }}
         onClick={() => console.log("You clicked me!")} />
        })
      }



    render() { 
        return ( 
            <React.Fragment>
            <Map
            google={this.props.google}
            zoom={4}
            style={mapStyles}
            initialCenter={{ lat: -6, lng: 35}}
          >
            {this.displayMarkers()}
            
          </Map>
          <Footer/>
          </React.Fragment>
         );
    }
}
 
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBiYs6RzugOo9vR_UuwWP-DSRhggdkdcsQ'
  })(Maps);

const mapStyles = {
    width: '100%',
    height: '100%',
  };