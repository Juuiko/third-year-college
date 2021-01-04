import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoadingOverlay from 'react-loading-overlay';

import CardDeck from 'react-bootstrap/CardDeck'
import PieCard from '../components/pie-card'
import SunCard from '../components/sunburst-card'
import StreamCard from '../components/stream-card'
import Bar from '../components/navbar'
import pieData from '../backend/pieStats.json'
import sunData from '../backend/sunStats.json'
import streamData from '../backend/streamStats.json'

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
           <Bar text={this.props.location.searchText}/>
           <LoadingOverlay
             active={this.state.isActive}
             spinner
             text="Loading . . ."
             >
           <div className="container-fluid">
           <CardDeck className="deck">
           <PieCard
           title="Overall language distribution"
           history={this.props.history}
           graph="test"
           data={pieData}
           />
           <SunCard
           title="Language in each repo"
           history={this.props.history}
           graph="test"
           data={sunData}
           />
           </CardDeck>
           <CardDeck className="deck">
           <StreamCard
           title="Account codebase evolution over time"
           history={this.props.history}
           graph="test"
           data={streamData}
           />
           </CardDeck>
           </div>           
          </LoadingOverlay>
      </div>
    )
  }
}

export default UserPage
