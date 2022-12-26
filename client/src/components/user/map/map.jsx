import React, { Component } from 'react'
import "leaflet/dist/leaflet.css";
import NavBar from '../../NavBar/Navbar';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Button from '@mui/material/Button';
import icon from 'leaflet/dist/images/marker.png';
import L from 'leaflet';
import { Link } from "react-router-dom";
import ChangeView from './ChangeView';
import {Card, Table, ButtonGroup, Form, Row} from 'react-bootstrap';
import EntrepriseServices from '../../../services/EntrepriseServices';
import "./container.css";
import "./leaflet.css";

let DefaultIcon = L.icon({
    iconUrl: icon,
    iconSize: [32,32]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default class map extends Component {

  constructor(props){
    super(props)

      this.state = {
          zoomLevel: 10,
          entreprise: '',
          lat: '34.022',
          lang: '-6.83762',
          entreprises : []
      }

      this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    EntrepriseServices.getEntreprises()
      .then((result) => {
        this.setState({entreprises: result.data})
      })
      .catch((err) => console.log('err : ' + err));
  }

  handleChange = (event) => {
    const ville = event.target.value;
    if(ville == 'fes'){
      this.setState({lat: '34.025935', lang: '-5.026806'});
    }else  if(ville == 'rabat'){
      this.setState({lat: '34.022', lang: '-6.83762'});
    }else{
      this.setState({lat: '33.579991', lang: '-7.627164'})
    }
  }

  render() {
    return (
      <>
        <div className="app">
          <div className="app__body">
            <div className="header">
              <div className="header__bar">
                <div className="title">
                  Recherche des Entreprises
                </div>
                <Form style={{marginLeft:'110px'}}>
                  <Row>
                    <Form.Label>Ville</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={this.handleChange} style={{marginRight:'100px'}}>
                      
                      <option value='rabat' key='1'>
                        Rabat
                      </option>
                      <option value='fes' key='2'>
                        Fes
                      </option>
                      <option value='casa' key='3'>
                        Casa
                      </option>
                    </Form.Select>
                  </Row>
                </Form>
                <Form style={{marginRight:'120px'}}>
                  <Row>
                    <Form.Label>Secteur</Form.Label>
                    <Form.Select aria-label="Default select example" style={{marginRight:'70px'}}>
                      <option value='rabat'>
                        informatique
                      </option>
                    </Form.Select>
                  </Row>
                </Form>
              </div>
              <div className="map__body">
                <MapContainer style={{height: '81vh', width:'200vh'}} center={[this.state.lat, this.state.lang]} zoom={this.state.zoomLevel} scrollWheelZoom={false}>
                  <ChangeView center={[this.state.lat, this.state.lang]} zoom={this.state.zoomLevel} />
                  <TileLayer
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                    url="https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=dumwj19cUL35SI5Gnayy"
                  />
                  {
                    this.state.entreprises.map((entr, index) => 
                      <Marker position={[entr.Latitude, entr.Longitude]} key={index}>
                        <Popup>
                          <Card bg="Light" text="dark">
                            <Card.Header className="text-center">
                              <h5>Entreprise Details</h5>
                            </Card.Header>
                            <Card.Body>
                              <h6 className="h4" >Name:  <span className="span">{entr.name}</span></h6>
                              <h6 className="h4" >Secteur:  <span className="span">{entr.secteur}</span></h6>
                              <h6 className="h4">website: <span className="span">{entr.website}</span> </h6>
                              <h6 className="h4">Tel:  <span className="span stat">{entr.tel}</span> </h6>
                              <h6 className="h4">Address :  <span className="span">{entr.address}</span> </h6>
                            </Card.Body>
                            <Card.Footer className="text-center">
                              <Link to={`/entreDetail/${entr._id}`} style={{ textDecoration: 'none' }}>
                               <Button variant="contained" color="secondary" >Consulter</Button>
                              </Link>
                            </Card.Footer>
                          </Card>
                        </Popup>
                      </Marker>
                    )
                  }
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
