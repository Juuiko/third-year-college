import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import TitleContainer from '../components/title-container'
import CardDeck from 'react-bootstrap/CardDeck'
import PieCard from '../components/pie-card'
import SunCard from '../components/sunburst-card'
import Data from '../backend/testStats.json'
import Data2 from '../backend/testStats2.json'

class HomePage extends Component {

  render() {
    return (
      <div className="container-fluid">
           <TitleContainer
             title="Welcome to my Github Language Visualiser!"
             subtitle="A web app to visualise various stats about the languages you've used in Github"
           ></TitleContainer>
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
           <SunCard
           title="Test Graph"
           history={this.props.history}
           graph="test"
           data={Data2}
           fullscreen="/fullscreenPie"
           />
           <PieCard
           title="Test Graph"
           history={this.props.history}
           graph="test"
           data={Data}
           fullscreen="/fullscreenPie"
           />
           </CardDeck>
           </div>
      </div>
    )
  }
}

export default HomePage
