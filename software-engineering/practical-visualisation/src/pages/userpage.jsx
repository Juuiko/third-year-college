import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoadingOverlay from 'react-loading-overlay';

import CardDeck from 'react-bootstrap/CardDeck'
import PieCard from '../components/pie-card'
import SunCard from '../components/sunburst-card'
import StreamCard from '../components/stream-card'
import RadarCard from '../components/radar-card'
import Bar from '../components/navbar'
import Data from '../backend/testStats.json'
import Data2 from '../backend/testStats2.json'
import Data3 from '../backend/testStats3.json'
import Data4 from '../backend/testStats4.json'

class UserPage extends Component {

  constructor() {
    super()
    this.state = {
      isActive: true
    }
  }

  render() {
    return (
      <div className="container-fluid">
           <Bar />
           <LoadingOverlay
             active={this.state.isActive}
             spinner
             text={this.props.location.searchText}
             >
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
          </LoadingOverlay>
      </div>
    )
  }
}

export default UserPage
