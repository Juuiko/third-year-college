import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoadingOverlay from 'react-loading-overlay';

import CardDeck from 'react-bootstrap/CardDeck'
import PieCard from '../components/pie-card'
import SunCard from '../components/sunburst-card'
import StreamCard from '../components/stream-card'
import Bar from '../components/navbar'
import sunData from '../backend/sunStats.json'
import streamData from '../backend/streamStats.json'

class UserPage extends Component {

  constructor() {
    super()
    this.state = {
      isActive: true,
      data: ""
    }
  }

  async componentDidMount() {
    // Simple GET request using fetch
    const response = await fetch('https://dry-meadow-51924.herokuapp.com/api?user=juuiko');
    const data = await response.json(); 
    this.setState({ data: data });
    this.setState ({ isActive: false });
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
           data={this.state.data}
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
