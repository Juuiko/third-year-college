import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form,FormControl,Button,Nav,Navbar} from 'react-bootstrap';


import CardDeck from 'react-bootstrap/CardDeck'
import PieCard from '../components/pie-card'
import SunCard from '../components/sunburst-card'
import StreamCard from '../components/stream-card'
import RadarCard from '../components/radar-card'
import Data from '../backend/testStats.json'
import Data2 from '../backend/testStats2.json'
import Data3 from '../backend/testStats3.json'
import Data4 from '../backend/testStats4.json'

class UserPage extends Component {

  render() {
    return (
      <div className="container-fluid">
           <Navbar bg="light" expand="lg">
             <Navbar.Brand><Link to="/">Github Vis</Link></Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">
               </Nav>
               <Form inline>
                 <FormControl type="text" placeholder="Github username" className="mr-sm-2" />
                 <Button variant="outline-info"><Link to="/juuiko">Search</Link></Button>
               </Form>
             </Navbar.Collapse>
           </Navbar>
           <div className="container-fluid">
           <CardDeck className="deck">
           <PieCard
           title="Test Graph"
           history={this.props.history}
           graph="test"
           data={Data}
           fullscreen="/fullscreenPie"
           />
           <SunCard
           title="Test Graph"
           history={this.props.history}
           graph="test"
           data={Data2}
           fullscreen="/fullscreenPie"
           />
           </CardDeck>
           <CardDeck className="deck">
           <StreamCard
           title="Test Graph"
           history={this.props.history}
           graph="test"
           data={Data3}
           fullscreen="/fullscreenPie"
           />
           <RadarCard
           title="Test Graph"
           history={this.props.history}
           graph="test"
           data={Data4}
           fullscreen="/fullscreenPie"
           />
           </CardDeck>
           </div>
      </div>
    )
  }
}

export default UserPage
